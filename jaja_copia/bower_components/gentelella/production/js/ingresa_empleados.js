var boton= document.getElementById("finalizar");
boton.addEventListener("click", ingresa, false);
function ingresa(){
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var direccion=document.getElementById("direccion").value;
    var nacimiento=document.getElementById("nacimiento").value;
    var sueldo=document.getElementById("sueldo").value;
    var nombre_empresa=document.getElementById("nombre_empresa").value
    var sexo1= document.getElementById("hombre");
    var sexo2= document.getElementById("mujer");

var aviso= document.getElementById("aviso_proceso_finalizado");
aviso.innerHTML= nombre +" se ingresó correctamente a la base de datos.";

    alert(nombre_empresa)
    if(sexo1.checked){
      //alert("hombre");
      var sexo= "hombre"
    }else if(sexo2.checked){
      //alert("mujer")
      var sexo= "mujer"
    }else{
     alert("nada"); 
    }
    
   var miInit = { method: 'POST',
               headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
               body:'nombre1='+nombre+"&sexo="+sexo+"&apellido="+apellido+"&direccion="+direccion+"&nacimiento="+nacimiento+"&sueldo="+sueldo+"&nombre_empresa="+nombre_empresa
                };

fetch('./model/server.php',miInit)
.then(function(response)  {
    
  return response.text();
})
.then(function(miBlob) {
    
 console.log(miBlob);
});
}