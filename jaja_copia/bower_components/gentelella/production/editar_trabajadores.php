<?php require("./compendio_head.php"); ?>
<?php $db1 = new PDO('mysql:host=localhost;dbname=recursos_humanos','root','');
$db1->exec('SET CHARACTER SET utf8');
$user= $_SESSION["usuario"];
$empleado=$_GET["id"];
$resultado = $db1->query("SELECT * from ingreso_empleados WHERE empresa='$user' and id='$empleado'");




 
?>

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3>Información </h3>
              </div>

              <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
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
                    <h2>Actualiza <small>Datos personales</small></h2>
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

                    <form class="form-horizontal form-label-left" novalidate>

                      <p>Puedes actualizar los datos de tus empleados desde acá. Todos los cambios quedarán guardadados
                        en la base de datos.  
                      </p>
                      <span class="section">Datos Personales</span>

                      <div class="item form-group">
                          <?php foreach($resultado as $row): ?>
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Nombre <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input value=<?php echo $row["nombre"]; ?> disabled="disabled" id="name" class="form-control col-md-7 col-xs-12" data-validate-length-range="36"  name="name" placeholder="both name(s) e.g Jon Doe" required="required" type="text">
                        </div>
                      </div>
                      
                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="email">Apellido <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input value=<?php
                           if(strlen($row["apellido"]) < 1){ 
                          echo "Apellido";
                           }else{ 
                           echo $row["apellido"]; } ?> disabled="disabled" id="name" class="form-control col-md-7 col-xs-12"   name="name" placeholder="both name(s) e.g Jon Doe" required="required" type="text">
                        </div>
                      </div>
                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="email">Edad <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            
                          <input value=<?php echo $row["edad"]; ?> disabled="disabled" type="number" id="email2" name="confirm_email"  data-validate-linked="email" required="required" class="form-control col-md-7 col-xs-12">
                        </div>
                      </div>
                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Fecha Nacimiento <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input value=<?php echo $row["nacimiento"]; ?> disabled="disabled"  type="text" id="number" name="number" required="required" data-validate-minmax="10,100" class="form-control col-md-7 col-xs-12">
                        </div>
                      </div>
                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="website">Dirección <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input value=<?php echo $row["direccion"]; ?> disabled="disabled" type="text" id="website" name="website" required="required" placeholder="www.website.com" class="form-control col-md-7 col-xs-12">
                        </div>
                      </div>
                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="occupation">Puesto <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input value=<?php echo $row["puesto"]; ?> disabled="disabled" type="text" name="occupation" data-validate-length-range="5,20" class="optional form-control col-md-7 col-xs-12">
                        </div>
                      </div>
                      <div class="item form-group">
                        <label for="password" class="control-label col-md-3">Empresa</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input value=<?php echo $row["empresa"]; ?> disabled="disabled" id="" type="text" name="password" data-validate-length="6,8" class="form-control col-md-7 col-xs-12" required="required">
                        </div>
                      </div>
                      <div class="item form-group">
                        <label for="password2" class="control-label col-md-3 col-sm-3 col-xs-12">Jefatura</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input value=<?php echo $row["jefatura"]; ?> disabled="disabled" id="password2" type="text" name="password2" data-validate-linked="password" class="form-control col-md-7 col-xs-12" required="required">
                        </div>
                      </div>


                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="telephone">Ingreso <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input value=<?php echo $row["ingreso"]; ?> disabled="disabled" type="date" id="telephone" name="phone" required="required" data-validate-length-range="8,20" class="form-control col-md-7 col-xs-12">
                        </div>
                      </div>


                     <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="telephone">Sueldo <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input value=<?php
                           if(strlen($row["sueldo"]) < 1){ 
                          echo "Sueldo";
                           }else{ 
                           echo $row["sueldo"]; } ?> disabled="disabled" id="name" class="form-control col-md-7 col-xs-12"  name="name" placeholder="both name(s) e.g Jon Doe" required="required" type="text">
                        </div>
                      </div>



<div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="telephone">Rut <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input value=<?php
                           if(strlen($row["rut"]) < 1){ 
                          echo "11222333-k";
                           }else{ 
                           echo $row["rut"]; } ?> disabled="disabled" id="name" class="form-control col-md-7 col-xs-12"  name="name" placeholder="11222333-k" required="required" type="text">
                        </div>
                      </div>

<input type="hidden" value=<?php echo $_GET["id"]; ?> >
<input type="hidden" value=<?php echo $user; ?> >
                      <!--<div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="textarea">Textarea <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <textarea id="textarea" required="required" name="textarea" class="form-control col-md-7 col-xs-12"></textarea>
                        </div>
                      </div>-->
                      <div class="ln_solid"></div>
                      <div class="form-group">
                        <div class="col-md-6 col-md-offset-3">
                          <button id="cancelar" class="btn btn-primary">Cancelar</button>
                          <button id="actualizar"  class="btn btn-danger">Actualizar</button>
                          
                          










<button type="button" id="guardar" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Guardar</button>

                  <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                      <div class="modal-content">

                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                          </button>
                          <h4 class="modal-title" id="myModalLabel2">Modificaciones Guardadas</h4>
                        </div>
                        <div class="modal-body">
                          <h4>Actualización realizada</h4>
                          <p> Los cambios que realizaste fueron ingresados a la base de datos. Recuerda tener precaución con los datos de tus 
                            empleados. 
                          </p>
                          
                        </div>
                        <div class="modal-footer">
                          
                          <button id="volver" type="button" class="btn btn-primary">Volver</button>
                        </div>

                      </div>
                    </div>
                  </div>













                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <?php endforeach; ?>


<script src="./js/funcion_fetch.js"></script>
<script src="./js/actualizar_empleados_js.js"></script>


        <!-- /page content -->

        <!-- footer content -->
        <footer>
          <div class="pull-right">
            Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>

    <!-- jQuery -->
    <script src="../vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="../vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="../vendors/nprogress/nprogress.js"></script>
    <!-- validator -->
    <script src="../vendors/validator/validator.js"></script>

    <!-- Custom Theme Scripts -->
    <script src="../build/js/custom.min.js"></script>
	
  </body>
</html>