const webpush = require('web-push'); 
const express = require('express');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var clave_publica= 'BPZ7bJWuxPekyI4PUsYqnWHNSPCUjbQVwacEWh4EnGF4jhF68tSCKYPbwLPTC7s-XLChzvr6rKZ61i0m78BDqiY';
var clave_privada= 'IQWiHeSbe43DGAJYXgkVsITRD781ST0_Vkj5LBNp-aY';
var dateFormat = require('dateformat');
var now = new Date();
console.log(dateFormat(now, "dd/mm/yyyy")); //01/06/2017
const fecha=dateFormat(now, "dd/mm/yyyy");
var hora= parseFloat(dateFormat(now,'HH')) + parseFloat((dateFormat(now,'MM')/60))
const app = express();

console.log(Date)
verifica_movimientos(fecha)

function verifica_movimientos(fecha){
 

   var client = mysql.createConnection({
     user: 'root',
     password: 'jazzmaster'
     });



    client.query('USE recursos_humanos');
 

         client.query('SELECT * FROM ingreso_empleados', function(err, result,fields) {  
       
                for (var index = 0; index < result.length; index++) {
                var element = result[index];
                console.log(element["id"]);

               verifica_en_tabla_asistencia(element["id"], fecha, element["hora_entrada_jornada"], element["hora_salida_jornada"] );
               
                }

         
             client.end();
         });
        

  
} // fin funcion de base de datos


function verifica_en_tabla_asistencia(id, fecha, hora_entrada_jornada, hora_salida_jornada){
    var client = mysql.createConnection({
        user: 'root',
        password: 'jazzmaster'
        });
   fecha="01/06/2017";
   
  //cadena.substr(inicio[, longitud])

  hora_entrada= hora_entrada_jornada.substr(0, 2) + (hora_entrada_jornada.substr(2, 2)/60)
  hora_salida= hora_salida_jornada.substr(0, 2) + (hora_salida_jornada.substr(2, 2)/60)
       client.query('USE recursos_humanos');
    
   
            client.query('SELECT * FROM asistencia WHERE id_trabajador="'+id+'" AND fecha="'+fecha+'"', function(err, result,fields) {  
         console.log("variable hora: "+ hora);
         console.log("variable hora_entrada: "+ hora_entrada);

                if(hora_entrada < hora){
                    
                    result.length == 0 ?  envia_notificacion(id, "Recuerda marcar tu entrada.") : console.log("nada");
                }else if(hora_salida < hora){
                    result.length == 0 ?  envia_notificacion(id, "Recuerda Marcar tu salida.") : console.log("nada");
                }
               
                
                client.end();
            });
       
}


function envia_notificacion(id_trabajador, texto){

    var client = mysql.createConnection({
        user: 'root',
        password: 'jazzmaster'
        });
   
   
   
       client.query('USE recursos_humanos');
    
   
            client.query('SELECT * FROM ingreso_empleados WHERE id="'+id_trabajador+'"', function(err, result,fields) {  
          
                   for (var index = 0; index < result.length; index++) {
                   var element = result[index];
                   var endpoint=element["endpoint"]
                   var auth= element["auth"]
                   var p256dh=element["p256dh"]
                   console.log(auth);
   
                 
                 auth.length>0 ? envio_notificaciones(clave_publica,clave_privada, endpoint, auth, p256dh, texto) : console.log("Falta suscripcion")
                   }
   
            
                client.end();
            });


}








function envio_notificaciones(clave_publica,clave_privada, variable_endpoint, variable_auth, variable_p256dh, texto){
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
       
           var body = texto;
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

