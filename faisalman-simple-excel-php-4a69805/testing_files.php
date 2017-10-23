<?php
require 'clase_procesador_archivos.php';

$ruta= scandir($_GET["nombreRuta"]);
print_r($ruta);

echo "<br> <h1>adfsasfd</h1>";

$objeto_instancia1= new proceso();
$array_para_clase= $objeto_instancia1->recibe_ruta($ruta, $_GET["nombreRuta"]);


/*echo '<form action="testing_files.php" method="post" enctype="multipart/form-data"> 
            <input type="file" name="file1"/> 
            <input type="submit"/> 
        </form> ';


echo $path_parts['dirname'], "\n";


echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";

$ficheros1  = scandir($path_parts['dirname']);
//$ficheros2  = scandir($directorio, 1);

$path_parts1 = pathinfo($ficheros1[2]);
 echo $path_parts1["filename"];
 echo "<br>";
  echo "<br>";
   echo "<br>";
    echo "<br>";
     echo "<br>";
 echo $ficheros1[3];

 echo count($ficheros1);
//print_r($ficheros1);
print_r($ficheros1);*/


?>