<?php

abstract class conexion_base_recursos_humanos
{
public $tabla;
public $dbh;



 public function conexion()
 {
 try {
$this->dbh = new PDO('mysql:host=localhost;dbname=recursos_humanos;charset=utf8', 'root', 'jazzmaster', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
$this->dbh->exec("SET CHARACTER SET utf8");
$this->dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$this->dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
//echo "conexion Realizada";
} catch (PDOException $e) {
print "Error!: " . $e->getMessage();
die();
}
 }


}

























class crud_variables_empresa extends conexion_base_recursos_humanos{

const EXITO= "Ejecución exitosa";
const ERROR= "Ejecución Con Error";

    function __construct(){
      
      
    }

/*

********************************************************************************************************************
FUNCIONES PARA INGRESO A LA BASE DE DATOS:
********************************************************************************************************************

*/



function insert_por_query($query){
    
        try {
           
        $this->conexion();
        $pdo = $this->dbh->prepare($query);
        
        $pdo->execute();
        $this->dbh = null;
        echo $this::EXITO;
        } catch (PDOException $e) {
        echo $e->getMessage();
        echo $this::ERROR;
        }
    }




    function update_query($query){
        
            try {
               
            $this->conexion();
            $pdo = $this->dbh->prepare($query);
                      $pdo->execute();
            $this->dbh = null;
            echo $this::EXITO;
            } catch (PDOException $e) {
            echo $e->getMessage();
            echo $this::ERROR;
            }
        }
        

public function get_por_query($query)
{
try {
    $this->conexion();
$query = $this->dbh->query($query);
return $query->fetchAll();
$this->dbh = null;
echo $this::EXITO;
}catch (PDOException $e) {
$e->getMessage();
echo $this::ERROR;
echo $e;
}
}

}











?>