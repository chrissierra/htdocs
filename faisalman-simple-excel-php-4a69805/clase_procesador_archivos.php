<?php

require './clase_csv_excelconverter.php';
require './PHPExcel.php';

class proceso extends CSVToExcelConverter{

    public $grupo_archivos = array();
    public $ruta;

public function proceso(){
$grupo_final= $this->grupo_archivos;

for ($i=2; $i < count($grupo_final) ; $i++) { 
    
    
    $path_parts1 = pathinfo($grupo_final[$i]);
    //print_r($path_parts1);
    echo "<h1>" . $path_parts1["basename"]. "</h1><br>";

       

}
 

    CSVToExcelConverter::convert($grupo_final, 'php://output');

}




public function recibe_ruta($grupo_archivos, $ruta){

$this->grupo_archivos= $grupo_archivos;
$this->ruta= $ruta;
$this->proceso();

}


}


?>