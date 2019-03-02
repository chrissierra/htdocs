const webpush = require('web-push'); 
const express = require('express');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var clave_publica= 'BPZ7bJWuxPekyI4PUsYqnWHNSPCUjbQVwacEWh4EnGF4jhF68tSCKYPbwLPTC7s-XLChzvr6rKZ61i0m78BDqiY';
var clave_privada= 'IQWiHeSbe43DGAJYXgkVsITRD781ST0_Vkj5LBNp-aY';

// CLAVES PARA SERVIDOR RASPBERRY:
// BPZ7bJWuxPekyI4PUsYqnWHNSPCUjbQVwacEWh4EnGF4jhF68tSCKYPbwLPTC7s-XLChzvr6rKZ61i0m78BDqiY  // PUBLICA
// IQWiHeSbe43DGAJYXgkVsITRD781ST0_Vkj5LBNp-aY    // privada


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    
    next();
  });

app.post('/guarda_suscripcion/', function (req, res) {
   //console.log(req.body.endpoint)
    return saveSubscriptionToDatabase(req, res)
   
});


app.get('./')


webpush.setVapidDetails( 
 'mailto:contact@deanhume.com',
'BIgvTzC5o2JYKCmVImnqI6ioqnxwsupKdEKhL6l9z3wqWoK0gk9gLyThh1waBJzDNx7uxJmyHMfmCYxsT8RzbJA', // clave publica
 'HdYqVMvhC2UMvZ66cMUDKx1RMToC7ebApQEunf9CU6c'  // clave privada
);

 

 const pushSubscription = { 
 endpoint: "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABaExTnnTGY6ohxTBlhth04HKoS9wNfQBby7kEUYG9BK4GRtGksnsgJ-aG5vMhIgnqz6NeCNDQTTkHFpoQRy_X24o_Z4qQ7iW0102upnqt8a9j5s5e0ViW8zcVTm6awXKJZg8U2rYZyrn8gyGdg4odUvN0EyVxZfPkK5euaMHPwbUFmBf8",
 keys: {
    auth: "YAk3xpUchsKXv4-eU-mM9A",
    p256dh: "BITcRjouUO90HubH4fGcfw7zGU8UNmmMN9pBbxqiKBBtVCT-fMQdZkKA9tp9dzeNQKXFi-oRoVy5RENOkbMsnO4"
    }
    };

    var body = 'Thank you for registering';
    var iconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYvZiI62X-yFMb9r736TK6TbopKjpOtyZSJnL4aaaxJlXyjZb';



    webpush.sendNotification(pushSubscription, 
    JSON.stringify({
    msg: body,
    url: 'http://localhost:3111/',
    icon: iconUrl
    }))
    .then(result => "hola")
    .catch(err => { console.log(err); });

   app.listen(8080, function () {
    console.log('Web push app listening on port 3111!')
   });
   






   function saveSubscriptionToDatabase(variable, res){
       console.log(variable.body.endpoint)

       console.log(variable.body.id)

       /*
       mysql:
       */

      var client = mysql.createConnection({
        user: 'root',
        password: 'jazzmaster'
        });



       client.query('USE recursos_humanos');
    


        client.query('UPDATE ingreso_empleados SET endpoint="'+variable.body.endpoint+'",auth="'+variable.body.auth+'",p256dh="'+variable.body.p256dh+'"  where id="'+variable.body.id+'"', function (err, result) {
      
        });

        envio_notificaciones(clave_publica,clave_privada, variable.body.endpoint, variable.body.auth, variable.body.p256dh);

/*
        client.query('SELECT * FROM ingreso_empleados ORDER BY id', function(err, result,fields) {
            if(err) {
                console.log(err);
            } else {
           // console.log(result);
          //  console.log(fields);
for (let index = 0; index < result.length; index++) {
    const element = result[index];
    console.log(element["nombre"])
}

            }
            client.end();
            });
           
     */
     
   } // fin funcion de base de datos







   //Received PushSubscription:  {"endpoint":"https://fcm.googleapis.com/fcm/send/dUMkOQoY3GE:APA91bGj8bLU5LSXhQgmTMtMyPTXBiTeXJWIdCj49J7niqXxCSLDrFm5IohBp8YbTSPMK9SXWFyKWJYNfdVpkj_TaF9mO91pZeAuNvAslxsIEZFqQlC3iCpPHtEc81lA1_qURFgiKMWN","expirationTime":null,"keys":{"p256dh":"BKfR37UA3XmS8epid8VbtJCmLmqOvQmw8m0saCOxv97BMIegRi1c93ORsvcRYOYzoU3Guv-kMYOuAjmKfq2udqc=","auth":"SXelRgvlvgdvEB-5na4edA=="}} 1era


   //Received PushSubscription:  {"endpoint":"https://fcm.googleapis.com/fcm/send/d7O4hzHxySY:APA91bEKDm6DDnpsJMFtpSxSZjQLE1PotAmgIkubMTUdropOqLe4AY9RhF6wpgML1Xj70nfRXqBCX5BRQT_ggvpW5AdZm5ZCTAs0lI86yH8Ujk6KtFhv7kJwyCjBWR9kG19QIqXbLHG-","expirationTime":null,"keys":{"p256dh":"BIG7fjr-zhR1OIwFPscpwwfWVQxv722q7WThuaCrb3murNNigUa7T_xH6_cw190F2GbY0KKZTIr1QNwv9_SCUc0=","auth":"2bcKrFsAEFKZiYBmcf8dtA=="}}2

   //Received PushSubscription:  {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABaExTnnTGY6ohxTBlhth04HKoS9wNfQBby7kEUYG9BK4GRtGksnsgJ-aG5vMhIgnqz6NeCNDQTTkHFpoQRy_X24o_Z4qQ7iW0102upnqt8a9j5s5e0ViW8zcVTm6awXKJZg8U2rYZyrn8gyGdg4odUvN0EyVxZfPkK5euaMHPwbUFmBf8","keys":{"auth":"YAk3xpUchsKXv4-eU-mM9A","p256dh":"BITcRjouUO90HubH4fGcfw7zGU8UNmmMN9pBbxqiKBBtVCT-fMQdZkKA9tp9dzeNQKXFi-oRoVy5RENOkbMsnO4"}} // mozila


   function envio_notificaciones(clave_publica,clave_privada, variable_endpoint, variable_auth, variable_p256dh){
    webpush.setVapidDetails( 
        'mailto:contact@deanhume.com',
       clave_publica, // clave publica
        clave_privada  // clave privada
       );
       
        
       
        const pushSubscription = { 
        endpoint: variable_endpoint,
        keys: {
           auth: variable_auth,
           p256dh: variable_p256dh
           }
           };
       
           var body = 'Thank you for registering';
           var iconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYvZiI62X-yFMb9r736TK6TbopKjpOtyZSJnL4aaaxJlXyjZb';
       
       
       
           webpush.sendNotification(pushSubscription, 
           JSON.stringify({
           msg: body,
           url: 'http://localhost:3111/',
           icon: iconUrl
           }))
           .then(result => "hola")
           .catch(err => { console.log(err); });
       
   }