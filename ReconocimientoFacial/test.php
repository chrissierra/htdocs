<?php

  header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: *, Content-Type, X-Auth-Token');

if(isset($_POST["hola"])){
$hola = $_POST["hola"];	
echo json_encode($hola);
}else{
	echo json_encode('asdfasdfadsfasfdasfdasfd');
}

