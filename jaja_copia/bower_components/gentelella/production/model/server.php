<?php
require './clase_actividad_reciente.php';
try{
   // $base= new PDO('mysql:host=localhost; dbname=super', 'root', '');
//$base->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//$base->exec("SET CHARACTER SET utf8");
   // $base= new PDO('mysql:host=localhost; dbname=super', 'root', '');

$pdo=new PDO('mysql:host=localhost; dbname=recursos_humanos','root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec('SET CHARACTER SET utf8');
}catch(PDOException $e){
    $error= "no se puede conectar";
    exit();
}
echo "variable sesion: ".$_POST["nombre_empresa"];
echo $_POST["nombre1"] . "<br>";
echo $_POST["apellido"] . "<br>";
echo $_POST["sexo"] . "<br>";
echo $_POST["direccion"] . "<br>";
echo $_POST["nacimiento"] . "<br>";
echo $_POST["sueldo"] . "<br>";

try{


$sql= 'INSERT INTO ingreso_empleados SET nombre=:nombre,
apellido=:apellido,
edad=:edad,
sexo=:sexo,
nacimiento=:nacimiento,
direccion=:direccion,
sueldo=:sueldo,
puesto=:puesto,
empresa=:empresa,
jefatura=:jefatura,
ingreso=CURDATE()';

$s= $pdo->prepare($sql);
$s->bindValue(':nombre',$_POST["nombre1"] );
$s->bindValue(':apellido',$_POST["apellido"] );
$s->bindValue(':edad',15 );
$s->bindValue(':sexo',$_POST["sexo"] );
$s->bindValue(':nacimiento',$_POST["nacimiento"] );
$s->bindValue(':direccion',$_POST["direccion"] );

$s->bindValue(':sueldo',$_POST["sueldo"] );
$s->bindValue(':puesto',"comprador" );
$s->bindValue(':empresa',$_POST["nombre_empresa"] );
$s->bindValue(':jefatura','imbecil' );

$s->execute();

}catch(PDOException $e){
    $error="error no se puede ingresar";
    echo $error;
    exit();
}

$actividad_reciente1= new actividad_reciente($_POST["nombre_empresa"], $_POST["nombre1"], "Ingreso de nuevo empleado: ". $_POST["nombre1"]);
$actividad_reciente1->tabla= "actividad_reciente";

$actividad_reciente1->guarda_actividad_base();

//$json_str = file_get_contents('php://input');


?>
