<?php
date_default_timezone_set("America/Santiago");
class base_de_datos{

    function cambiar_puntos_por_guiones($variable_a_cambiar){
        return str_replace(".", "-", $variable_a_cambiar);
        }



        function convertir_en_cifra_fecha($variable_a_cambiar){
           
        


            if(substr_count($variable_a_cambiar, '.') === 2){
                $array = explode(".", $variable_a_cambiar);

                if($array[2] > date("Y")){
                    $constante_año= ($array[2]-date("Y"));
                }elseif ($array[2] < date("Y")) {
                    $constante_año=  (-1)*(date("Y")-$array[2]);
                }else{
                    $constante_año=0;
                }
                    
                
               
               
                $constante_año= $constante_año * 365;
                return date("z", mktime(0, 0, 0,$array[1], $array[0], $array[2]))+$constante_año;
            }else{
                return 0;
            }

           

            }// FIN FUNCION CONVERTIR EN CIFRA FECHA



            function cantidad_oc($em, $reparto){



                  if($em === 0){
                      return $em;
                  }else{
                      return str_replace(".", "", $reparto) - str_replace(".", "", $em);
                  }
            }// fin funcion cantidad oc

    }

?>