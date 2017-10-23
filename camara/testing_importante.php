<?php

if(isset($_GET["name"])){


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

curl -X POST "http://hsierrapropiedades.com/Inicio/testing_importante.php/?name=afd"  http://hsierrapropiedades.com/Inicio/testing_importante.php?

wget https://github.com/sightmachine/simplecv   
sudo apt-get install

uv4l --auto-video_nr --driver uvc --device-id 046d:082b --server-option '--port=8080'
--server-option '--connection-timeout=1'
--server-option '--enable-keepalive=no'
--server-option '--keepalive-timeout=0'
--server-option '--max-streams=3'
--server-option '--thread-idle-time=1'


uv4l --driver uvc --driver-help
USB Video Class driver mandatory options:
  --device-path arg                     path to the USB device to detect in the
                                        form <bus>:<address> (as hexadecimal
                                        numbers)

                                        uv4l --driver uvc --device-path 046d:082b

                                        uv4l --syslog-host localhost --driver uvc --device-id 046d:082b


                                        sudo nano /etc/motion/camera1.conf

sudo uv4l -nopreview --auto-video_nr  --device-id 046d:082b --encoding mjpeg --width 640 --height 480 --framerate 20 --server-option '--port=9090' --server-option '--max-queued-connections=30' --server-option '--max-streams=25' --server-option '--max-threads=29'

sudo apt-get install g-dev libx264-142 libavcodec56 libavformat56 libmysqlclient18 libswscale3 libpq5
sudo apt-get install libjpeg-dev libx264-142 libavcodec56 libavformat56 libmysqlclient18 libswscale3 libpq5

cp /usr/local/share/motioneye/extra/motioneye.conf.sample /etc/motioneye/motioneye.conf

cp /usr/local/share/motioneye/extra/motioneye.systemd-unit-local/etc/systemd/system/motioneye.service

sudo cp /usr/share/motioneye/extra/motioneye.conf.sample motioneye.conf

meyectl startserver -c motioneye.conf

sudo meyectl startserver -c /etc/motioneye/motioneye.conf
sudo meyectl stopserver -c /etc/motioneye/motioneye.conf












  country=CL
        update_config=1
        ctrl_interface=/var/run/wpa_supplicant
        
        network={
            scan_ssid=1
            ssid="Facu"
            psk="junio2011"
        }