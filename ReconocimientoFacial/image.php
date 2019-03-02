<?php

header('Access-Control-Allow-Origin: "http://localhost:4200"');



require "FaceDetector.php";

//echo  json_encode($_POST["hola"]);

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
use svay\FaceDetector;

//file_put_contents("Tmpfile.jpg", fopen("https://scontent.fscl3-1.fna.fbcdn.net/v/t1.0-9/1013958_10201380549699553_1461157092_n.jpg?_nc_cat=103&oh=5d517cc4b39ee84d3b878b012c2e01e6&oe=5C1DA1F4", 'r'));


file_put_contents("Tmpfile.jpg", fopen($request->url, 'r'));


$file = file_get_contents('Tmpfile.jpg');
$faceDetect = new FaceDetector();
$faceDetect->faceDetect('Tmpfile.jpg');
//echo $faceDetect->toJson();	
$respuesta = $faceDetect->toJson();	



//$email = $request->hola;
echo json_encode($respuesta);
