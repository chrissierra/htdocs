<?php




    exec("cvlc -vvv alsa://plughw:1 --sout '#transcode{acodec=mp3,ab=64,channels=1}:standard{access=http,dst=0.0.0.0:8888/out.mp3}'");
    echo "cvlc -vvv alsa://plughw:1 --sout '#transcode{acodec=mp3,ab=64,channels=1}:standard{access=http,dst=0.0.0.0:8888/out.mp3}'"; //así funciona

    header("location:./listo_vlc.php"); 
// cvlc -vvv alsa://plughw:1 --sout '#transcode{acodec=mp3,ab=64,channels=1}:standard{access=http,dst=0.0.0.0:8888/out.mp3}'



?>