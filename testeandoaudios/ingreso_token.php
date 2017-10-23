<?php
require_once './twilio/Twilio/autoload.php'; 

use twilio\Twilio\Rest\Client.php;
if(isset($_GET["name"])){


 

 



$account_sid = 'ACe732c3803641fce715d80151a0f587d5'; 
$auth_token = '[AuthToken]'; 
$client = new Client($account_sid, $auth_token); 
 
$messages = $client->accounts("ACe732c3803641fce715d80151a0f587d5") 
  ->messages->create("+56944750588", array( 
        'From' => "+56945950541",  
        'Body' => "dsafafdsf",      
  ));
 




  $dbhost = 'localhost';
    $dbuser = 'c0120158_super';
    $dbpass = 'wameza87NI';
    $dbname = 'c0120158_super';

    $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO prueba_camaras (variable) VALUES ('John')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

}




?>