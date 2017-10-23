<?php require("./compendio_head.php"); ?>

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3>Ingreso Personal</h3>
              </div>

              <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Búsqueda..">
                    <span class="input-group-btn">
                              <button class="btn btn-default" type="button">Go!</button>
                          </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>

            <div class="row">

              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Formulario de ingreso <small>Contratación</small></h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">


                    <!-- Smart Wizard -->
                    <p>Completa los datos y sigue las instrucciones. Recuerda que estás agregando a la base de datos un nuevo empleado. Al finalizar se generarán los documentos de ingreso a la plataforma.</p>
                    <div id="wizard" class="form_wizard wizard_horizontal">
                      <ul class="wizard_steps">
                        <li>
                          <a href="#step-1">
                            <span class="step_no">1</span>
                            <span class="step_descr">
                                              Paso 1<br />
                                              <small>Datos Personales</small>
                                          </span>
                          </a>
                        </li>
                        <li>
                          <a href="#step-2">
                            <span class="step_no">2</span>
                            <span class="step_descr">
                                              Paso 2<br />
                                              <small>Datos de remuneración</small>
                                          </span>
                          </a>
                        </li>
                        <li>
                          <a href="#step-3">
                            <span class="step_no">3</span>
                            <span class="step_descr">
                                              Paso 3<br />
                                              <small>AFP / Isapre </small>
                                          </span>
                          </a>
                        </li>
                        <li>
                          <a href="#step-4">
                            <span class="step_no">4</span>
                            <span class="step_descr">
                                              Paso 4<br />
                                              <small>Agregar Trabajador</small>
                                          </span>
                          </a>
                        </li>
                      </ul>
                      <div id="step-1">
                        <form class="form-horizontal form-label-left" action="ingreso_basedatos.php" method="get">

                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Nombres <span class="required">*</span>
                            </label>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                              <input name="nombre" type="text" id="nombre" required="required" class="form-control col-md-7 col-xs-12">
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">Apellidos <span class="required">*</span>
                            </label>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                              <input name="apellido" type="text" id="apellido" name="last-name" required="required" class="form-control col-md-7 col-xs-12">
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="middle-name" class="control-label col-md-3 col-sm-3 col-xs-12">Dirección<span class="required">*</span></label>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                              <input name="direccion" id="direccion" class="form-control col-md-7 col-xs-12" type="text" name="middle-name">
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">Género<span class="required">*</span></label>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                              <div id="gender" class="btn-group" data-toggle="buttons">
                                <label class="btn btn-default" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                                  <input name="hombre" type="radio" id="hombre" value="male"> &nbsp; Masculino &nbsp;
                                </label>
                                <label class="btn btn-primary" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                                  <input name="mujer" type="radio" id="mujer" value="female"> Femenino
                                </label>
                              </div>
                            </div>
                          </div>
                          <input type="hidden" id="nombre_empresa" value=<?php echo $_SESSION["usuario"]; ?> >
                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">Fecha Nacimiento <span class="required">*</span>
                            </label>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                              <input name="nacimiento" id="nacimiento" class="date-picker form-control col-md-7 col-xs-12" required="required" type="text">
                            </div>
                          </div>

                        </form>

                      </div>




                      <div id="step-2">
                        <h2 class="StepTitle">Remuneraciones</h2>
                        <p>
                          Agrega el sueldo que se le entregará a tu trabajador. Indicando el valor líquido obtendrás automaticamente valor bruto y detalle de cada ítem.
                        </p>
                      <br><!--Sacar este br, hacerlo con css -->

 <form class="form-horizontal form-label-left" action="ingreso_basedatos.php" method="get">

                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Sueldo Líquido <span class="required">*</span>
                            </label>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                              <input name="" type="number" id="sueldo" required="required" class="form-control col-md-7 col-xs-12">
                            </div>
                         
                            



                          </div>
                        
                        </form>


                      </div>



                      <div id="step-3">
                        <h2 class="StepTitle">Información AFP e Isapre</h2>
                        <p>
                          Registra los datos de AFP e isapre de tu trabajador. También toda la información respecto situación de cesantía y ACHS. 
                        </p>
                       
                      </div>




                      <div id="step-4">
                        <h2 class="StepTitle">Finalizar Contratación</h2>
                        <p>Al presionar boton de Finalizar estarás inscribiendo a un nuevo trabajador a la base de datos. Sus datos de cotizaciones y pagos serán cargados al total del pago mensual por todos tus trabajadores. Si tienes certeza entonces de la contratación, presiona Finalizar!
                        </p>
                       
<button id="finalizar" type="button" class="btn btn-success" data-toggle="modal" data-target=".bs-example-modal-sm" data-placement="bottom" title="" data-original-title="Finaliza el proceso e ingresa al empleado">Finalizar</button>









   <!--<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Small modal</button>-->

                  <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                      <div class="modal-content">

                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                          </button>
                          <h4 class="modal-title" id="myModalLabel2">Proceso Finalizado</h4>
                        </div>
                        <div class="modal-body">
                          <h4>Empleado Ingresado</h4>
                          <p id="aviso_proceso_finalizado"></p>
                          
                        </div>
                        <div class="modal-footer">
                         <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>-->
                          <button type="button" class="btn btn-primary" id="volver_perfil">Volver</button>

                          <script>
                          var volver= document.getElementById("volver_perfil");
                          volver.addEventListener("click", volviendo, false);
                          function volviendo(){
                            location.href='./index.php';
                          }
                          </script>
                        </div>

                      </div>
                    </div>
                  </div>



















                      </div>

                    </div>
              
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /page content -->

        <!-- footer content -->
        <footer>
          <div class="pull-right">
            RRHH - Dashboard <a href="https://hsierrapropiedades.com">FreshCut</a>
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>

<!-- script para ingreso de clientes, envia info desde navagador o cliente al servidor -->
<script src="./js/ingresa_empleados.js"></script>
    <!-- jQuery -->
    <script src="../vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="../vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="../vendors/nprogress/nprogress.js"></script>
    <!-- jQuery Smart Wizard -->
    <script src="../vendors/jQuery-Smart-Wizard/js/jquery.smartWizard.js"></script>
    <!-- Custom Theme Scripts -->
    <script src="../build/js/custom.min.js"></script>

	
  </body>
</html>