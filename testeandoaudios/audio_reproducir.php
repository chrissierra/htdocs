<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');


 

#ACA VA LO QUE FUNCIONÓ

if ($_FILES["file"]["error"] > 0) {
    echo "Return Code: " . $_FILES["file"]["error"] . "";
  } else {
  $new_image_name = strtolower($_FILES['file']['name']);
  move_uploaded_file($_FILES["file"]["tmp_name"], $new_image_name);
 
  $hola= shell_exec("sudo mplayer algo.wav");
  $peo= system("sudo php audio_reproducir.php");
  $jaja= shell_exec("php /src/share/nginx/html/audio_reproducir.php");

  }
  /*
****************************************************************************************
*************************************
*******************
*********


*/




  /*
shell_exec("cd C:\Program Files (x86)\VideoLAN\VLC>");
shell_exec("start test.mp3");
echo shell_exec("ipconfig");
*/

// Where the file is going to be placed

/*
$target_path = "records/";

/* Add the original filename to our target path.
Result is "uploads/filename.extension" */

/*
$target_path = $target_path . basename( $_FILES['file']['name']);

if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
    echo "The file ".  basename( $_FILES['file']['name']).
    " has been uploaded";
} else{
    echo "There was an error uploading the file, please try again!";
    echo "filename: " .  basename( $_FILES['file']['name']);
    echo "target_path: " .$target_path;
}
?>
<?php
/*
// Where the file is going to be placed
$target_path = "./records/";

/* Add the original filename to our target path.
Result is "uploads/filename.extension" */
/*
$target_path = $target_path . basename( $_FILES['file']['name']);

if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
    echo "The file ".  basename( $_FILES['file']['name']).
    " has been uploaded";

    $soundfile = $target_path;
echo "<embed src =\"$soundfile\" hidden=\"true\" autostart=\"true\"></embed>";


    
} else{
    echo "There was an error uploading the file, please try again!";
    echo "filename: " .  basename( $_FILES['file']['name']);
    echo "target_path: " .$target_path;
}
*/
?>

