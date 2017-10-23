<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require_once("./base_datos.php");
/*
$path = "./"; 

$latest_ctime = 0;
$latest_filename = '';    

$d = dir($path);
while (false !== ($entry = $d->read())) {
  $filepath = "{$path}/{$entry}";
  // could do also other checks than just checking whether the entry is a file
  if (is_file($filepath) && filectime($filepath) > $latest_ctime) {
    $latest_ctime = filectime($filepath);
    $latest_filename = $entry;
  }
}

*/
function notificacion($id){
    


         //curl -d 'ingreso=ingreso&nombre=12&rut=2134&token=jajaj' http://christophersierra.ddns.net/notificaciones.php
         //curl -d 'nombre=token_begin' http://christophersierra.ddns.net/notificaciones.php
         $registrationIds = $id;
         #prep the bundle
         $msg = array
         (
         'body' => 'Hay un nuevo cliente interesado y quiere conversar con un ejecutivo.',
         'click_action' => 'https://hsierrapropiedades.com/Inicio/app_final',
         'title' => 'Tienes un nuevo Chat',
         'icon' => '/var/lib/motioneye/Camera2/2017-09-30/22-00-03.jpg',/*Default Icon*/
         'sound' => 'mySound'/*Default sound*/
         );
         $msg1 = array
         (
         'contents' => 'https://google.com',
         'link' => 'https://google.com'
         );
         $fields = array
         (
         'to' =>$id,
         'notification' => $msg,
         'data' => $msg1
         );
         
         $headers = array
         (
         'Authorization: key=' . 'AAAAzRLO86A:APA91bGOUEXT70nNI66udTIFH3M8ElCFUVnI8UrN0sfTss6WQU3RmQWhg7rwMqFH0f8XEeRnrfQhsuIftfSPqejMiX-uYG3g3JrdxzkWnxj9_5nk0Ald5ZlnSB-VG7jsaj7nbBxw49KS',
         'Content-Type: application/json'
         );
         #Send Reponse To FireBase Server 
         $ch = curl_init();
         curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
         curl_setopt( $ch,CURLOPT_POST, true );
         curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
         curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
         curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
         curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
         $result = curl_exec($ch );
         curl_close( $ch );
         #Echo Result Of FireBase Server
         echo $result;
         
}


$base= new crud_variables_empresa();

if($_POST["ingreso"]=="ingreso"){
 #ingresar token
    $nombre= $_POST["nombre"];
    $rut=$_POST["rut"];
    $token=$_POST["token"];
  
   $base->insert_por_query('INSERT into notificaciones SET nombre="'.$nombre.'",rut="'.$rut.'",token="'.$token.'"');
echo "listo";




}elseif($_POST["nombre"]=="token_begin"){
    # enviar curl
 $tokens= $base->get_por_query('SELECT * from notificaciones');
var_dump($tokens);
 foreach ($tokens as $key => $value) {
     # code...
echo $value["nombre"];
notificacion($value["token"]);
     
 }
     

 }


        

?>









































