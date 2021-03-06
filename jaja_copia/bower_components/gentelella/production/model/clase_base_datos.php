<?php
class Users
{
public static $instancia;
public $dbh;

 function __construct()
{
try {
$this->dbh = new PDO('mysql:host=localhost;dbname=recursos_humanos', 'root', '');
$this->dbh->exec("SET CHARACTER SET utf8");
$this->dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$this->dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
} catch (PDOException $e) {
print "Error!: " . $e->getMessage();
die();
}
}



public static function singleton()
{
if (!isset(self::$instancia)) {
$miclase = __CLASS__;
self::$instancia = new $miclase;
}
return self::$instancia;
}



public function get_usuarios($tabla, $usuario_administrador)
{
try {
$query = $this->dbh->query('SELECT * FROM '. $tabla .' WHERE quienhizo="'.$usuario_administrador.'" ORDER BY ID desc LIMIT 5' );
//$query->execute();
return $query->fetchAll();
$this->dbh = null;
}catch (PDOException $e) {
$e->getMessage();
}
}


public function delete_usuario($id)
{
try {
$query = $this->dbh->prepare('delete from users where id = ?');
$query->bindParam(1, $id);
$query->execute();
$this->dbh = null;
} catch (PDOException $e) {

$e->getMessage();
}
}




public function insertar_actividad_reciente($quienhizo, $afectado, $quehizo, $tabla, $valor_var_cambiada)
{
try {
/*$hola = new PDO('mysql:host=localhost;dbname=recursos_humanos', 'root', '');
$hola->exec("SET CHARACTER SET utf8");
$hola->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$hola->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);*/

$pdo = $this->dbh->prepare('INSERT INTO '.$tabla.' SET quienhizo=:quienhizo, afectado=:afectado, cuando=CURDATE(), quehizo=:quehizo, variable_cambiada=curTime(), valor_var_cambiada=:valor_var_cambiada');

$pdo->bindValue(':quienhizo', $quienhizo);
$pdo->bindValue(':afectado', $afectado);
$pdo->bindValue(':quehizo', $quehizo);

$pdo->bindValue(':valor_var_cambiada', $valor_var_cambiada);
$pdo->execute();
$this->dbh = null;
} catch (PDOException $e) {
echo $e->getMessage();
}
}





public function insert_usuario($nombre,$email,$registro)
{
try {
$query = $this->dbh->prepare('insert into users values(null,?,?,?)');
$query->bindParam(1, $nombre);
$query->bindParam(2, $email);
$query->bindParam(3, $registro);
$query->execute();
$this->dbh = null;
} catch (PDOException $e) {
$e->getMessage();
}
}


public function update_usuario($nombre,$apellido, $edad, $fecha_nacimiento, $direccion, $puesto, $empresa, $jefatura, $ingreso, $sueldo, $rut, $tabla, $id)
{
try {
$query = $this->dbh->prepare('update '.$tabla.' SET nombre = ?, apellido=?, edad = ?, nacimiento=?,direccion = ?, puesto=?,empresa = ?, jefatura=?,ingreso=?,sueldo = ?, rut=?  WHERE id = ?');
$query->bindParam(1, $nombre);
$query->bindParam(2, $apellido);
$query->bindParam(3, $edad);
$query->bindParam(4, $fecha_nacimiento);
$query->bindParam(5, $direccion);
$query->bindParam(6, $puesto);
$query->bindParam(7, $empresa);
$query->bindParam(8, $jefatura);
$query->bindParam(9, $ingreso);
$query->bindParam(10, $sueldo);
$query->bindParam(11, $rut);

$query->bindParam(12, $id);

$query->execute();
$this->dbh = null;
} catch (PDOException $e) {

echo $e->getMessage();
}
}
}
?>