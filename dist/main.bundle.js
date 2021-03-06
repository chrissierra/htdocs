webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__ = __webpack_require__("./node_modules/angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_grid_list__ = __webpack_require__("./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_save_forms_guard__ = __webpack_require__("./src/app/guards/save-forms-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_shared_navbar_navbar_component__ = __webpack_require__("./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_ingresa_ingresa_component__ = __webpack_require__("./src/app/components/ingresa/ingresa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_ingresa_pasos_pasouno_pasouno_component__ = __webpack_require__("./src/app/components/ingresa/pasos/pasouno/pasouno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_ingresa_pasos_pasodos_pasodos_component__ = __webpack_require__("./src/app/components/ingresa/pasos/pasodos/pasodos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_ingresa_pasos_pasotres_pasotres_component__ = __webpack_require__("./src/app/components/ingresa/pasos/pasotres/pasotres.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_planilla_planilla_component__ = __webpack_require__("./src/app/components/planilla/planilla.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_perfil_trabajador_perfil_trabajador_component__ = __webpack_require__("./src/app/components/perfil-trabajador/perfil-trabajador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_perfil_trabajador_turnos_variables_turnos_variables_component__ = __webpack_require__("./src/app/components/perfil-trabajador/turnos-variables/turnos-variables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_perfil_trabajador_turnos_fijos_turnos_fijos_component__ = __webpack_require__("./src/app/components/perfil-trabajador/turnos-fijos/turnos-fijos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_perfil_trabajador_perfil_perfil_component__ = __webpack_require__("./src/app/components/perfil-trabajador/perfil/perfil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_perfil_trabajador_historial_turnos_historial_turnos_component__ = __webpack_require__("./src/app/components/perfil-trabajador/historial-turnos/historial-turnos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_perfil_trabajador_liberar_turnos_liberar_turnos_component__ = __webpack_require__("./src/app/components/perfil-trabajador/liberar-turnos/liberar-turnos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_dashboard_dash_board_dash_board_component__ = __webpack_require__("./src/app/components/dashboard/dash-board/dash-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_dashboard_perfil_empleador_perfil_empleador_component__ = __webpack_require__("./src/app/components/dashboard/perfil-empleador/perfil-empleador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_dashboard_ingreso_sucursal_ingreso_sucursal_component__ = __webpack_require__("./src/app/components/dashboard/ingreso-sucursal/ingreso-sucursal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_dashboard_reportes_reportes_component__ = __webpack_require__("./src/app/components/dashboard/reportes/reportes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_perfil_trabajador_marcaje_marcaje_component__ = __webpack_require__("./src/app/components/perfil-trabajador/marcaje/marcaje.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_dashboard_sueldos_sueldos_component__ = __webpack_require__("./src/app/components/dashboard/sueldos/sueldos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_perfil_trabajador_liberar_sueldos_liberar_sueldos_component__ = __webpack_require__("./src/app/components/perfil-trabajador/liberar-sueldos/liberar-sueldos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_perfil_trabajador_haber_no_imponible_haber_no_imponible_component__ = __webpack_require__("./src/app/components/perfil-trabajador/haber-no-imponible/haber-no-imponible.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_perfil_trabajador_SueldosLiberados_SueldosLiberadosComponent_component__ = __webpack_require__("./src/app/components/perfil-trabajador/SueldosLiberados/SueldosLiberadosComponent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_perfil_trabajador_resumen_resumen_component__ = __webpack_require__("./src/app/components/perfil-trabajador/resumen/resumen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_ingresa_interfaces_empleado_service__ = __webpack_require__("./src/app/components/ingresa/interfaces/empleado.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_ingreso_usuario_servidor_service__ = __webpack_require__("./src/app/services/ingreso-usuario-servidor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_loginservices_service__ = __webpack_require__("./src/app/services/loginservices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_rutasservidor_service__ = __webpack_require__("./src/app/services/rutasservidor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_planillaservices_service__ = __webpack_require__("./src/app/services/planillaservices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_perfil_trabajador_service_service__ = __webpack_require__("./src/app/services/perfil-trabajador-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_liberar_turnos_service__ = __webpack_require__("./src/app/services/liberar-turnos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pipes_entradaosalida_pipe__ = __webpack_require__("./src/app/pipes/entradaosalida.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pipes_nombre_del_dia_del_mes_pipe__ = __webpack_require__("./src/app/pipes/nombre-del-dia-del-mes.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__services_guardar_sucursal_service__ = __webpack_require__("./src/app/services/guardar-sucursal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__services_marcaje_service_service__ = __webpack_require__("./src/app/services/marcaje-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__services_sueldos_service__ = __webpack_require__("./src/app/services/sueldos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_perfil_trabajador_visualizacion_liquidaciones_visualizacion_liquidaciones_component__ = __webpack_require__("./src/app/components/perfil-trabajador/visualizacion-liquidaciones/visualizacion-liquidaciones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_perfil_trabajador_actualizar_turnos_fijos_actualizar_turnos_fijos_component__ = __webpack_require__("./src/app/components/perfil-trabajador/actualizar-turnos-fijos/actualizar-turnos-fijos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Angular material






//Guards

// Angular maps

// rutas:

// Componentes

























// servicios















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_shared_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_ingresa_ingresa_component__["a" /* IngresaComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_ingresa_pasos_pasouno_pasouno_component__["a" /* PasounoComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_ingresa_pasos_pasodos_pasodos_component__["a" /* PasodosComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_ingresa_pasos_pasotres_pasotres_component__["a" /* PasotresComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_planilla_planilla_component__["a" /* PlanillaComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_perfil_trabajador_perfil_trabajador_component__["a" /* PerfilTrabajadorComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_perfil_trabajador_turnos_variables_turnos_variables_component__["a" /* TurnosVariablesComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_perfil_trabajador_turnos_fijos_turnos_fijos_component__["a" /* TurnosFijosComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_perfil_trabajador_perfil_perfil_component__["a" /* PerfilComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_perfil_trabajador_historial_turnos_historial_turnos_component__["a" /* HistorialTurnosComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_perfil_trabajador_liberar_turnos_liberar_turnos_component__["a" /* LiberarTurnosComponent */],
                __WEBPACK_IMPORTED_MODULE_47__pipes_entradaosalida_pipe__["a" /* EntradaosalidaPipe */],
                __WEBPACK_IMPORTED_MODULE_48__pipes_nombre_del_dia_del_mes_pipe__["a" /* NombreDelDiaDelMesPipe */],
                __WEBPACK_IMPORTED_MODULE_30__components_dashboard_dash_board_dash_board_component__["a" /* DashBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_dashboard_perfil_empleador_perfil_empleador_component__["a" /* PerfilEmpleadorComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_dashboard_ingreso_sucursal_ingreso_sucursal_component__["a" /* IngresoSucursalComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_dashboard_reportes_reportes_component__["a" /* ReportesComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_perfil_trabajador_marcaje_marcaje_component__["a" /* MarcajeComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_dashboard_sueldos_sueldos_component__["a" /* SueldosComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_perfil_trabajador_liberar_sueldos_liberar_sueldos_component__["a" /* LiberarSueldosComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_perfil_trabajador_haber_no_imponible_haber_no_imponible_component__["a" /* HaberNoImponibleComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_perfil_trabajador_SueldosLiberados_SueldosLiberadosComponent_component__["a" /* SueldosLiberadosComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_perfil_trabajador_resumen_resumen_component__["a" /* ResumenComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_perfil_trabajador_visualizacion_liquidaciones_visualizacion_liquidaciones_component__["a" /* VisualizacionLiquidacionesComponent */],
                __WEBPACK_IMPORTED_MODULE_54__components_perfil_trabajador_actualizar_turnos_fijos_actualizar_turnos_fijos_component__["a" /* ActualizarTurnosFijosComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__app_routes__["a" /* peo */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__["a" /* ImageUploadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_13__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDNSFFyJn6a_AIm44b_7atfg_ml4NI6ReY'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_40__components_ingresa_interfaces_empleado_service__["a" /* EmpleadoService */],
                __WEBPACK_IMPORTED_MODULE_41__services_ingreso_usuario_servidor_service__["a" /* IngresoUsuarioServidorService */],
                __WEBPACK_IMPORTED_MODULE_42__services_loginservices_service__["a" /* LoginservicesService */],
                __WEBPACK_IMPORTED_MODULE_43__services_rutasservidor_service__["a" /* RutasservidorService */],
                __WEBPACK_IMPORTED_MODULE_44__services_planillaservices_service__["a" /* PlanillaservicesService */],
                __WEBPACK_IMPORTED_MODULE_45__services_perfil_trabajador_service_service__["a" /* PerfilTrabajadorServiceService */],
                __WEBPACK_IMPORTED_MODULE_46__services_liberar_turnos_service__["a" /* LiberarTurnosService */],
                __WEBPACK_IMPORTED_MODULE_13__agm_core__["c" /* GoogleMapsAPIWrapper */],
                __WEBPACK_IMPORTED_MODULE_49__services_guardar_sucursal_service__["a" /* GuardarSucursalService */],
                __WEBPACK_IMPORTED_MODULE_50__services_marcaje_service_service__["a" /* MarcajeServiceService */],
                __WEBPACK_IMPORTED_MODULE_51__app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_12__guards_save_forms_guard__["a" /* SaveFormsGuard */],
                __WEBPACK_IMPORTED_MODULE_52__services_sueldos_service__["a" /* SueldosService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return peo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ingresa_ingresa_component__ = __webpack_require__("./src/app/components/ingresa/ingresa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ingresa_pasos_pasouno_pasouno_component__ = __webpack_require__("./src/app/components/ingresa/pasos/pasouno/pasouno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ingresa_pasos_pasodos_pasodos_component__ = __webpack_require__("./src/app/components/ingresa/pasos/pasodos/pasodos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ingresa_pasos_pasotres_pasotres_component__ = __webpack_require__("./src/app/components/ingresa/pasos/pasotres/pasotres.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_planilla_planilla_component__ = __webpack_require__("./src/app/components/planilla/planilla.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_perfil_trabajador_perfil_trabajador_component__ = __webpack_require__("./src/app/components/perfil-trabajador/perfil-trabajador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_perfil_trabajador_turnos_variables_turnos_variables_component__ = __webpack_require__("./src/app/components/perfil-trabajador/turnos-variables/turnos-variables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_perfil_trabajador_turnos_fijos_turnos_fijos_component__ = __webpack_require__("./src/app/components/perfil-trabajador/turnos-fijos/turnos-fijos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_perfil_trabajador_perfil_perfil_component__ = __webpack_require__("./src/app/components/perfil-trabajador/perfil/perfil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_perfil_trabajador_historial_turnos_historial_turnos_component__ = __webpack_require__("./src/app/components/perfil-trabajador/historial-turnos/historial-turnos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_perfil_trabajador_liberar_turnos_liberar_turnos_component__ = __webpack_require__("./src/app/components/perfil-trabajador/liberar-turnos/liberar-turnos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dash_board_dash_board_component__ = __webpack_require__("./src/app/components/dashboard/dash-board/dash-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_perfil_empleador_perfil_empleador_component__ = __webpack_require__("./src/app/components/dashboard/perfil-empleador/perfil-empleador.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_ingreso_sucursal_ingreso_sucursal_component__ = __webpack_require__("./src/app/components/dashboard/ingreso-sucursal/ingreso-sucursal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_reportes_reportes_component__ = __webpack_require__("./src/app/components/dashboard/reportes/reportes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_perfil_trabajador_marcaje_marcaje_component__ = __webpack_require__("./src/app/components/perfil-trabajador/marcaje/marcaje.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dashboard_sueldos_sueldos_component__ = __webpack_require__("./src/app/components/dashboard/sueldos/sueldos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_perfil_trabajador_liberar_sueldos_liberar_sueldos_component__ = __webpack_require__("./src/app/components/perfil-trabajador/liberar-sueldos/liberar-sueldos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_perfil_trabajador_haber_no_imponible_haber_no_imponible_component__ = __webpack_require__("./src/app/components/perfil-trabajador/haber-no-imponible/haber-no-imponible.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_perfil_trabajador_SueldosLiberados_SueldosLiberadosComponent_component__ = __webpack_require__("./src/app/components/perfil-trabajador/SueldosLiberados/SueldosLiberadosComponent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_perfil_trabajador_resumen_resumen_component__ = __webpack_require__("./src/app/components/perfil-trabajador/resumen/resumen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_perfil_trabajador_actualizar_turnos_fijos_actualizar_turnos_fijos_component__ = __webpack_require__("./src/app/components/perfil-trabajador/actualizar-turnos-fijos/actualizar-turnos-fijos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_save_forms_guard__ = __webpack_require__("./src/app/guards/save-forms-guard.ts");


























var routes = [
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'DashBoard', component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dash_board_dash_board_component__["a" /* DashBoardComponent */], children: [
            { path: 'PerfilEmpleador', component: __WEBPACK_IMPORTED_MODULE_15__components_dashboard_perfil_empleador_perfil_empleador_component__["a" /* PerfilEmpleadorComponent */] },
            { path: 'IngresoSucursal', component: __WEBPACK_IMPORTED_MODULE_16__components_dashboard_ingreso_sucursal_ingreso_sucursal_component__["a" /* IngresoSucursalComponent */] },
            { path: 'SueldosComponent', component: __WEBPACK_IMPORTED_MODULE_19__components_dashboard_sueldos_sueldos_component__["a" /* SueldosComponent */] },
            { path: 'Reportes', component: __WEBPACK_IMPORTED_MODULE_17__components_dashboard_reportes_reportes_component__["a" /* ReportesComponent */] },
            { path: '**', component: __WEBPACK_IMPORTED_MODULE_15__components_dashboard_perfil_empleador_perfil_empleador_component__["a" /* PerfilEmpleadorComponent */] }
        ] },
    { path: 'Planilla', component: __WEBPACK_IMPORTED_MODULE_7__components_planilla_planilla_component__["a" /* PlanillaComponent */] },
    { path: 'PerfilTrabajador/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_perfil_trabajador_perfil_trabajador_component__["a" /* PerfilTrabajadorComponent */], children: [
            { path: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_11__components_perfil_trabajador_perfil_perfil_component__["a" /* PerfilComponent */] },
            { path: 'TurnosVariables', component: __WEBPACK_IMPORTED_MODULE_9__components_perfil_trabajador_turnos_variables_turnos_variables_component__["a" /* TurnosVariablesComponent */] },
            { path: 'TurnosFijos', component: __WEBPACK_IMPORTED_MODULE_10__components_perfil_trabajador_turnos_fijos_turnos_fijos_component__["a" /* TurnosFijosComponent */] },
            { path: 'Marcaje', component: __WEBPACK_IMPORTED_MODULE_18__components_perfil_trabajador_marcaje_marcaje_component__["a" /* MarcajeComponent */] },
            { path: 'ActualizarTurnosFijos', component: __WEBPACK_IMPORTED_MODULE_24__components_perfil_trabajador_actualizar_turnos_fijos_actualizar_turnos_fijos_component__["a" /* ActualizarTurnosFijosComponent */] },
            { path: 'HaberNoImponible', component: __WEBPACK_IMPORTED_MODULE_21__components_perfil_trabajador_haber_no_imponible_haber_no_imponible_component__["a" /* HaberNoImponibleComponent */] },
            { path: 'SueldosLiberados', component: __WEBPACK_IMPORTED_MODULE_22__components_perfil_trabajador_SueldosLiberados_SueldosLiberadosComponent_component__["a" /* SueldosLiberadosComponent */] },
            { path: 'Resumen', component: __WEBPACK_IMPORTED_MODULE_23__components_perfil_trabajador_resumen_resumen_component__["a" /* ResumenComponent */] },
            { path: 'LiberarSueldos', component: __WEBPACK_IMPORTED_MODULE_20__components_perfil_trabajador_liberar_sueldos_liberar_sueldos_component__["a" /* LiberarSueldosComponent */] },
            { path: 'HistorialTurnos', component: __WEBPACK_IMPORTED_MODULE_12__components_perfil_trabajador_historial_turnos_historial_turnos_component__["a" /* HistorialTurnosComponent */] },
            { path: 'LiberarTurnos/:mes/:anio', component: __WEBPACK_IMPORTED_MODULE_13__components_perfil_trabajador_liberar_turnos_liberar_turnos_component__["a" /* LiberarTurnosComponent */] },
        ] },
    { path: 'Ingresa', component: __WEBPACK_IMPORTED_MODULE_3__components_ingresa_ingresa_component__["a" /* IngresaComponent */], children: [
            { path: 'paso1', component: __WEBPACK_IMPORTED_MODULE_4__components_ingresa_pasos_pasouno_pasouno_component__["a" /* PasounoComponent */] },
            { path: 'paso2/:formato', component: __WEBPACK_IMPORTED_MODULE_5__components_ingresa_pasos_pasodos_pasodos_component__["a" /* PasodosComponent */] },
            { path: 'paso3/:rut', component: __WEBPACK_IMPORTED_MODULE_6__components_ingresa_pasos_pasotres_pasotres_component__["a" /* PasotresComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_25__guards_save_forms_guard__["a" /* SaveFormsGuard */]] },
        ]
    },
    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] }
];
var peo = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService() {
        this.loading$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(false);
    }
    AppService.prototype.fireLoader = function () {
        this.loading$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(true);
    };
    AppService.prototype.stopLoader = function () {
        this.loading$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(false);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dash-board/dash-board.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/dashboard/dash-board/dash-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashBoardComponent = /** @class */ (function () {
    function DashBoardComponent() {
    }
    DashBoardComponent.prototype.ngOnInit = function () {
    };
    DashBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-board',
            template: __webpack_require__("./src/app/components/dashboard/dash-board/dash-board.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DashBoardComponent);
    return DashBoardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/ingreso-sucursal/ingreso-sucursal.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<agm-map style=\"height:300px;\" [(latitude)]=\"location.lat\" [(longitude)]=\"location.lng\" [(zoom)]=\"location.zoom\" [disableDefaultUI]=\"true\" [zoomControl]=\"true\" [(fitBounds)]='location.viewport'>\r\n  <agm-marker [(latitude)]=\"location.marker.lat\" [(longitude)]=\"location.marker.lng\" [markerDraggable]=\"location.marker.draggable\" (dragEnd)='markerDragEnd($event)'></agm-marker>\r\n</agm-map>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class='row'>\r\n    <div class=\"form-group\">\r\n      <label >Address Line 1</label>\r\n      <input type='text' [(ngModel)]='location.address_level_1' class=\"form-control\" placeholder='Dirección'>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label >Address Line 2</label>\r\n      <input [(ngModel)]='location.address_level_2' class='form-control' placeholder='Comuna'/>\r\n    </div>\r\n \r\n    <div class=\"form-group\">\r\n      <label >Región</label>\r\n      <input   [(ngModel)]='location.address_state' class='form-control' placeholder='Región'>\r\n    </div>\r\n \r\n    <div class=\"form-group\">\r\n      <label >País</label>\r\n      <input   [(ngModel)]='location.address_country' class='form-control' placeholder='País'>\r\n    </div>\r\n \r\n    <div class=\"form-group\">\r\n      <label >Código postal</label>\r\n      <input   [(ngModel)]='location.address_zip' class='form-control' placeholder='No obligatorio'>\r\n    </div>\r\n <br>\r\n \t<div class=\"form-group\">\r\n \t\t<br>\r\n    \t<button (click)='updateOnMap()' type=\"submit\" class=\"btn btn-warning btn-sm\">Buscar</button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- Button trigger modal -->\r\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\r\n  Guardar Sucursal\r\n</button>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Guardar sucursal</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n       ¿ Estás seguro de guardar {{ location.address_level_1 }} comuna de {{location.address_level_2}} ?\r\n\r\n\r\n       Si es así guarda el nombre de la sucursal:\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputEmail1\"></label>\r\n          <input [(ngModel)]='nombreDescriptivoSucursal' #InputGuardarSucursal=\"ngModel\"  type=\"email\" class=\"form-control\" name=\"InputGuardarSucursal\" aria-describedby=\"emailHelp\" placeholder=\"Nombre descriptivo sucursal\">\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Escribe un nombre descriptivo de tu sucursal.</small>\r\n        </div>\r\n\r\n      </div>\r\n      \r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\r\n        <button data-dismiss=\"modal\" *ngIf=\"!InputGuardarSucursal.pristine && InputGuardarSucursal.model?.length > 0  \" (click)=\"guardar_sucursal()\" type=\"button\" class=\"btn btn-primary\" >Guardar</button>\r\n        <button *ngIf=\"InputGuardarSucursal.pristine || InputGuardarSucursal.model?.length === 0  \" (click)=\"guardar_sucursal()\" type=\"button\" class=\"btn btn-primary\" disabled>Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/ingreso-sucursal/ingreso-sucursal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresoSucursalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core_services__ = __webpack_require__("./node_modules/@agm/core/services.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_guardar_sucursal_service__ = __webpack_require__("./src/app/services/guardar-sucursal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IngresoSucursalComponent = /** @class */ (function () {
    function IngresoSucursalComponent(mapsApiLoader, zone, wrapper, GuardarSucursalService, router, snackBar) {
        var _this = this;
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.GuardarSucursalService = GuardarSucursalService;
        this.router = router;
        this.snackBar = snackBar;
        this.location = {
            usuario: '',
            descripcion: '',
            lat: 51.678418,
            lng: 7.809007,
            marker: {
                lat: 51.678418,
                lng: 7.809007,
                draggable: true
            },
            zoom: 5
        };
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.location.lng = +pos.coords.longitude;
            _this.location.lat = +pos.coords.latitude;
        });
        this.location.usuario = localStorage.getItem("nombre_empresa");
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.mapsApiLoader.load().then(function () {
            _this.geocoder = new google.maps.Geocoder();
        });
    } // Fin constructor
    IngresoSucursalComponent.prototype.ngOnInit = function () {
        this.location.marker.draggable = true;
    }; // Fin ngOnInit
    IngresoSucursalComponent.prototype.updateOnMap = function () {
        var full_address = this.location.address_level_1 || "";
        if (this.location.address_level_2)
            full_address = full_address + " " + this.location.address_level_2;
        if (this.location.address_state)
            full_address = full_address + " " + this.location.address_state;
        if (this.location.address_country)
            full_address = full_address + " " + this.location.address_country;
        this.findLocation(full_address);
    }; // Fin updateOnMap
    IngresoSucursalComponent.prototype.findLocation = function (address) {
        var _this = this;
        if (!this.geocoder)
            this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            'address': address
        }, function (results, status) {
            console.log(results);
            if (status == google.maps.GeocoderStatus.OK) {
                for (var i = 0; i < results[0].address_components.length; i++) {
                    var types = results[0].address_components[i].types;
                    if (types.indexOf('locality') != -1) {
                        _this.location.address_level_2 = results[0].address_components[i].long_name;
                    }
                    if (types.indexOf('country') != -1) {
                        _this.location.address_country = results[0].address_components[i].long_name;
                    }
                    if (types.indexOf('postal_code') != -1) {
                        _this.location.address_zip = results[0].address_components[i].long_name;
                    }
                    if (types.indexOf('administrative_area_level_1') != -1) {
                        _this.location.address_state = results[0].address_components[i].long_name;
                    }
                }
                if (results[0].geometry.location) {
                    _this.location.lat = results[0].geometry.location.lat();
                    _this.location.lng = results[0].geometry.location.lng();
                    _this.location.marker.lat = results[0].geometry.location.lat();
                    _this.location.marker.lng = results[0].geometry.location.lng();
                    _this.location.marker.draggable = true;
                    _this.location.viewport = results[0].geometry.viewport;
                }
                _this.map.triggerResize();
            }
            else {
                alert("Sorry, this search produced no results.");
            }
        });
    }; // Fin findLocation
    IngresoSucursalComponent.prototype.markerDragEnd = function (m, $event) {
        this.location.marker.lat = m.coords.lat;
        this.location.marker.lng = m.coords.lng;
        this.findAddressByCoordinates();
        this.updateOnMap();
    }; // FIn markerDragEnd
    IngresoSucursalComponent.prototype.findAddressByCoordinates = function () {
        var _this = this;
        this.geocoder.geocode({
            'location': {
                lat: this.location.marker.lat,
                lng: this.location.marker.lng
            }
        }, function (results, status) {
            _this.decomposeAddressComponents(results);
        });
    }; // fin  findAddressByCoordinates
    IngresoSucursalComponent.prototype.decomposeAddressComponents = function (addressArray) {
        if (addressArray.length == 0)
            return false;
        var address = addressArray[0].address_components;
        for (var _i = 0, address_1 = address; _i < address_1.length; _i++) {
            var element = address_1[_i];
            if (element.length == 0 && !element['types'])
                continue;
            if (element['types'].indexOf('street_number') > -1) {
                this.location.address_level_1 = element['long_name'];
                continue;
            }
            if (element['types'].indexOf('route') > -1) {
                this.location.address_level_1 += ', ' + element['long_name'];
                continue;
            }
            if (element['types'].indexOf('locality') > -1) {
                this.location.address_level_2 = element['long_name'];
                continue;
            }
            if (element['types'].indexOf('administrative_area_level_1') > -1) {
                this.location.address_state = element['long_name'];
                continue;
            }
            if (element['types'].indexOf('country') > -1) {
                this.location.address_country = element['long_name'];
                continue;
            }
            if (element['types'].indexOf('postal_code') > -1) {
                this.location.address_zip = element['long_name'];
                continue;
            }
        }
    }; // FIn decomposeAddressComponents
    IngresoSucursalComponent.prototype.guardar_sucursal = function () {
        var _this = this;
        this.location.descripcion = this.nombreDescriptivoSucursal;
        this.GuardarSucursalService.guardar_sucursal_servidor(JSON.stringify(this.location)).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open('Sucursal Guardada', 'OK', {
                duration: 1500
            });
        });
        this.router.navigate(['./DashBoard']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* AgmMap */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* AgmMap */])
    ], IngresoSucursalComponent.prototype, "map", void 0);
    IngresoSucursalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ingreso-sucursal',
            template: __webpack_require__("./src/app/components/dashboard/ingreso-sucursal/ingreso-sucursal.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["d" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_4__agm_core_services__["a" /* GoogleMapsAPIWrapper */],
            __WEBPACK_IMPORTED_MODULE_5__services_guardar_sucursal_service__["a" /* GuardarSucursalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material_snack_bar__["a" /* MatSnackBar */]])
    ], IngresoSucursalComponent);
    return IngresoSucursalComponent;
}()); // ****************************************** Fin clase IngresoSucursalComponent ************************



/***/ }),

/***/ "./src/app/components/dashboard/perfil-empleador/perfil-empleador.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" href=\"#\">Perfil</a>\r\n    </li>\r\n    <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Opciones</a>\r\n        <div class=\"dropdown-menu\">\r\n            <a class=\"dropdown-item\" [routerLink]=\"['./IngresoSucursal']\">Ingresar Sucusal</a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['./Reportes']\">Visualizar Reportes</a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['./SueldosComponent']\">Sueldos</a>\r\n            <!--<a class=\"dropdown-item\" [routerLink]=\"['./PerfilTrabajador']\">Something else here</a> -->\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n        </div>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Link</a>\r\n    </li>\r\n\r\n</ul>\r\n\r\n\r\n<div class=\"container\" style=\"margin-top:50px;padding:35px;\">\r\n    <h1>Bienvenido {{ nombre }}</h1>\r\n    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\r\n        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/perfil-empleador/perfil-empleador.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilEmpleadorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerfilEmpleadorComponent = /** @class */ (function () {
    function PerfilEmpleadorComponent() {
        this.nombre = localStorage.getItem('nombre_rep');
    }
    PerfilEmpleadorComponent.prototype.ngOnInit = function () {
    };
    PerfilEmpleadorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-perfil-empleador',
            template: __webpack_require__("./src/app/components/dashboard/perfil-empleador/perfil-empleador.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PerfilEmpleadorComponent);
    return PerfilEmpleadorComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/reportes/reportes.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  reportes works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/reportes/reportes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportesComponent = /** @class */ (function () {
    function ReportesComponent() {
    }
    ReportesComponent.prototype.ngOnInit = function () {
    };
    ReportesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reportes',
            template: __webpack_require__("./src/app/components/dashboard/reportes/reportes.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ReportesComponent);
    return ReportesComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/sueldos/sueldos.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sueldos works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/sueldos/sueldos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SueldosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SueldosComponent = /** @class */ (function () {
    function SueldosComponent() {
    }
    SueldosComponent.prototype.ngOnInit = function () {
    };
    SueldosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sueldos',
            template: __webpack_require__("./src/app/components/dashboard/sueldos/sueldos.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SueldosComponent);
    return SueldosComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"row justify-content-center container\" style=\"margin-top:30px;padding:50px\">\r\n    <h2>Bienvenido {{nombre_empresa }}</h2>\r\n    <div class=\"jumbotron\">\r\n        <h1 class=\"display-4\">Hello, world!</h1>\r\n        <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\r\n        <hr class=\"my-4\">\r\n        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n        <p class=\"lead\">\r\n            <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n        </p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.rut_empresa = localStorage.getItem('rut_empresa');
        this.nombre_empresa = localStorage.getItem('nombre_empresa');
        this.nombre_rep = localStorage.getItem('nombre_rep');
        this.rut_empresa = localStorage.getItem('rut_empresa');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/ingresa/ingresa.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/ingresa/ingresa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IngresaComponent = /** @class */ (function () {
    function IngresaComponent(router) {
        this.router = router;
        this.router.navigate(['./Ingresa/paso1']);
    }
    IngresaComponent.prototype.ngOnInit = function () {
    };
    IngresaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ingresa',
            template: __webpack_require__("./src/app/components/ingresa/ingresa.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], IngresaComponent);
    return IngresaComponent;
}());



/***/ }),

/***/ "./src/app/components/ingresa/interfaces/empleado.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpleadoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmpleadoService = /** @class */ (function () {
    function EmpleadoService() {
        /*
          public array_empleado: any[] = [
            {
              label: 'Nombre',
              name: 'nombre',
              tipo: 'text',
              select: false
        
            },
            {
              label: 'Apellido',
              name: 'apellido',
              tipo: 'text',
              select: false
        
            },
            {
              label: 'Fecha Nacimiento',
              name: 'apellido',
              tipo: 'date',
              select: false
        
            },
            {
              label: 'Sexo',
              name: 'apellido',
              tipo: 'select',
              select: true,
              opciones: [ 'Masculino', 'Femenino']
        
            },
        
            {
              label: 'Sueldo Líquido',
              name: 'apellido',
              tipo: 'number',
              info: 'Si trabajador tiene sueldo base con comisiones, poner sueldo base',
              select: false
        
            },
            {
              label: 'Puesto',
              name: 'apellido',
              tipo: 'text',
              select: false
        
            },
            {
              label: 'Jefatura',
              name: 'apellido',
              tipo: 'text',
              select: false
        
            },
            {
              label: 'Rut',
              name: 'apellido',
              tipo: 'text',
              select: false
            },
            {
              label: 'Isapre',
              name: 'apellido',
              tipo: 'text',
              select: false
            },
            {
              label: 'AFP',
              name: 'apellido',
              tipo: 'text',
              select: false
        
            },
            {
              label: 'Horario',
              name: 'apellido',
              tipo: 'number',
              info: 'Debes ingresar las horas semanales a trabajar',
              select: false
        
            },
            {
              label: 'Nacionalidad',
              name: 'apellido',
              tipo: 'text',
              select: false
        
            },
            {
              label: 'Dirección',
              name: 'apellido',
              tipo: 'text',
              info: 'No incluyas la comuna',
              select: false
        
            },
            {
              label: 'Comuna',
              name: 'apellido',
              tipo: 'text',
              select: false
        
            },
            {
              label: 'Sueldo escrito',
              name: 'apellido',
              tipo: 'text',
              info: 'Procura escribir cuidadosamente el sueldo en palabras',
              select: false
        
            },
            {
              label: 'Descanso en minutos',
              name: 'apellido',
              tipo: 'number',
              info: 'Escribe la duración del descanso en minutos',
              select: false
        
            },
            {
              label: 'Comuna sucursal',
              name: 'apellido',
              tipo: 'text',
              info: 'Escribe donde trabajará tu trabajador',
              select: false
        
            },
        
        
        
        
          ];*/
        this.empleado = {
            nombre: '',
            apellido: '',
            edad: '',
            sexo: '',
            nacimiento: '',
            direccion: '',
            sueldo: '',
            puesto: '',
            empresa: '',
            jefatura: '',
            ingreso: '',
            rut: '',
            isapre: '',
            afp: '',
            horario: '',
            dummy: '',
            nacionalidad_empleado: '',
            horas_jornada: '',
            empresa_previa: '',
            direccion_sin_comuna_empleado: '',
            comuna_empleado: '',
            sueldo_escrito: '',
            ultimo_dia_semana_jornada: '',
            hora_entrada_jornada: '',
            hora_salida_jornada: '',
            descanso_o_almuerzo_en_minutos: '',
            hora_inicio_descanso: '',
            hora_fin_descanso: '',
            tipo_contrato: '',
            comuna_sucursal: ''
        };
        this.array_empleado = [
            {
                label: 'Nombre',
                name: 'nombre',
                tipo: 'text',
                select: false
            },
            {
                label: 'Apellido',
                name: 'apellido',
                tipo: 'text',
                select: false
            },
            {
                label: 'Edad',
                name: 'edad',
                tipo: 'text',
                select: false
            },
            {
                label: 'Sexo',
                name: 'sexo',
                tipo: 'select',
                select: true,
                opciones: ['Masculino', 'Femenino']
            },
            {
                label: 'Fecha Nacimiento',
                name: 'nacimiento',
                tipo: 'date',
                select: false
            },
            {
                label: 'Sueldo Líquido',
                name: 'sueldo',
                tipo: 'number',
                info: 'Si trabajador tiene sueldo base con comisiones, poner sueldo base',
                select: false
            },
            {
                label: 'Puesto',
                name: 'puesto',
                tipo: 'text',
                select: false
            },
            {
                label: 'Jefatura',
                name: 'jefatura',
                tipo: 'text',
                select: false
            },
            {
                label: 'Rut',
                name: 'rut',
                tipo: 'text',
                info: 'Si tu rut es 15111999-k debes poner 15111999k ; sin el guión ',
                select: false
            },
            {
                label: 'Isapre',
                name: 'isapre',
                tipo: 'text',
                select: false
            },
            {
                label: 'AFP',
                name: 'afp',
                tipo: 'text',
                select: false
            },
            {
                label: 'Horario',
                name: 'horario',
                tipo: 'number',
                info: 'Debes ingresar las horas semanales a trabajar',
                select: false
            },
            {
                label: 'Nacionalidad Empleado',
                name: 'nacionalidad_empleado',
                tipo: 'text',
                select: false
            },
            {
                label: 'Horas Semanales',
                name: 'horas_jornada',
                tipo: 'number',
                info: 'Debes escribir las horas semanales : 45, 36, 18 horas. ',
                select: false
            },
            {
                label: 'Dirección',
                name: 'direccion_sin_comuna_empleado',
                tipo: 'text',
                info: 'No incluyas la comuna',
                select: false
            },
            {
                label: 'Comuna',
                name: 'comuna_empleado',
                tipo: 'text',
                select: false
            },
            {
                label: 'Sueldo escrito',
                name: 'sueldo_escrito',
                tipo: 'text',
                info: 'Procura escribir cuidadosamente el sueldo en palabras',
                select: false
            },
            {
                label: 'Hora Entrada',
                name: 'hora_entrada_jornada',
                tipo: 'time',
                info: 'Escribe la entrada a trabajar',
                select: false
            },
            {
                label: 'Hora salida',
                name: 'hora_salida_jornada',
                tipo: 'time',
                select: false
            },
            {
                label: 'Descanso en minutos',
                name: 'descanso_o_almuerzo_en_minutos',
                tipo: 'number',
                info: 'Escribe la duración del descanso en minutos',
                select: false
            },
            {
                label: 'Tipo de Contrato',
                name: 'tipo_contrato',
                tipo: 'text',
                info: 'Selecciona el tipo de contrato para tu trabajador',
                select: true,
                opciones: ['Fijo', 'Indefinido', 'Plazo']
            },
            {
                label: 'Comuna sucursal',
                name: 'comuna_sucursal',
                tipo: 'text',
                info: 'Escribe donde trabajará tu trabajador',
                select: false
            },
            {
                label: 'Direccion sucursal',
                name: 'direccion_sucursal',
                tipo: 'text',
                info: 'Escribe donde trabajará tu trabajador',
                select: false
            },
            {
                name: 'dia_ingreso',
                tipo: 'hidden',
                hidden: true,
                select: false,
                valor: new Date().getDate(),
            },
            {
                name: 'mes_ingreso',
                tipo: 'hidden',
                select: false,
                hidden: true,
                valor: new Date().getMonth(),
            },
            {
                name: 'ano_ingreso',
                tipo: 'hidden',
                hidden: true,
                select: false,
                valor: new Date().getFullYear(),
            },
            {
                label: 'Estado Civil',
                name: 'estado_civil',
                tipo: 'text',
                info: 'Escribe donde trabajará tu trabajador',
                select: false
            },
            {
                label: 'Estado Civil',
                name: 'duracion_contrato',
                tipo: 'text',
                info: 'Escribe donde trabajará tu trabajador',
                select: false
            },
            {
                label: 'Gratificaciones',
                name: 'gratificaciones',
                tipo: 'text',
                info: '',
                select: false
            },
            {
                label: 'Incentivos',
                name: 'incentivos',
                tipo: 'text',
                info: '',
                select: false
            },
            {
                label: 'Bonos',
                name: 'bonos',
                tipo: 'text',
                info: '',
                select: false
            },
            {
                label: 'Día de pago',
                name: 'tiempo_de_pago',
                tipo: 'text',
                info: '',
                select: false
            },
            {
                label: 'Labores a desarrollar',
                name: 'tareas_a_desarrollar',
                tipo: 'text',
                info: '',
                select: false
            },
            {
                name: 'nombre_empresa_usuario_plataforma',
                tipo: 'hidden',
                hidden: true,
                select: false,
                valor: localStorage.getItem("nombre_empresa"),
            },
            {
                label: 'Profesión / Oficio',
                name: 'profesion_oficio_contratado',
                tipo: 'text',
                info: '',
                select: false
            },
            {
                label: 'Tipo de pago ( Vale vista, transferencia, etc. )',
                name: 'tipo_pago_valevista_etc',
                tipo: 'text',
                info: '',
                select: false
            },
            {
                label: 'Numero Cuenta',
                name: 'numero_cta',
                tipo: 'text',
                info: '',
                select: false
            },
            {
                label: 'Tipo cuenta',
                name: 'tipo_cuenta',
                tipo: 'text',
                info: 'Cuenta corriente, Vista, etc.',
                select: false
            },
            {
                label: 'Banco del trabajador',
                name: 'banco_cuenta_a_pagar',
                tipo: 'text',
                info: '',
                select: false
            },
            {
                label: 'Tipo de turnos',
                name: 'horario_con_o_sin_turnos',
                tipo: 'select',
                select: true,
                opciones: ['Turnos', 'Horario Fijo', 'Turnos Noche Incl.']
            },
        ];
    }
    EmpleadoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EmpleadoService);
    return EmpleadoService;
}());



/***/ }),

/***/ "./src/app/components/ingresa/pasos/pasodos/pasodos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:50px;padding:50px\">\r\n            <div class=\"row justify-content-center\">\r\n                <h3>Ingreso datos generales </h3>\r\n            </div>\r\n\r\n            <div class=\"row justify-content-center\">\r\n                <h3><small class=\"text-muted\">Los siguientes campos serán los oficiales para tu trabajador.</small></h3>\r\n            </div>\r\n            <br>\r\n\r\n            <div class=\"row justify-content-center\">\r\n                    <div class=\"col-8\">\r\n\r\n                            <form #forma='ngForm' (ngSubmit)=\"guardar(forma)\">\r\n                                <div class=\"form-group\" *ngFor=\"let s of Empleado; let i = index\" [style.display]=\"s?.hidden  ? 'none' : 'block' \">\r\n\r\n                                    <label>{{ s.label }}</label>\r\n\r\n                                        <div *ngIf=\"!s?.select && s?.hidden !=true \">\r\n                                                <input  [type]=\"s.tipo\" [name]=\"s.name\" class=\"form-control\" ngModel  #qtyInput=\"ngModel\"  required >\r\n                                                <small *ngIf=\"s?.info\" class=\"form-text text-muted\">{{s.info}}.</small>\r\n\r\n\r\n                                                <div [hidden]=\"qtyInput.valid || qtyInput.pristine\" class=\"alert alert-danger\">\r\n                                                  Este campo es requerido\r\n                                                </div>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"s?.hidden\">\r\n                                            <input [hidden]=\"s.hidden\" [name]=\"s.name\"  [(ngModel)]=\"s.valor\" [value]=\"s.valor\" >\r\n                                        </div>\r\n\r\n\r\n                                        <div *ngIf=\"s.select\">\r\n                                            <select  class=\"form-control\" [name]=\"s.name\" ngModel required>\r\n                                                 <option [value]=\"s.name\" *ngFor=\"let o of s.opciones\">{{ o }}</option>\r\n                                            </select>\r\n                                        </div>\r\n\r\n                                </div>\r\n\r\n                                <button   type=\"submit\" class=\"btn btn-outline-primary\">Ingresar </button>\r\n                                <hr>\r\n                            </form>\r\n                    </div>\r\n            </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/ingresa/pasos/pasodos/pasodos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasodosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_empleado_service__ = __webpack_require__("./src/app/components/ingresa/interfaces/empleado.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ingreso_usuario_servidor_service__ = __webpack_require__("./src/app/services/ingreso-usuario-servidor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasodosComponent = /** @class */ (function () {
    function PasodosComponent(servicio_empleado, empleadoService_, router, param) {
        this.servicio_empleado = servicio_empleado;
        this.empleadoService_ = empleadoService_;
        this.router = router;
        this.param = param;
        this.Empleado = this.empleadoService_.array_empleado;
        console.log(this.Empleado[0].name);
    } // Fin Constructor
    PasodosComponent.prototype.funcion_paso3 = function (rut) {
        this.router.navigate(['../Ingresa/paso3/' + rut]);
    };
    PasodosComponent.prototype.guardar = function (forma) {
        var _this = this;
        console.log(forma);
        if (!forma.valid) {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                title: 'Error',
                text: 'Todos los campos son obligatorios',
                type: 'error',
                confirmButtonText: 'Ok'
            });
        }
        else {
            this.servicio_empleado.insertar_usuario_datos_generales(forma.value)
                .subscribe(function (data) {
                console.log(data);
                _this.funcion_paso3(forma.value['rut']);
            }, function (error) {
                console.log("Errorcito...", error);
            });
            console.log(forma.value);
            if (this.param.snapshot.paramMap.get('formato')) {
                // this.router.navigate(['./Ingresa/paso3/']);
            } // *** Agregar si es manual, donde va, un toast que diga que está ok.  ***
        }
    }; // Fin función onSubmit
    PasodosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pasodos',
            template: __webpack_require__("./src/app/components/ingresa/pasos/pasodos/pasodos.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_ingreso_usuario_servidor_service__["a" /* IngresoUsuarioServidorService */],
            __WEBPACK_IMPORTED_MODULE_1__interfaces_empleado_service__["a" /* EmpleadoService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], PasodosComponent);
    return PasodosComponent;
}());



/***/ }),

/***/ "./src/app/components/ingresa/pasos/pasotres/pasotres.component.html":
/***/ (function(module, exports) {

module.exports = "  \r\n\r\n   <image-upload\r\n  [url]=\"url\"\r\n  buttonCaption=\"Presiona para agregar imagen\"\r\n  dropBoxMessage=\"Puedes arrastrar una imagen acá\"\r\n  clearButtonCaption=\"Borrar\"\r\n   (removed)=\"onRemoved($event)\"\r\n  (uploadFinished)=\"onUploadFinished($event)\"\r\n  (uploadStateChanged)=\"onUploadStateChanged($event)\">\r\n</image-upload>\r\n"

/***/ }),

/***/ "./src/app/components/ingresa/pasos/pasotres/pasotres.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasotresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasotresComponent = /** @class */ (function () {
    function PasotresComponent(param) {
        this.param = param;
        this.url = "https://sister.cl/recepcionimagen1v1.php?rut=" + this.param.snapshot.paramMap.get('rut');
    }
    PasotresComponent.prototype.ngOnInit = function () {
    };
    PasotresComponent.prototype.onUploadFinished = function (file) {
        console.log(file);
    };
    PasotresComponent.prototype.onRemoved = function (file) {
        console.log(file);
    };
    PasotresComponent.prototype.onUploadStateChanged = function (state) {
        console.log(state);
    };
    PasotresComponent.prototype.canDeactivate = function () {
        return false;
    };
    PasotresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pasotres',
            template: __webpack_require__("./src/app/components/ingresa/pasos/pasotres/pasotres.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PasotresComponent);
    return PasotresComponent;
}());



/***/ }),

/***/ "./src/app/components/ingresa/pasos/pasouno/pasouno.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:100px\">\r\n\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-8\">\r\n            <h2>Ingreso personal: </h2>\r\n            <p> Podrás desde el siguiente formulario ingresar a un trabajador. Si ya tienes el contrato o quieres hacerlo por otro método y luego subirlo opcionalmente a la plataforma deberás elegir opción 2. Si quieres generar el contrato desde la plataforma\r\n                selecciona opción 1. </p>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-8\">\r\n            <form>\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleInputEmail1\">Selecciona tipo de ingreso:</label>\r\n                    <select class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"formato\" name=\"first\">\r\n                                          <option value=\"automatico\">1.- Generación automática de contrato</option>\r\n                                          <option value=\"manual\">2.- Solo datos, contrato se subirá como pdf o imagen</option>\r\n                                    </select>\r\n                    <small id=\"emailHelp\" class=\"form-text text-muted\">Si no tienes el contrato, usa generación automática y se generará en PDF.</small>\r\n                </div>\r\n\r\n                <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"funcion_paso2()\">Continuar</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/ingresa/pasos/pasouno/pasouno.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasounoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasounoComponent = /** @class */ (function () {
    function PasounoComponent(router, param) {
        this.router = router;
        this.param = param;
    }
    PasounoComponent.prototype.ngOnInit = function () {
    };
    PasounoComponent.prototype.funcion_paso2 = function () {
        if (this.formato == undefined)
            return this.mensajeError();
        this.router.navigate(['./Ingresa/paso2/' + this.formato]);
    };
    PasounoComponent.prototype.mensajeError = function () {
        return __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Error',
            text: 'Selecciona una opción',
            type: 'error',
            confirmButtonText: 'Ok'
        });
    };
    PasounoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pasouno',
            template: __webpack_require__("./src/app/components/ingresa/pasos/pasouno/pasouno.component.html"),
            host: { 'window:beforeunload': 'alert("asdfasfd")' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PasounoComponent);
    return PasounoComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"text-center\" style=\"padding:40px;\">\r\n    <div class=\"container\">\r\n        <form [formGroup]=\"forma\" class=\"form-signin\" (ngSubmit)=\"onSubmit(forma)\">\r\n            <img class=\"mb-4\" src=\"../../assets/img/logo1.png\" alt=\"\">\r\n            <h1 class=\"h3 mb-3 font-weight-normal\">Ingresa tus datos: </h1>\r\n            <label for=\"inputEmail\" class=\"sr-only\">Rut empresa</label>\r\n            <input formControlName=\"rut_empresa\" data-toggle=\"popover\" data-content=\"asdf\" data-placement=\"top\" title=\"Ingresa tu rut sin guion\" type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Rut empresa\" required autofocus>\r\n            <br>\r\n            <label for=\"inputPassword\" class=\"sr-only\">Clave</label>\r\n            <input formControlName=\"clave\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Ingresa tu clave\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Clave\" required>\r\n            <div class=\"checkbox mb-3\">\r\n                <label>\r\n        <input type=\"checkbox\" value=\"remember-me\"> Recordarme\r\n      </label>\r\n            </div>\r\n            <button [disabled]=\"!forma.valid\" class=\"btn btn-lg btn-primary\">Ingresar</button>\r\n            <hr>\r\n            <div *ngIf=\"!forma.valid\" class=\"alert alert-danger\" role=\"alert\">\r\n                El formulario no está completo\r\n            </div>\r\n            <div *ngIf=\"forma.valid\" class=\"alert alert-success\" role=\"alert\">\r\n                El formulario es válido\r\n            </div>\r\n            <p class=\"mt-5 mb-3 text-muted\">&copy; Sister 2018</p>\r\n        </form>\r\n    </div>\r\n</body>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loginservices_service__ = __webpack_require__("./src/app/services/loginservices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, login_) {
        this.router = router;
        this.login_ = login_;
        this.forma = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'rut_empresa': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            'clave': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
        });
    }
    LoginComponent.prototype.onSubmit = function (forma) {
        var _this = this;
        this.respuesta_servidor_login = this.login_.login(forma.value).subscribe(function (a) {
            // nada que ver -> localStorage.setItem('horario_con_o_sin_turnos', a['horario_con_o_sin_turnos'].toString());
            localStorage.setItem('rut_empresa', a["rut_empresa"].toString());
            localStorage.setItem('nombre_empresa', a["nombre_empresa"].toString());
            localStorage.setItem('nombre_rep', a["nombre_rep"].toString());
            _this.router.navigate(['./Home']);
        }, function (error) {
            console.log("ERROR !!! ", error);
            alert("Escribe bien tus datos");
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_loginservices_service__["a" /* LoginservicesService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil-trabajador/SueldosLiberados/SueldosLiberadosComponent.component.css":
/***/ (function(module, exports) {

module.exports = "#Liquidacion{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient:horizontal;\r\n\t-webkit-box-direction:normal;\r\n\t    -ms-flex-direction:row;\r\n\t        flex-direction:row;\r\n\t-webkit-box-pack:justify;\r\n\t    -ms-flex-pack:justify;\r\n\t        justify-content:space-between;\r\n}\r\n\r\n#col1{\r\n\t-webkit-box-flex:1;\r\n\t    -ms-flex:1;\r\n\t        flex:1;\r\n}\r\n\r\n#col2{\r\n\t-webkit-box-flex:1;\r\n\t    -ms-flex:1;\r\n\t        flex:1;\r\n}\r\n\r\n#haberes{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient:horizontal;\r\n\t-webkit-box-direction:normal;\r\n\t    -ms-flex-direction:row;\r\n\t        flex-direction:row;\r\n\t-webkit-box-pack:justify;\r\n\t    -ms-flex-pack:justify;\r\n\t        justify-content:space-between;\r\n\tpadding-right: 30px;\r\n}\r\n\r\n#liquidacioncompleta{\r\n\t-webkit-box-orient:vertical;\r\n\t-webkit-box-direction:normal;\r\n\t    -ms-flex-direction:column;\r\n\t        flex-direction:column;\r\n}"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/SueldosLiberados/SueldosLiberadosComponent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:30px;\">\r\n\t<h3>Visualizar Liquidación de sueldo</h3>\r\n  <div class=\"form-group\">\r\n    <label>Selecciona : </label>\r\n    <select [(ngModel)]=\"liquidaciones_select\" #liqSelect=\"ngModel\" class=\"form-control\">\r\n      <option>Liquidación por períodos</option>\r\n      <option *ngFor=\"let liquidacion of liquidacionesDisponibles\">{{ liquidacion.mes_pagado }}/{{ liquidacion.anio_pagado }}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n  <button (click)=\"FuncionVisualizarLiquidacion(liqSelect)\" class=\"btn btn-success\">Visualizar liquidación</button>  \r\n  </div>\r\n<hr>\r\n\r\n\r\n    <div id=\"liquidacioncompleta\" #liquidacioncompleta *ngIf=\"liquidacion_booleana_en_curso\">\r\n\t\t<div id=\"Liquidacion\">\r\n\t\t\t\t<div id=\"col1\">\r\n\t\t\t\t\t<h3> Haberes Imponibles </h3>\r\n\r\n\t\t\t           <div id=\"haberes\" *ngFor=\"let haberesImponiblesGlosa of haberesImponiblesGlosa; let i = index\">\r\n\t\t\t           \t\t<p>{{haberesImponiblesGlosa}}</p> \t<p>30</p> <p>{{haberesImponiblesValor[i] | currency }}</p>\r\n\t\t\t           \t</div>\r\n\t\t\t           \t\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div id=\"col2\">\r\n\t\t\t\t\t<h3> Descuentos </h3>\r\n\r\n\t\t\t          <div id=\"haberes\" *ngFor=\"let descuentosGlosa of descuentosGlosa; let i = index\">\r\n\t\t\t           \t\t<p>{{ descuentosGlosa }}</p> \t<p>30</p> <p> {{ descuentosValor[i] | currency}}</p>\r\n\t\t\t           \t</div>\r\n\r\n\r\n\r\n\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\r\n\t<div id=\"Liquidacion\">\r\n\t\t\t\t<div id=\"col1\">\r\n\t\t\t\t\t<h3> Haberes no imponibles </h3>\r\n\r\n\t\t\t              <div id=\"haberes\" *ngFor=\"let haberesNoImponiblesGlosa of haberesNoImponiblesGlosa; let i= index\">\r\n\t\t\t           \t\t<p>{{haberesNoImponiblesGlosa}}</p> \t<p>30</p> <p> {{haberesNoImponiblesValor[i] | currency }}</p>\r\n\t\t\t           \t</div>\r\n\t\t\t           \t\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div id=\"col2\">\r\n\t\t\t\t\t<h3> Otros Dsctos. </h3>\r\n\r\n\r\n\t\t\t\t\t<!--\t<div id=\"haberes\">\r\n\t\t\t           \t\t<p>bono 1</p> \t<p>30</p> <p>$ 5.000</p>\r\n\t\t\t            </div>-->\r\n\r\n\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\r\n<br>\r\n<br>\r\n\r\n         <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">Total haberes Imponibles: {{ totalHaberesImponibles | currency }}</li>\r\n\t\t\t<li class=\"list-group-item\">Total haberes No imponibles: {{ totalHaberesNoImponibles | currency }}</li>\r\n  \t\t\t<li class=\"list-group-item\">Total haberes: {{ totalHaberes | currency }}</li>\r\n   \t\t\t<li class=\"list-group-item\">Total descuento: {{ totalDescuentos | currency }}</li>\t\r\n\t\t\t\r\n        </ul>\r\n\r\n\r\n<div class=\"form-group\" style=\"margin:30px\">\r\n    <button (click)=\"liquidacionApdf()\" class=\"btn btn-danger\">Generar PDF</button>\r\n</div>\r\n\r\n\r\n\t</div> <!-- FIN LIQUIDACION COMPLETA -->\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/SueldosLiberados/SueldosLiberadosComponent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SueldosLiberadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sueldos_service__ = __webpack_require__("./src/app/services/sueldos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__ = __webpack_require__("./src/app/services/perfil-trabajador-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_marcaje_service_service__ = __webpack_require__("./src/app/services/marcaje-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SueldosLiberadosComponent = /** @class */ (function () {
    function SueldosLiberadosComponent(SueldoServicio_, PerfilTrabajador, snackBar, MarcajeServiceService_, param, router) {
        var _this = this;
        this.SueldoServicio_ = SueldoServicio_;
        this.PerfilTrabajador = PerfilTrabajador;
        this.snackBar = snackBar;
        this.MarcajeServiceService_ = MarcajeServiceService_;
        this.param = param;
        this.router = router;
        this.liquidacion_booleana_en_curso = false;
        var data = {
            id: this.param.parent.snapshot.paramMap.get('id')
        };
        this.PerfilTrabajador.getPerfil(this.param.parent.snapshot.paramMap.get('id')).subscribe(function (data) {
            _this.datosTrabajador = data;
            console.log("Viendo ahora los datos del perfil", data);
        });
        this.SueldoServicio_.getSueldosLiberados(JSON.stringify(data)).subscribe(function (data) {
            console.log(data);
            _this.liquidacionesDisponibles = data;
        }, function (error) {
            console.log("ERROR!!!", error);
        });
    } // Fin constructor
    SueldosLiberadosComponent.prototype.FuncionVisualizarLiquidacion = function (a) {
        var _this = this;
        var data = {
            id: this.param.parent.snapshot.paramMap.get('id'),
            mes: this.liquidaciones_select.split('/')[0],
            anio: this.liquidaciones_select.split('/')[1]
        };
        this.SueldoServicio_.getSueldosLiberadosPorFecha(JSON.stringify(data)).subscribe(function (data) {
            console.log(data);
            _this.liquidacion_booleana_en_curso = true;
            _this.armar_liquidacion_template(data);
        }, function (error) {
            _this.liquidacion_booleana_en_curso = false;
        });
    };
    SueldosLiberadosComponent.prototype.liquidacionApdf = function () {
        var doc = new __WEBPACK_IMPORTED_MODULE_6_jspdf__();
        doc.setFontSize(22);
        doc.text(65, 20, 'Liquidación de sueldo');
        //Líneas
        doc.setLineWidth(0.1);
        doc.setDrawColor(137, 137, 137);
        doc.line(105, 70, 105, 250); // vertical line
        doc.line(20, 50, 190, 50);
        // datos 
        doc.setFontSize(10);
        //Izq.
        doc.text(20, 30, 'Nombre:' + this.datosTrabajador[0]['nombre']);
        doc.text(20, 34, 'Ubicación: ' + this.datosTrabajador[0]['comuna_sucursal']);
        doc.text(20, 38, 'Rut:' + this.datosTrabajador[0]['rut']);
        doc.text(20, 42, 'Fecha Ingreso: ' + this.datosTrabajador[0]['ingreso']);
        doc.text(20, 46, 'Días Trabajados: 30');
        //Derecha
        doc.text(120, 30, 'Cargo: ' + this.datosTrabajador[0]['puesto']);
        doc.text(120, 34, 'Dpto: ' + this.datosTrabajador[0]['jefatura']);
        doc.text(120, 38, 'Fecha Pago:' + this.datosTrabajador[0]['fecha_pago_sueldo']);
        doc.text(120, 42, 'Forma de pago:' + this.datosTrabajador[0]['tipo_pago_valevista_etc']);
        doc.text(120, 46, 'N° Cta: ' + this.datosTrabajador[0]['numero_cta']);
        // SUBTITULOS
        doc.setFontSize(14);
        doc.text(20, 60, 'Haberes imponibles');
        doc.text(150, 60, 'Descuentos');
        doc.text(20, 140, 'Haberes no imponibles');
        doc.text(150, 140, 'Otros Descuentos');
        this.Agregar_elementos(doc, this.haberesImponiblesGlosa, this.haberesImponiblesValor, 65, 'izq');
        this.Agregar_elementos(doc, this.descuentosGlosa, this.descuentosValor, 65, 'der');
        this.Agregar_elementos(doc, this.haberesNoImponiblesGlosa, this.haberesNoImponiblesValor, 145, 'izq');
        doc.save('temp.pdf');
    }; // Fin función liquidacionApdf
    SueldosLiberadosComponent.prototype.Agregar_elementos = function (doc, array_glosa, array_valores, numCol, lado) {
        doc.setFontSize(10);
        var lado_ = (lado === 'izq') ? 20 : 120;
        for (var i = 0; i < array_glosa.length; i++) {
            doc.text(lado_, numCol, array_glosa[i] + "  30     $" + array_valores[i]);
            numCol += 4;
        }
    }; // Fin función Agregar_elementos
    SueldosLiberadosComponent.prototype.armar_liquidacion_template = function (datos) {
        this.haberesImponiblesGlosa = Object.keys(JSON.parse(datos[0]['haberesImponibles']));
        this.haberesImponiblesValor = Object.values(JSON.parse(datos[0]['haberesImponibles']));
        this.haberesNoImponiblesValor = Object.values(JSON.parse(datos[0]['haberesNoImponibles']));
        this.haberesNoImponiblesGlosa = Object.keys(JSON.parse(datos[0]['haberesNoImponibles']));
        this.descuentosGlosa = Object.keys(JSON.parse(datos[0]['descuentos']));
        this.descuentosValor = Object.values(JSON.parse(datos[0]['descuentos']));
        this.totalHaberesImponibles = datos[0]['totalHaberesImp'];
        this.totalHaberesNoImponibles = datos[0]['totalHaberesNoImp'];
        this.totalHaberes = datos[0]['totalHaberesTotales'];
        this.totalDescuentos = datos[0]['totalDescuentos'];
    };
    SueldosLiberadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-SueldosLiberados',
            template: __webpack_require__("./src/app/components/perfil-trabajador/SueldosLiberados/SueldosLiberadosComponent.component.html"),
            styles: [__webpack_require__("./src/app/components/perfil-trabajador/SueldosLiberados/SueldosLiberadosComponent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sueldos_service__["a" /* SueldosService */],
            __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__["a" /* PerfilTrabajadorServiceService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__["a" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__services_marcaje_service_service__["a" /* MarcajeServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SueldosLiberadosComponent);
    return SueldosLiberadosComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil-trabajador/actualizar-turnos-fijos/actualizar-turnos-fijos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:50px;padding:35px;\">\n\n\t    <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\n\t\t      <h1 class=\"display-4\">Turnos</h1>\n\t\t      <p class=\"lead\">Ten cuidado al escribir los turnos de tu trabajador, cuida que se cumpla el horario pactado en el contrato.</p>\n\t    </div>\n\n<hr>\n\n\n\n    <form #forma='ngForm' (ngSubmit)=\"guardar(forma)\">\n\n\n<div class=\"card\" style=\"padding:50px;\">\n  <div class=\"card-body\">\n     <div class=\"form-group\" *ngFor=\"let dia of dias ;let i = index\">\n\t\t    <label><strong>{{ dia | uppercase}}</strong></label>\n\t\t         <div class=\"form-row\">       \t\n\t\t\t\t    <div class=\"form-group col-md-6\">\n\t\t\t\t      <label>Entrada</label>\n\t\t\t\t      <input name=\"{{i}}e\" type=\"time\" class=\"form-control\" [(ngModel)]=\"datosTurnosFijoValuesImpar[i]\">\n\t\t\t\t    </div>\n\t\t\t\t    <div class=\"form-group col-md-6\">\n\t\t\t\t      <label>Salida</label>\n\t\t\t\t      <input name=\"{{i}}s\" type=\"time\" class=\"form-control\" [(ngModel)]=\"datosTurnosFijoValuesPar[i]\">\n\t\t\t\t    </div>\n\t\t        </div>\n\t\t  </div>\n  </div>\n<input type=\"hidden\" name=\"trabajador_id\" [ngModel]=\"trabajador_id\">\n    <div class=\"text-center\">\n\t <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar Horario</button>\n\t</div>\n\n</div>\n\t\t\n\n \n\n\t\t  \t \n\n    </form>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/actualizar-turnos-fijos/actualizar-turnos-fijos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActualizarTurnosFijosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__ = __webpack_require__("./src/app/services/perfil-trabajador-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_marcaje_service_service__ = __webpack_require__("./src/app/services/marcaje-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ingreso_usuario_servidor_service__ = __webpack_require__("./src/app/services/ingreso-usuario-servidor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActualizarTurnosFijosComponent = /** @class */ (function () {
    function ActualizarTurnosFijosComponent(IngresoUsuarioServidorService_, snackBar, perfilServicio_, MarcajeServiceService, param, router) {
        var _this = this;
        this.IngresoUsuarioServidorService_ = IngresoUsuarioServidorService_;
        this.snackBar = snackBar;
        this.perfilServicio_ = perfilServicio_;
        this.MarcajeServiceService = MarcajeServiceService;
        this.param = param;
        this.router = router;
        this.dias = this.perfilServicio_.array_dias;
        this.trabajador_id = this.param.parent.snapshot.paramMap.get('id');
        this.IngresoUsuarioServidorService_.getTurnosFijos({ 'trabajador_id': this.trabajador_id })
            .subscribe(function (datos) {
            var contador = 0;
            var arrayImpar = new Array();
            var arrayPar = new Array();
            var keys = Object.values(datos[0]).map(function (i) {
                if (contador == 0 || contador == 15) {
                }
                else {
                    if (_this.oddOrEven(contador) == 1) {
                        arrayImpar.push(i);
                    }
                    else {
                        arrayPar.push(i);
                    }
                }
                contador++;
            });
            _this.datosTurnosFijoValuesImpar = arrayImpar;
            _this.datosTurnosFijoValuesPar = arrayPar;
            console.log("arrayImpar", arrayImpar);
        });
    }
    ActualizarTurnosFijosComponent.prototype.oddOrEven = function (x) {
        return (x & 1) ? 1 : 2;
    };
    ActualizarTurnosFijosComponent.prototype.ngOnInit = function () {
    };
    ActualizarTurnosFijosComponent.prototype.guardar = function (forma) {
        console.log(forma.value);
        this.IngresoUsuarioServidorService_.actualizar_turno_fijo(forma.value)
            .subscribe(function (data) {
            //console.log(data)
        }, function (error) {
            //console.error(error + "ERROR")
        });
    };
    ActualizarTurnosFijosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-actualizar-turnos-fijos',
            template: __webpack_require__("./src/app/components/perfil-trabajador/actualizar-turnos-fijos/actualizar-turnos-fijos.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_ingreso_usuario_servidor_service__["a" /* IngresoUsuarioServidorService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material_snack_bar__["a" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__["a" /* PerfilTrabajadorServiceService */],
            __WEBPACK_IMPORTED_MODULE_4__services_marcaje_service_service__["a" /* MarcajeServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ActualizarTurnosFijosComponent);
    return ActualizarTurnosFijosComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil-trabajador/haber-no-imponible/haber-no-imponible.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:30px;\">\r\n    <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a routerLinkActive=\"active\" [routerLink]=\"['../Resumen']\">Resumen</a></li>\r\n            <li class=\"breadcrumb-item\"><a routerLinkActive=\"active\" [routerLink]=\"['../LiberarSueldos']\">Haberes Imponibles</a></li>\r\n            <li class=\"breadcrumb-item\"><a routerLinkActive=\"active\" [routerLink]=\"['../HaberNoImponible']\">Haberes No Imponibles</a></li>\r\n            <li class=\"breadcrumb-item\"><a routerLinkActive=\"active\" [routerLink]=\"['../Descuentos']\">Descuentos</a></li>\r\n        </ol>\r\n    </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/haber-no-imponible/haber-no-imponible.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HaberNoImponibleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HaberNoImponibleComponent = /** @class */ (function () {
    function HaberNoImponibleComponent() {
    }
    HaberNoImponibleComponent.prototype.ngOnInit = function () {
    };
    HaberNoImponibleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-haber-no-imponible',
            template: __webpack_require__("./src/app/components/perfil-trabajador/haber-no-imponible/haber-no-imponible.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HaberNoImponibleComponent);
    return HaberNoImponibleComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil-trabajador/historial-turnos/historial-turnos.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  historial-turnos works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/historial-turnos/historial-turnos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialTurnosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistorialTurnosComponent = /** @class */ (function () {
    function HistorialTurnosComponent() {
    }
    HistorialTurnosComponent.prototype.ngOnInit = function () {
    };
    HistorialTurnosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-historial-turnos',
            template: __webpack_require__("./src/app/components/perfil-trabajador/historial-turnos/historial-turnos.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HistorialTurnosComponent);
    return HistorialTurnosComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil-trabajador/liberar-sueldos/liberar-sueldos.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  \r\n    <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a [routerLinkActive]=\"['active']\" [routerLink]=\"['../Resumen']\">Resumen</a></li>\r\n            <li class=\"breadcrumb-item\"><a [routerLinkActive]=\"['active']\" [routerLink]=\"['../LiberarSueldos']\">Haberes Imponibles</a></li>\r\n            <li class=\"breadcrumb-item\"><a [routerLinkActive]=\"['active']\" [routerLink]=\"['../HaberNoImponible']\">Haberes No Imponibles</a></li>\r\n            <li class=\"breadcrumb-item\"><a [routerLinkActive]=\"['active']\" [routerLink]=\"['../Descuentos']\">Descuentos</a></li>\r\n        </ol>\r\n    </nav>\r\n-->\r\n\r\n<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs\" [selectedIndex]=\"selectedTab\">\r\n    <mat-tab label=\"Haberes Imponibles\">\r\n        <div class=\"container\" style=\"margin-top:30px;\">\r\n            <div class=\"jumbotron jumbotron-fluid\">\r\n                <div class=\"container\">\r\n                    <h1 class=\"display-5\">Generación de pago </h1>\r\n                   \r\n                    <p class=\"lead\">En el siguiente formulario deberás armar los haberes para tu trabajador.</p>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\">Escribe la glosa del Haber Imponible que quieras agregar</label>\r\n                        <input [(ngModel)]=\"GlosaHaber\" type=\"text\" class=\"form-control\" placeholder=\"Ejemplo: Bono Ventas\">\r\n                        <small id=\"emailHelp\" class=\"form-text text-muted\">Glosa de haber imponible.</small>\r\n                    </div>\r\n                    <button (click)=\"agregar_haberes(GlosaHaber)\" class=\"btn btn-warning \">Agregar Haberes</button>\r\n                </div>\r\n            </div>\r\n\r\n            {{DatosTrabajador?.nombre}} AFP con {{ComisionAfp}} || El sueldo liquido: {{ DatosTrabajador?.sueldo }} El ngModel del input1: {{ValorHaberes[0]}} ||||||\r\n            <br>{{ TotalHaberImponible }} // Isapre 7% {{  TotalHaberImponible * 0.07}}\r\n\r\n\r\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n  <mat-grid-tile>\r\n    <mat-list role=\"list\">\r\n          <mat-list-item role=\"listitem\">Sueldo a Pagar   {{ SueldoPagar }}</mat-list-item>\r\n          <mat-list-item role=\"listitem\">Descuento AFP:   {{ total_afp }}</mat-list-item>\r\n          <mat-list-item role=\"listitem\">Descuento ISAPRE:   {{ total_isapre }}</mat-list-item>\r\n    </mat-list>\r\n</mat-grid-tile>\r\n\r\n  <mat-grid-tile>2</mat-grid-tile>\r\n  <mat-grid-tile>3</mat-grid-tile>\r\n  <mat-grid-tile>4</mat-grid-tile>\r\n</mat-grid-list>\r\n\r\n\r\n\r\n            <form #forma='ngForm' (ngSubmit)=\"guardar(forma)\" #forma=\"ngForm\">\r\n\r\n\r\n                <div *ngFor=\"let HaberesImponibles_ of HaberesImponibles; let i = index\" class=\"form-group\">\r\n                    <label> {{ HaberesImponibles_ }} </label>\r\n\r\n                    <input (input)=\"onSearchChange($event.target.value)\" type=\"number\" class=\"form-control\" name=\"{{HaberesImponibles_}}\" [(ngModel)]=\"ValorHaberes[i]\">\r\n                    <hr>\r\n                    <br>\r\n                </div>\r\n\r\n                <button type=\"submit\" class=\"btn btn-primary\">Guardar Haberes</button>\r\n            </form>\r\n        </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Haberes no  imponibles\">\r\n        <app-haber-no-imponible></app-haber-no-imponible>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Sueldos Liberados\">\r\n        <app-SueldosLiberados></app-SueldosLiberados>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Resumen\">\r\n        <app-resumen></app-resumen>\r\n    </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/liberar-sueldos/liberar-sueldos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiberarSueldosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sueldos_service__ = __webpack_require__("./src/app/services/sueldos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__ = __webpack_require__("./src/app/services/perfil-trabajador-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_marcaje_service_service__ = __webpack_require__("./src/app/services/marcaje-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiberarSueldosComponent = /** @class */ (function () {
    function LiberarSueldosComponent(SueldoServicio_, PerfilTrabajador, snackBar, MarcajeServiceService_, param, router) {
        var _this = this;
        this.SueldoServicio_ = SueldoServicio_;
        this.PerfilTrabajador = PerfilTrabajador;
        this.snackBar = snackBar;
        this.MarcajeServiceService_ = MarcajeServiceService_;
        this.param = param;
        this.router = router;
        // tslint:disable
        this.HaberesImponibles = []; // Necesario para usar push
        this.ValorHaberes = []; // Se usa en ngFor
        this.PerfilTrabajador.getPerfil(this.param.parent.snapshot.paramMap.get('id')).subscribe(function (data_perfil) {
            console.log(data_perfil);
            _this.DatosTrabajador = data_perfil[0];
            _this.gratificacion = 20000;
            _this.SueldoServicio_.getComisionAfp(_this.DatosTrabajador.afp).subscribe(function (data_afp) {
                _this.ComisionAfp = data_afp[0].monto;
                _this.TotalHaberImponible_temp = ((((_this.ComisionAfp * 1) + 7) / 100) + 1) * data_perfil[0].sueldo;
                _this.TotalHaberImponible = _this.TotalHaberImponible_temp;
                console.log("Viendo porq no muestra la variable", _this.TotalHaberImponible);
            });
        });
    } // FIn constructor
    LiberarSueldosComponent.prototype.guardar = function (forma) {
        console.log(forma.value);
    }; // Fin función guardar
    LiberarSueldosComponent.prototype.agregar_haberes = function (a) {
        this.HaberesImponibles.push(a);
    };
    LiberarSueldosComponent.prototype.onSearchChange = function (e) {
        var element = 0;
        for (var index = 0; index < this.ValorHaberes.length; index++) {
            element = (this.ValorHaberes[index] * 1) + element;
        }
        this.TotalHaberImponible = element + this.TotalHaberImponible_temp;
        this.total_afp = this.TotalHaberImponible * (this.ComisionAfp / 100);
        this.total_isapre = this.TotalHaberImponible * 0.07;
        this.SueldoPagar = this.TotalHaberImponible - (this.total_afp + this.total_isapre);
    }; // Fin on searchchange
    LiberarSueldosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-liberar-sueldos',
            template: __webpack_require__("./src/app/components/perfil-trabajador/liberar-sueldos/liberar-sueldos.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sueldos_service__["a" /* SueldosService */],
            __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__["a" /* PerfilTrabajadorServiceService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__["a" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__services_marcaje_service_service__["a" /* MarcajeServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LiberarSueldosComponent);
    return LiberarSueldosComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil-trabajador/liberar-turnos/liberar-turnos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:50px;padding:35px;\">\r\n\r\n    <form #forma='ngForm' (ngSubmit)=\"guardar(forma)\" #forma=\"ngForm\">\r\n\r\n        <div class=\"form-group\" *ngFor=\"let datos_para_generar_formulario of datos_para_generar_formulario; let i = index\">\r\n            <div *ngIf=\"datos_para_generar_formulario!== null\">\r\n                <label *ngIf=\"i > 6 && llaves_datos_para_generar_formulario[i].length == 3\">\r\n                {{ llaves_datos_para_generar_formulario[i] | entradaosalida }}\r\n                {{ llaves_datos_para_generar_formulario[i] | slice:0:2  |  nombreDelDiaDelMes: mes:anio}}\r\n                {{ llaves_datos_para_generar_formulario[i] | slice:0:2 }}/{{ mes }}/{{ anio  }}\r\n            </label>\r\n\r\n                <label *ngIf=\"i > 6 && llaves_datos_para_generar_formulario[i].length == 2\">\r\n              {{ llaves_datos_para_generar_formulario[i] | entradaosalida }}\r\n              {{ llaves_datos_para_generar_formulario[i] | slice:0:1  |  nombreDelDiaDelMes: mes:anio}}\r\n              {{ llaves_datos_para_generar_formulario[i] | slice:0:1 }}/{{ mes }}/{{ anio }}\r\n            </label>\r\n\r\n                <input *ngIf=\"i > 6 \" type=\"time\" class=\"form-control\" [name]=\"llaves_datos_para_generar_formulario[i]\" [ngModel]=\"datos_para_generar_formulario\">\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-check\">\r\n            <input type=\"checkbox\" class=\"form-check-input\" name=\"check\" #check=\"ngModel\" ngModel>\r\n            <label class=\"form-check-label\">Estoy plenamente seguro de liberar el sueldo de mi trabajador tal cuál como se muestra. Una vez liberado no puede revertirse.</label>\r\n        </div>\r\n\r\n\r\n        <br>\r\n\r\n       \r\n        <button *ngIf=\"check.value\" type=\"submit\" class=\"btn btn-primary\">Enviar</button>\r\n        <button *ngIf=\"!check.value\" type=\"submit\" class=\"btn btn-primary\" disabled>Enviar</button>\r\n    </form>\r\n <button (click)=\"Actualizar(forma)\" class=\"btn btn-danger\">Actualizar</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/liberar-turnos/liberar-turnos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiberarTurnosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__ = __webpack_require__("./src/app/services/perfil-trabajador-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_liberar_turnos_service__ = __webpack_require__("./src/app/services/liberar-turnos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ingreso_usuario_servidor_service__ = __webpack_require__("./src/app/services/ingreso-usuario-servidor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiberarTurnosComponent = /** @class */ (function () {
    function LiberarTurnosComponent(perfilServicio_, param, router, liberarTurnosService, servicio_) {
        var _this = this;
        this.perfilServicio_ = perfilServicio_;
        this.param = param;
        this.router = router;
        this.liberarTurnosService = liberarTurnosService;
        this.servicio_ = servicio_;
        this.mes = this.param.snapshot.paramMap.get('mes');
        this.anio = this.param.snapshot.paramMap.get('anio');
        this.id = this.param.parent.snapshot.paramMap.get('id');
        this.liberarTurnosService.liberar_turnos_servidor(this.param.snapshot.paramMap.get('mes'), this.param.snapshot.paramMap.get('anio'), this.param.parent.snapshot.paramMap.get('id')).subscribe(function (data) {
            _this.datos_para_generar_formulario = data[0];
            var llaves = Object.keys(data[0]);
            var datos = Object.values(data[0]);
            _this.datos_para_generar_formulario = datos;
            _this.llaves_datos_para_generar_formulario = llaves;
        });
    } // Fin Constructor
    LiberarTurnosComponent.prototype.guardar = function (forma) {
        var _this = this;
        this.servicio_.liberar_turno(forma.value, this.id, this.mes).subscribe(function (data) {
            _this.router.navigate(['../PerfilTrabajador/' + _this.param.parent.snapshot.paramMap.get('id') + '/Perfil/']);
        });
    };
    LiberarTurnosComponent.prototype.Actualizar = function (forma) {
        var _this = this;
        console.log("asdfasdasdfpeo en actrulziar");
        this.servicio_.actualizar_turnos(forma.value, this.id, this.mes).subscribe(function (data) {
            _this.router.navigate(['../PerfilTrabajador/' + _this.param.parent.snapshot.paramMap.get('id') + '/Perfil/']);
        });
    };
    LiberarTurnosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-liberar-turnos',
            template: __webpack_require__("./src/app/components/perfil-trabajador/liberar-turnos/liberar-turnos.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__["a" /* PerfilTrabajadorServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_liberar_turnos_service__["a" /* LiberarTurnosService */],
            __WEBPACK_IMPORTED_MODULE_4__services_ingreso_usuario_servidor_service__["a" /* IngresoUsuarioServidorService */]])
    ], LiberarTurnosComponent);
    return LiberarTurnosComponent;
}()); // Fin Clase



/***/ }),

/***/ "./src/app/components/perfil-trabajador/marcaje/marcaje.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:30px;\">\r\n\r\n    <div *ngIf=\"trabaja_dia_en_curso == 1\" class=\"row\">\r\n\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-4\">\r\n            <button (click)=\"marcar_movimiento('entrada')\" *ngIf=\"entrada == 0\" class=\"btn btn-success\">Marcar Entrada</button>\r\n            <button *ngIf=\"entrada !== 0\" class=\"btn btn-success\" disabled>Entrada realizada</button>\r\n        </div>\r\n        <div class=\"col-4\">\r\n            <button (click)=\"marcar_movimiento('salida')\" *ngIf=\"salida == 0\" class=\"btn btn-danger\">Marcar Salida</button>\r\n            <button *ngIf=\"salida !== 0\" class=\"btn btn-danger\" disabled>Salida realizada</button>\r\n        </div>\r\n        <div class=\"col-2\"></div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/marcaje/marcaje.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarcajeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_marcaje_service_service__ = __webpack_require__("./src/app/services/marcaje-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MarcajeComponent = /** @class */ (function () {
    function MarcajeComponent(snackBar, MarcajeServiceService, param, router) {
        var _this = this;
        this.snackBar = snackBar;
        this.MarcajeServiceService = MarcajeServiceService;
        this.param = param;
        this.router = router;
        this.id = {
            'id': this.param.parent.snapshot.paramMap.get('id')
        };
        this.MarcajeServiceService.situacion_marcaje(JSON.stringify(this.id)).subscribe(function (data) {
            console.log(data);
            _this.trabaja_dia_en_curso = data['trabajaDiaEnCurso'];
            _this.entrada = data['Entrada'];
            _this.salida = data['Salida'];
        });
    } // Fin constructor
    MarcajeComponent.prototype.ngOnInit = function () {
    };
    MarcajeComponent.prototype.marcar_movimiento = function (movimiento) {
        var _this = this;
        this.MarcajeServiceService.realizarMarcaje(JSON.stringify(this.id)).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open('Marcaje realizado', 'OK', {
                duration: 3000
            });
            console.log(data);
            //this.router.navigate(['./PerfilTrabajador/' + this.param.parent.snapshot.paramMap.get('id') + '/Perfil']);
        });
    };
    MarcajeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-marcaje',
            template: __webpack_require__("./src/app/components/perfil-trabajador/marcaje/marcaje.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material_snack_bar__["a" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__services_marcaje_service_service__["a" /* MarcajeServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MarcajeComponent);
    return MarcajeComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil-trabajador/perfil-trabajador.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/perfil-trabajador.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilTrabajadorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__ = __webpack_require__("./src/app/services/perfil-trabajador-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilTrabajadorComponent = /** @class */ (function () {
    function PerfilTrabajadorComponent(perfilServicio_, param, router) {
        this.perfilServicio_ = perfilServicio_;
        this.param = param;
        this.router = router;
        this.router.navigate(['./PerfilTrabajador/' + this.param.snapshot.paramMap.get('id') + '/Perfil/']);
    }
    PerfilTrabajadorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-perfil-trabajador',
            template: __webpack_require__("./src/app/components/perfil-trabajador/perfil-trabajador.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__["a" /* PerfilTrabajadorServiceService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PerfilTrabajadorComponent);
    return PerfilTrabajadorComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil-trabajador/perfil/perfil.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\">\r\n\r\n  <div class=\"card-header\">\r\n\r\n    <ul class=\"nav nav-tabs card-header-tabs\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" href=\"#\">Perfil</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Editar</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n     <!--   <a class=\"nav-link disabled\" href=\"#\">Disabled</a>-->\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">{{ empleado_?.nombre }} {{ empleado_?.apellido }}</h5>\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">Administrativo</h6>\r\n\r\n         <img class=\"img-thumbnail\" [src]=\"urlImagenTrabajador\" style=\"width:100px\">\r\n\r\n    <p class=\"card-text\">Jefatura:  {{ empleado_?.jefatura }}.</p>\r\n\r\n        <div style=\"display:flex;justify-content: center\">\r\n            <ul class=\"list-group\" style=\"width: 600px;\">\r\n                    <li class=\"list-group-item\">\r\n                     <p class=\"text-muted\">  Aprobar sueldo para generación de liq. de sueldo</p>\r\n                      <button class=\"btn btn-danger btn-sm\" [routerLink]=\"['../LiberarSueldos/']\">Liberar Sueldos</button>\r\n                    </li>\r\n                    \r\n                    <li class=\"list-group-item\">\r\n                        <p class=\"text-muted\"> Desvincular trabajador  </p>\r\n                        <button class=\"btn btn-warning btn-sm\">Desvinculación </button>\r\n                    </li>\r\n                    \r\n                    <li class=\"list-group-item\">\r\n                        <p class=\"text-muted\"> Marcar Asistencia de trabajador</p>\r\n                        <button class=\"btn btn-danger btn-sm\" [routerLink]=\"['../Marcaje/']\">Marcar asistencia</button>\r\n\r\n                    </li>\r\n                    \r\n                    <li class=\"list-group-item\">\r\n                               <div *ngIf=\"boleano_boton == 'Turnos'\">\r\n                                    <button [routerLink]=\"['../TurnosVariables/']\" class=\"btn btn-primary\" type=\"submit\">Ir a turnos</button>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"boleano_boton != 'Turnos' && turnoFijoSinTurno\">\r\n                                    \r\n                                    <p  class=\"text-muted\">Tu trabajador no tiene generado los turnos aún. Genéralos</p>\r\n                                    <button  [routerLink]=\"['../TurnosFijos/']\"  class=\"btn btn-primary btn-sm\" type=\"submit\">Turnos fijos</button>\r\n                                </div>\r\n\r\n                                    <div *ngIf=\"boleano_boton != 'Turnos' && !turnoFijoSinTurno\">\r\n                                    <button  [routerLink]=\"['../ActualizarTurnosFijos/']\"  class=\"btn btn-primary btn-sm\" type=\"submit\">Actualizar turnos fijos</button>\r\n                                    <p  class=\"text-muted\">Tu trabajador no tiene generado los turnos aún. Genéralos</p>\r\n                                </div>\r\n                    </li>\r\n                    \r\n                  <!--  <li class=\"list-group-item\">\r\n                            Vestibulum at eros\r\n                    </li> -->\r\n            </ul>\r\n        </div>\r\n        <br>\r\n    <a [routerLink]=\"['../../../Planilla/']\" class=\"btn btn-primary\">Volver a planilla</a>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!--\r\n<div class=\"container\" style=\"margin-top:50px;padding:35px;\">\r\n\r\n    <div>\r\n        <button class=\"btn btn-danger btn-sm\" [routerLink]=\"['../LiberarSueldos/']\">Liberar Sueldos</button>\r\n    </div>\r\n\r\n\r\n    <div>\r\n        <button class=\"btn btn-danger\" [routerLink]=\"['../Marcaje/']\">Marcar asistencia</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"boleano_boton == 'Turnos'\">\r\n        <button [routerLink]=\"['../TurnosVariables/']\" class=\"btn btn-primary\" type=\"submit\">Ir a turnos</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"boleano_boton != 'Turnos' && turnoFijoSinTurno\">\r\n        <button  [routerLink]=\"['../TurnosFijos/']\"  class=\"btn btn-primary\" type=\"submit\">Turnos fijos</button>\r\n        <small>Tu trabajador no tiene generado los turnos aún. Genéralos</small>\r\n    </div>\r\n\r\n        <div *ngIf=\"boleano_boton != 'Turnos' && !turnoFijoSinTurno\">\r\n        <button  [routerLink]=\"['../ActualizarTurnosFijos/']\"  class=\"btn btn-primary\" type=\"submit\">Actualizar turnos fijos</button>\r\n        <small>Tu trabajador no tiene generado los turnos aún. Genéralos</small>\r\n    </div>\r\n\r\n    <br>\r\n    <ul class=\"list-group\">\r\n\r\n        <li *ngFor=\"let turnos_sin_liberar of turnos_sin_liberar\" class=\"list-group-item\">Liberación pendiente {{turnos_sin_liberar.mes}}/{{turnos_sin_liberar.anio}} <button [routerLink]=\"['../LiberarTurnos/',turnos_sin_liberar.mes, turnos_sin_liberar.anio]\" style=\"float:right\" type=\"button\" class=\"btn btn-success btn-sm\">Liberar</button>\r\n        </li>\r\n\r\n    </ul>\r\n\r\n    <img [src]=\"urlImagenTrabajador\" class=\"img-thumbnail\" style=\"width:100px; height:100px;\">\r\n\r\n    <div *ngIf=\"entrada !== 0\">\r\n\r\n        <h2> Resumen Asistencia del día: </h2>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <p>Hora Entrada: {{entrada}}</p>\r\n                <p>Estatus Movimiento: {{ statusEntrada }} </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <p>Hora Salida: {{salida}}</p>\r\n                <p>Estatus Movimiento: {{ statusSalida }} </p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n</div>-->"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/perfil/perfil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__ = __webpack_require__("./src/app/services/perfil-trabajador-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_marcaje_service_service__ = __webpack_require__("./src/app/services/marcaje-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(snackBar, perfilServicio_, MarcajeServiceService, param, router) {
        var _this = this;
        this.snackBar = snackBar;
        this.perfilServicio_ = perfilServicio_;
        this.MarcajeServiceService = MarcajeServiceService;
        this.param = param;
        this.router = router;
        this.turnoFijoSinTurno = true;
        this.id = {
            'id': this.param.parent.snapshot.paramMap.get('id')
        };
        this.MarcajeServiceService.situacion_marcaje(JSON.stringify(this.id)).subscribe(function (data) {
            console.log("LOs datos del marcaje ", data);
            console.log("tipo turno", data['TipoTurno']);
            _this.turnoFijoSinTurno = (data['trabajaDiaEnCurso'] == 0) ? true : false;
            _this.trabaja_dia_en_curso = data['trabajaDiaEnCurso'];
            _this.entrada = data['Entrada'];
            _this.salida = data['Salida'];
            _this.statusEntrada = data['EstatusEntrada'];
            _this.statusSalida = data['EstatusSalida'];
        });
        this.id_parent = this.param.parent.snapshot.paramMap.get('id');
        this.perfilServicio_.getTurnosSinLiberacion(this.id_parent).then(function (data) {
            _this.turnos_sin_liberar = data;
            console.log("turnos_sin_liberar", data);
        });
        this.perfilServicio_.getPerfil(this.param.parent.snapshot.paramMap.get('id')).subscribe(function (data) {
            _this.urlImagenTrabajador = 'https://sister.cl/trabajadores/' + data[0].rut + '/registro/' + data[0].rut + '.jpg';
            _this.datos_perfil_empleado = data;
            _this.boleano_boton = _this.datos_perfil_empleado[0].horario_con_o_sin_turnos;
            _this.empleado_ = data[0];
        });
    } // FIn constructor
    PerfilComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__("./src/app/components/perfil-trabajador/perfil/perfil.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material_snack_bar__["a" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__["a" /* PerfilTrabajadorServiceService */],
            __WEBPACK_IMPORTED_MODULE_4__services_marcaje_service_service__["a" /* MarcajeServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PerfilComponent);
    return PerfilComponent;
}()); // Fin clase.



/***/ }),

/***/ "./src/app/components/perfil-trabajador/resumen/resumen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:30px;\" *ngIf=\"!Liberado\">\r\n    <div class=\"jumbotron jumbotron-fluid\">\r\n        <div class=\"container\">\r\n            <h1 class=\"display-5\">Generación de pago </h1>\r\n\r\n            <p class=\"lead\">En el siguiente formulario deberás armar los haberes para tu trabajador.</p>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Selecciona el tipo de Ítem</label>\r\n                <select class=\"form-control\" [(ngModel)]=\"TipoItem\">\r\n                  <option value=\"0\">Haber Imponible</option>\r\n                  <option value=\"1\">Haber No Imponible</option>\r\n                  <option value=\"2\">Descuentos</option>\r\n                </select>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">Escribe la glosa del ítem que quieras agregar</label>\r\n                <input [(ngModel)]=\"GlosaHaber\" type=\"text\" class=\"form-control\" placeholder=\"Ejemplo: Bono Ventas\">\r\n                <small id=\"emailHelp\" class=\"form-text text-muted\">Glosa de haber imponible.</small>\r\n            </div>\r\n\r\n\r\n\r\n            <button (click)=\"agregar_haberes(GlosaHaber)\" class=\"btn btn-warning \">Agregar Haberes</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container\" style=\"margin-bottom:50px;\">\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">Días Calendarizados / Trabajados Mes anterior {{ MesEnCurso -1 }}/{{anioEnCurso}} : {{ DiasCalendarizados }} / {{ DiasTrabajados }}</li>\r\n            <li class=\"list-group-item\">Total imponible {{ TotalHaberImponible | currency }}</li>\r\n            <li class=\"list-group-item\">Sueldo a Pagar {{ SueldoPagar | currency }}</li>\r\n            <li class=\"list-group-item\">Descuento AFP: {{ total_afp | currency }}</li>\r\n            <li class=\"list-group-item\"> Descuento ISAPRE: {{ total_isapre | currency }}</li>\r\n            <li class=\"list-group-item\">Total Dsctos: {{ TotalDescuentos | currency }}</li>\r\n            <li class=\"list-group-item\">Total haberes no imponibles: {{ TotalHaberNoImponible | currency }}</li>\r\n            <li class=\"list-group-item\">Total haberes: {{ TotalHaberesTotales | currency }}</li>\r\n        </ul>\r\n    </div>\r\n\r\n\r\n\r\n    <form #forma='ngForm' (ngSubmit)=\"guardar(forma)\" #forma=\"ngForm\">\r\n\r\n        <div *ngFor=\"let HaberesImponibles_ of HaberesImponibles; let i = index\" class=\"form-group row\">\r\n\r\n            <div class=\"col\">\r\n                <label> {{ HaberesImponibles_ }} </label>\r\n            </div>\r\n\r\n            <div class=\"col\">\r\n                <input (input)=\"FuncionHaberesImponibles()\" type=\"number\" class=\"form-control\" name=\"{{HaberesImponibles_}}\" [(ngModel)]=\"ValorHaberes[i]\">\r\n            </div>\r\n\r\n            <div class=\"col\">\r\n                <button (click)=\"BorrarHaberImponible(i)\" type=\"button\" class=\"btn btn-danger\">Eliminar</button>\r\n                <!--<span  (click)=\"BorrarHaberImponible(i)\"  class=\"badge badge-warning\">Borrar</span>-->\r\n            </div>\r\n\r\n            <div class=\"col\"></div>\r\n\r\n        </div>\r\n\r\n        <div *ngFor=\"let HaberesNoImponibles_ of HaberesNoImponibles; let i = index\" class=\"form-group row\">\r\n            <div class=\"col\">\r\n                <label> {{ HaberesNoImponibles_ }} </label>\r\n            </div>\r\n\r\n            <div class=\"col\">\r\n                <input (input)=\"FuncionHaberesNoImponibles()\" type=\"number\" class=\"form-control\" name=\"{{HaberesNoImponibles_}}\" [(ngModel)]=\"ValorHaberesNo[i]\">\r\n            </div>\r\n\r\n            <div class=\"col\">\r\n                <!-- <span  (click)=\"BorrarHaberNoImponible(i)\"  class=\"badge badge-warning\">Borrar</span>-->\r\n                <button (click)=\"BorrarHaberNoImponible(i)\" type=\"button\" class=\"btn btn-danger\">Eliminar</button>\r\n            </div>\r\n\r\n\r\n            <div class=\"col\"></div>\r\n        </div>\r\n\r\n        <hr>\r\n        <br>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Guardar liquidación</button>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"container\" style=\"margin-top:30px;\" *ngIf=\"Liberado\">\r\n<h2>Liberado!</h2>\r\n</div>"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/resumen/resumen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sueldos_service__ = __webpack_require__("./src/app/services/sueldos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__ = __webpack_require__("./src/app/services/perfil-trabajador-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_marcaje_service_service__ = __webpack_require__("./src/app/services/marcaje-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResumenComponent = /** @class */ (function () {
    function ResumenComponent(SueldoServicio_, PerfilTrabajador, snackBar, MarcajeServiceService_, param, router) {
        var _this = this;
        this.SueldoServicio_ = SueldoServicio_;
        this.PerfilTrabajador = PerfilTrabajador;
        this.snackBar = snackBar;
        this.MarcajeServiceService_ = MarcajeServiceService_;
        this.param = param;
        this.router = router;
        this.HaberesImponibles = []; // Necesario para usar push
        this.HaberesNoImponibles = []; // Necesario para usar push
        this.ValorHaberes = []; // Se usa en ngFor  
        this.ValorHaberesNo = []; // Se usa en ngFor 
        var fecha = new Date();
        this.MesEnCurso = fecha.getMonth() + 1; // REVISAR !!!
        this.anioEnCurso = fecha.getFullYear();
        var data = {
            id: this.param.parent.snapshot.paramMap.get('id'),
            mes: this.MesEnCurso,
            anio: this.anioEnCurso
        };
        this.SueldoServicio_.ConfirmacionSueldoLiberado(data).subscribe(function (datos) {
            // SI es 0 , no pasa nada, si es 1 . Se devuelve. No puede ser. 
            if (datos == 1)
                _this.Liberado = true;
            console.log("VErificar confiramcion sueldo liberado" + datos + "y el valor de this.Liberado" + _this.Liberado);
        });
        this.PerfilTrabajador.getPerfil(this.param.parent.snapshot.paramMap.get('id')).subscribe(function (data_perfil) {
            _this.tipoTurnos = data_perfil[0]['horario_con_o_sin_turnos'];
            if (_this.tipoTurnos != 'Horario Fijo') {
                _this.SueldoServicio_.getDiasCalendarizados(_this.param.parent.snapshot.paramMap.get('id'), fecha.getMonth(), fecha.getFullYear()).subscribe(function (data) {
                    _this.DiasCalendarizados = data;
                });
                _this.SueldoServicio_.getDiasTrabajados(_this.param.parent.snapshot.paramMap.get('id'), fecha.getMonth(), fecha.getFullYear()).subscribe(function (data) {
                    _this.DiasTrabajados = data['diasTrabajados'];
                    _this.horasNoTrabajadas = data['HorasNoTrabajadas'];
                    console.log(data);
                });
            }
            else {
                _this.SueldoServicio_.getDiasCalendarizadosFijos(_this.param.parent.snapshot.paramMap.get('id')).subscribe(function (data) {
                    console.log('Datos turnos fijos', data);
                    _this.DiasCalendarizados = data['esperado'];
                    _this.DiasTrabajados = data['horasTrabajadas'];
                });
            }
            _this.DatosTrabajador = data_perfil[0];
            _this.gratificacion = 20000;
            _this.SueldoServicio_.getComisionAfp(_this.DatosTrabajador.afp).subscribe(function (data_afp) {
                _this.ComisionAfp = data_afp[0].monto;
                _this.TotalHaberImponible_temp = ((((_this.ComisionAfp * 1) + 7) / 100) + 1) * data_perfil[0].sueldo;
                _this.TotalHaberImponible = _this.TotalHaberImponible_temp;
                _this.total_afp = _this.TotalHaberImponible * (_this.ComisionAfp / 100);
                _this.total_isapre = _this.TotalHaberImponible * 0.07;
                _this.SueldoPagar = _this.TotalHaberImponible - (_this.total_afp + _this.total_isapre);
                _this.TotalDescuentos = _this.total_afp + _this.total_isapre;
                _this.TotalHaberesTotales = _this.TotalHaberImponible;
                _this.TotalHaberesTotales_temp = _this.TotalHaberImponible;
                _this.TotalHaberNoImponible = 0;
            });
        });
    } // FIn constructor
    ResumenComponent.prototype.guardar = function (forma) {
        var _this = this;
        var resultadoImponibles = {};
        this.HaberesImponibles.forEach(function (k, i) { return resultadoImponibles[k] = _this.ValorHaberes[i]; });
        console.log(resultadoImponibles);
        var resultadoNoImponibles = {};
        this.HaberesNoImponibles.forEach(function (k, i) { return resultadoNoImponibles[k] = _this.ValorHaberesNo[i]; });
        console.log(resultadoNoImponibles);
        var descuentos = {
            Afp: this.total_afp,
            Isapre: this.total_isapre
        };
        var objeto = {
            imponibles: resultadoImponibles,
            noimponibles: resultadoNoImponibles,
            trabajador_id: this.param.parent.snapshot.paramMap.get('id'),
            dias_calendarizados: this.DiasCalendarizados,
            empresa: localStorage.getItem("nombre_empresa"),
            dias_trabajados: this.DiasTrabajados,
            sueldo_escrito: '',
            descuentos: descuentos,
            totalHaberesImp: this.TotalHaberImponible,
            totalHaberesNoImp: this.TotalHaberNoImponible,
            sueldoLiquido: this.SueldoPagar,
            totalHaberesTotales: this.TotalHaberesTotales,
            totalDescuentos: this.TotalDescuentos,
            mesEnCurso: this.MesEnCurso,
            anioEnCurso: this.anioEnCurso
        };
        console.log(objeto);
        this.SueldoServicio_.InsertSueldo(objeto).subscribe(function (data) {
            console.log(data);
        });
    }; // Fin función guardar
    ResumenComponent.prototype.agregar_haberes = function (a) {
        if (this.TipoItem == '0') {
            this.HaberesImponibles.push(a);
        }
        else if (this.TipoItem == '1') {
            this.HaberesNoImponibles.push(a);
        }
        else {
            alert("No se puede ingresar Descuentos por ahora");
        }
    }; // Fin función agregar_haberes
    ResumenComponent.prototype.FuncionHaberesImponibles = function () {
        var element = 0;
        for (var index = 0; index < this.ValorHaberes.length; index++) {
            element = (this.ValorHaberes[index] * 1) + element;
        }
        this.TotalHaberImponible = element + this.TotalHaberImponible_temp;
        console.log(this.ValorHaberes);
        this.total_afp = this.TotalHaberImponible * (this.ComisionAfp / 100);
        this.total_isapre = this.TotalHaberImponible * 0.07;
        this.SueldoPagar = this.TotalHaberImponible - (this.total_afp + this.total_isapre);
        this.TotalDescuentos = this.total_afp + this.total_isapre;
        this.TotalHaberesTotales = this.TotalHaberNoImponible + this.TotalHaberImponible;
    }; // Fin on FuncionHaberesImponibles
    ResumenComponent.prototype.FuncionHaberesNoImponibles = function () {
        var element = 0;
        for (var index = 0; index < this.ValorHaberesNo.length; index++) {
            element = (this.ValorHaberesNo[index] * 1) + element;
        }
        this.SueldoPagar = this.TotalHaberImponible - (this.total_afp + this.total_isapre) + element;
        this.TotalDescuentos = this.total_afp + this.total_isapre;
        this.TotalHaberesTotales = this.TotalHaberImponible + element;
        this.TotalHaberNoImponible = element;
    }; // Fin on FuncionHaberesNoImponibles
    ResumenComponent.prototype.BorrarHaberNoImponible = function (elemento) {
        this.HaberesNoImponibles.splice(elemento, 1);
        this.ValorHaberesNo.splice(elemento, 1);
        this.FuncionHaberesImponibles();
        this.FuncionHaberesNoImponibles();
    }; // Fin función BorrarHaberNoImponible
    ResumenComponent.prototype.BorrarHaberImponible = function (elemento) {
        this.HaberesImponibles.splice(elemento, 1);
        this.ValorHaberes.splice(elemento, 1);
        this.FuncionHaberesImponibles();
        this.FuncionHaberesNoImponibles();
    }; // Fin función BorrarHaberImponible
    ResumenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resumen',
            template: __webpack_require__("./src/app/components/perfil-trabajador/resumen/resumen.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sueldos_service__["a" /* SueldosService */],
            __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__["a" /* PerfilTrabajadorServiceService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_snack_bar__["a" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__services_marcaje_service_service__["a" /* MarcajeServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ResumenComponent);
    return ResumenComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil-trabajador/turnos-fijos/turnos-fijos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:50px;padding:35px;\">\r\n\r\n\t    <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\r\n\t\t      <h1 class=\"display-4\">Turnos</h1>\r\n\t\t      <p class=\"lead\">Ten cuidado al escribir los turnos de tu trabajador, cuida que se cumpla el horario pactado en el contrato.</p>\r\n\t    </div>\r\n\r\n<hr>\r\n\r\n\r\n\r\n    <form #forma='ngForm' (ngSubmit)=\"guardar(forma)\">\r\n\r\n\r\n<div class=\"card\" style=\"padding:50px;\">\r\n  <div class=\"card-body\">\r\n     <div class=\"form-group\" *ngFor=\"let dia of dias;let i = index\">\r\n\t\t    <label><strong>{{ dia | uppercase}}</strong></label>\r\n\t\t         <div class=\"form-row\">       \t\r\n\t\t\t\t    <div class=\"form-group col-md-6\">\r\n\t\t\t\t      <label>Entrada</label>\r\n\t\t\t\t      <input name=\"{{i}}e\" type=\"time\" class=\"form-control\" ngModel>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div class=\"form-group col-md-6\">\r\n\t\t\t\t      <label>Salida</label>\r\n\t\t\t\t      <input name=\"{{i}}s\" type=\"time\" class=\"form-control\" ngModel>\r\n\t\t\t\t    </div>\r\n\t\t        </div>\r\n\t\t  </div>\r\n  </div>\r\n<input type=\"hidden\" name=\"trabajador_id\" [ngModel]=\"trabajador_id\">\r\n    <div class=\"text-center\">\r\n\t <button type=\"submit\" class=\"btn btn-outline-primary\">Guardar Horario</button>\r\n\t</div>\r\n\r\n</div>\r\n\t\t\r\n\r\n \r\n\r\n\t\t  \t \r\n\r\n    </form>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/turnos-fijos/turnos-fijos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurnosFijosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__ = __webpack_require__("./src/app/services/perfil-trabajador-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_marcaje_service_service__ = __webpack_require__("./src/app/services/marcaje-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ingreso_usuario_servidor_service__ = __webpack_require__("./src/app/services/ingreso-usuario-servidor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TurnosFijosComponent = /** @class */ (function () {
    function TurnosFijosComponent(IngresoUsuarioServidorService_, snackBar, perfilServicio_, MarcajeServiceService, param, router) {
        this.IngresoUsuarioServidorService_ = IngresoUsuarioServidorService_;
        this.snackBar = snackBar;
        this.perfilServicio_ = perfilServicio_;
        this.MarcajeServiceService = MarcajeServiceService;
        this.param = param;
        this.router = router;
        this.dias = this.perfilServicio_.array_dias;
        this.trabajador_id = this.param.parent.snapshot.paramMap.get('id');
    }
    TurnosFijosComponent.prototype.ngOnInit = function () {
    };
    TurnosFijosComponent.prototype.guardar = function (forma) {
        console.log(forma.value);
        this.IngresoUsuarioServidorService_.insertar_turno_fijo(forma.value)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.error(error + "ERROR");
        });
    };
    TurnosFijosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-turnos-fijos',
            template: __webpack_require__("./src/app/components/perfil-trabajador/turnos-fijos/turnos-fijos.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_ingreso_usuario_servidor_service__["a" /* IngresoUsuarioServidorService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material_snack_bar__["a" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__["a" /* PerfilTrabajadorServiceService */],
            __WEBPACK_IMPORTED_MODULE_4__services_marcaje_service_service__["a" /* MarcajeServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], TurnosFijosComponent);
    return TurnosFijosComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil-trabajador/turnos-variables/turnos-variables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:50px;padding:35px;\">\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleFormControlSelect1\">Meses pendientes de turnos: </label>\r\n        <select class=\"form-control\" [(ngModel)]=\"meses_select\" #heroInput=\"ngModel\">\r\n\r\n\t\t\t      <option *ngFor=\"let meses_pendienes_de_hacer_turnos of meses_pendienes_de_hacer_turnos; let i = index\" [value]=\"meses_pendienes_de_hacer_turnos\">{{meses_pendienes_de_hacer_turnos}}</option>\r\n\r\n\t\t\t    </select>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-outline-primary  btn-block\" (click)=\"hacer_turno()\">Generar turno</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"estatus_mes_actual == 0\" class=\"alert alert-danger\" role=\"alert\">\r\n        Tu trabajador no tiene el horario del mes en curso listo\r\n    </div>\r\n\r\n\r\n    <form #forma='ngForm' (ngSubmit)=\"guardar(forma)\" #forma=\"ngForm\">\r\n\r\n\r\n        <div *ngFor=\"let dias_a_mostrar of dias_a_mostrar; let i = index\" class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Entrada {{ dias_a_mostrar }} {{ i+1 }}/{{mes}}/{{ anio }}</label>\r\n\r\n            <input type=\"time\" class=\"form-control\" name=\"{{i+1}}e\" ngModel id=\"{{i+1}}e\">\r\n\r\n            <br>\r\n            <label for=\"exampleInputEmail1\">Salida {{ dias_a_mostrar }} {{ i+1 }}/{{mes}}/{{ anio }}</label>\r\n            <input type=\"time\" class=\"form-control\" name=\"{{i+1}}s\" ngModel>\r\n\r\n            <!--  {{ (forma.value[ (i+1) + 'e']  | slice:0:2) }}   {{ forma.value[ (i+1) + 's']  | slice:0:2}} -->\r\n\r\n            <input type=\"hidden\" [value]=\"forma.value[ (i+1) + 'e']\">\r\n            <small class=\"form-text text-muted\">Horario del día.   </small>\r\n            <hr>\r\n            <br>\r\n        </div>\r\n\r\n\r\n        <input type=\"hidden\" name=\"mes\" [ngModel]=\"mes\">\r\n        <input type=\"hidden\" name=\"anio\" [ngModel]=\"anio\">\r\n        <input type=\"hidden\" name=\"trabajador_id\" [ngModel]=\"id_parent\">\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\">Guarda el horario</button>\r\n    </form>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/turnos-variables/turnos-variables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurnosVariablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__ = __webpack_require__("./src/app/services/perfil-trabajador-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ingreso_usuario_servidor_service__ = __webpack_require__("./src/app/services/ingreso-usuario-servidor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TurnosVariablesComponent = /** @class */ (function () {
    function TurnosVariablesComponent(perfilServicio_, param, router, servicio_empleado) {
        var _this = this;
        this.perfilServicio_ = perfilServicio_;
        this.param = param;
        this.router = router;
        this.servicio_empleado = servicio_empleado;
        this.perfilServicio_.getStatusHorarios_mes_proximo(this.param.parent.snapshot.paramMap.get('id'));
        this.perfilServicio_.getStatusHorarios_mes_actual(this.param.parent.snapshot.paramMap.get('id'));
        this.id_parent = this.param.parent.snapshot.paramMap.get('id');
        this.perfilServicio_.getPerfil(this.param.parent.snapshot.paramMap.get('id')).subscribe(function (data) {
            _this.datos_perfil_empleado = data;
            _this.meses_pendiente_de_hacer_turnos();
        });
    } // Fin constructor
    TurnosVariablesComponent.prototype.ngOnInit = function () {
        this.estatus_mes_actual = this.perfilServicio_.mes_en_curso;
        this.estatus_proximo_mes = this.perfilServicio_.mes_proximo;
    }; // FIn funcion ngOnInit
    TurnosVariablesComponent.prototype.DiasDelMes = function () {
        var fecha = new Date();
        var anio = fecha.getFullYear();
        var mes = fecha.getMonth();
        return new Date(anio, mes, 0).getDate();
    }; // Fin función DiasDelMes  ; Usada en horario mensual, para dias a mostrar.
    TurnosVariablesComponent.prototype.dia_de_la_semana = function (anio, mes, dia) {
        var fecha = new Date(anio + ',' + mes + ',' + dia);
        var weekday = fecha.getDay();
        if (weekday == 0) {
            return this.perfilServicio_.array_dias[(6)];
        }
        else {
            return this.perfilServicio_.array_dias[(weekday - 1)];
        }
    }; // Fin funcion dia_de_la_semana
    TurnosVariablesComponent.prototype.horario_mensual = function (anio, mes) {
        var dias = new Date(anio, mes, 0).getDate();
        var conjunto_dias = new Array();
        for (var i = 1; i < dias + 1; i++) {
            conjunto_dias.push(this.dia_de_la_semana(anio, mes, i));
        }
        this.dias_a_mostrar = conjunto_dias;
    }; // Fin función horario_mensual
    TurnosVariablesComponent.prototype.meses_pendiente_de_hacer_turnos = function () {
        var fecha = new Date();
        var anio = fecha.getFullYear();
        var mes = fecha.getMonth();
        var array_meses_pendientes = new Array();
        if (this.estatus_mes_actual == 0) {
            array_meses_pendientes.push((mes + 1) + "/" + anio);
        }
        if (this.estatus_proximo_mes == 0) {
            array_meses_pendientes.push((mes + 2) + "/" + anio);
        }
        this.meses_pendienes_de_hacer_turnos = array_meses_pendientes;
    }; //  Fin funcion meses_pendiente_de_hacer_turnos
    TurnosVariablesComponent.prototype.hacer_turno = function () {
        var meses_select_array = this.meses_select.split('/');
        this.anio = meses_select_array[1];
        this.mes = meses_select_array[0];
        this.horario_mensual(meses_select_array[1], meses_select_array[0]);
    }; // Fin funcion hacer_turno
    TurnosVariablesComponent.prototype.guardar = function (forma) {
        console.log(forma.value);
        this.servicio_empleado.insertar_turno((forma.value));
    };
    TurnosVariablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-turnos-variables',
            template: __webpack_require__("./src/app/components/perfil-trabajador/turnos-variables/turnos-variables.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_perfil_trabajador_service_service__["a" /* PerfilTrabajadorServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_ingreso_usuario_servidor_service__["a" /* IngresoUsuarioServidorService */]])
    ], TurnosVariablesComponent);
    return TurnosVariablesComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil-trabajador/visualizacion-liquidaciones/visualizacion-liquidaciones.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/perfil-trabajador/visualizacion-liquidaciones/visualizacion-liquidaciones.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  visualizacion-liquidaciones works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/perfil-trabajador/visualizacion-liquidaciones/visualizacion-liquidaciones.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizacionLiquidacionesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VisualizacionLiquidacionesComponent = /** @class */ (function () {
    function VisualizacionLiquidacionesComponent() {
    }
    VisualizacionLiquidacionesComponent.prototype.ngOnInit = function () {
    };
    VisualizacionLiquidacionesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-visualizacion-liquidaciones',
            template: __webpack_require__("./src/app/components/perfil-trabajador/visualizacion-liquidaciones/visualizacion-liquidaciones.component.html"),
            styles: [__webpack_require__("./src/app/components/perfil-trabajador/visualizacion-liquidaciones/visualizacion-liquidaciones.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VisualizacionLiquidacionesComponent);
    return VisualizacionLiquidacionesComponent;
}());



/***/ }),

/***/ "./src/app/components/planilla/planilla.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\" style=\"margin-top:50px;padding:35px;\">\r\n\r\n\r\n    <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"basic-addon1\">Busca un trabajador</span>\r\n        </div>\r\n\r\n        <input type=\"text\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"name\" #ctrl=\"ngModel\">\r\n    </div>\r\n\r\n    <!-- <div class=\"input-group mb-3 row justify-content-center\"><button type=\"button\" class=\"btn btn-outline-primary\">Buscar</button></div>\r\n     <p>Value: {{ name }}</p> <p>Valid: {{ ctrl.dirty }}</p>\r\n   -->\r\n\r\n    <table class=\"table table-hover table-responsive-lg table-dark\">\r\n        <thead>\r\n            <tr>\r\n                <th scope=\"col\">Nombre</th>\r\n                <th scope=\"col\">Apellido</th>\r\n                <th scope=\"col\">Puesto</th>\r\n                <th scope=\"col\">Isapre</th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody *ngIf=\"ctrl.dirty == false || name.length == 0\">\r\n\r\n            <tr *ngFor=\"let empleados of empleados\">\r\n\r\n                <th [routerLink]=\"['/PerfilTrabajador', empleados.id]\" scope=\"row\" style=\"cursor:pointer\">{{ empleados.nombre }}</th>\r\n                <td>{{ empleados.apellido }}</td>\r\n                <td>{{ empleados.puesto }}</td>\r\n                <td>{{ empleados.isapre }}</td>\r\n\r\n            </tr>\r\n\r\n        </tbody>\r\n\r\n        <tbody *ngIf=\"ctrl.dirty == true && name.length > 0\">\r\n\r\n            <tr *ngFor=\"let empleados of empleados\">\r\n\r\n                <th [routerLink]=\"['/PerfilTrabajador', empleados.id]\" *ngIf=\"empleados.nombre.toLowerCase().search(name.toLowerCase()) >= 0 || empleados.apellido.toLowerCase().search(name.toLowerCase()) >= 0\" scope=\"row\">{{ empleados.nombre }}</th>\r\n                <td *ngIf=\"empleados.nombre.toLowerCase().search(name.toLowerCase()) >= 0 || empleados.apellido.toLowerCase().search(name.toLowerCase()) >= 0\">{{ empleados.apellido }}</td>\r\n                <td *ngIf=\"empleados.nombre.toLowerCase().search(name.toLowerCase()) >= 0 || empleados.apellido.toLowerCase().search(name.toLowerCase()) >= 0\">{{ empleados.puesto }}</td>\r\n                <td *ngIf=\"empleados.nombre.toLowerCase().search(name.toLowerCase()) >= 0 || empleados.apellido.toLowerCase().search(name.toLowerCase()) >= 0\">{{ empleados.isapre }}mdo</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/planilla/planilla.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanillaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_planillaservices_service__ = __webpack_require__("./src/app/services/planillaservices.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanillaComponent = /** @class */ (function () {
    function PlanillaComponent(planillaServicio_) {
        var _this = this;
        this.planillaServicio_ = planillaServicio_;
        this.planillaServicio_.obtener_planilla(localStorage.getItem('nombre_empresa')).subscribe(function (data) {
            console.log('data', data);
            _this.empleados = data;
        });
    } // Fin constructor
    PlanillaComponent.prototype.ir_perfil_empleado = function () {
        alert("asdf");
    };
    PlanillaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-planilla',
            template: __webpack_require__("./src/app/components/planilla/planilla.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_planillaservices_service__["a" /* PlanillaservicesService */]])
    ], PlanillaComponent);
    return PlanillaComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/Home']\">SISTER </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/Home']\">Inicio </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/DashBoard']\">Dashboard</a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Acciones\r\n        </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                    <a class=\"dropdown-item\" routerLinkActive=\"active\" href=\"#\">Pago Remuneraciones</a>\r\n                    <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['/Ingresa']\">Ingresar trabajador</a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['/Planilla']\">Visualizar planilla</a>\r\n                </div>\r\n            </li>\r\n            <!--    <li class=\"nav-item\">\r\n                <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n            </li>-->\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"´Búsqueda\" aria-label=\"Search\">\r\n            <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Buscar</button>\r\n        </form>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/guards/save-forms-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveFormsGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SaveFormsGuard = /** @class */ (function () {
    function SaveFormsGuard() {
    }
    SaveFormsGuard.prototype.canDeactivate = function (component) {
        var can = component.canDeactivate();
        console.log('DeactivateGuard#canDeactivate called, can: ', can);
        if (!can) {
            alert('Deactivation blocked');
            return false;
        }
    };
    SaveFormsGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SaveFormsGuard);
    return SaveFormsGuard;
}());



/***/ }),

/***/ "./src/app/pipes/entradaosalida.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntradaosalidaPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EntradaosalidaPipe = /** @class */ (function () {
    function EntradaosalidaPipe() {
    }
    EntradaosalidaPipe.prototype.transform = function (value, args) {
        if (value.length > 3) {
            return null;
        }
        else if (value.search('s') > -1 && value !== 'mes') {
            return 'Salida';
        }
        else if (value.search('e') > -1 && value !== 'mes') {
            return 'Entrada';
        }
        else {
            return null;
        }
    };
    EntradaosalidaPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'entradaosalida'
        })
    ], EntradaosalidaPipe);
    return EntradaosalidaPipe;
}());



/***/ }),

/***/ "./src/app/pipes/nombre-del-dia-del-mes.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NombreDelDiaDelMesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NombreDelDiaDelMesPipe = /** @class */ (function () {
    function NombreDelDiaDelMesPipe() {
        this.array_dias = [
            'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
        ];
    }
    NombreDelDiaDelMesPipe.prototype.transform = function (value, mes, anio) {
        return this.dia_de_la_semana(anio, mes, value);
    };
    NombreDelDiaDelMesPipe.prototype.dia_de_la_semana = function (anio, mes, dia) {
        var fecha = new Date(anio + ',' + mes + ',' + dia);
        var weekday = fecha.getDay();
        if (weekday == 0) {
            return this.array_dias[(6)];
        }
        else {
            return this.array_dias[(weekday - 1)];
        }
    }; // Fin funcion dia_de_la_semana
    NombreDelDiaDelMesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'nombreDelDiaDelMes',
            pure: false
        })
    ], NombreDelDiaDelMesPipe);
    return NombreDelDiaDelMesPipe;
}());



/***/ }),

/***/ "./src/app/services/guardar-sucursal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardarSucursalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__ = __webpack_require__("./src/app/services/rutasservidor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuardarSucursalService = /** @class */ (function () {
    function GuardarSucursalService(http, rutasService_) {
        this.http = http;
        this.rutasService_ = rutasService_;
    }
    GuardarSucursalService.prototype.guardar_sucursal_servidor = function (data) {
        return this.http.post(this.rutasService_.rutas['GuardarSucursal'], data);
    };
    GuardarSucursalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__["a" /* RutasservidorService */]])
    ], GuardarSucursalService);
    return GuardarSucursalService;
}());



/***/ }),

/***/ "./src/app/services/ingreso-usuario-servidor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresoUsuarioServidorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__ = __webpack_require__("./src/app/services/rutasservidor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IngresoUsuarioServidorService = /** @class */ (function () {
    function IngresoUsuarioServidorService(http, rutasService_) {
        this.http = http;
        this.rutasService_ = rutasService_;
    }
    IngresoUsuarioServidorService.prototype.insertar_usuario_datos_generales = function (data) {
        return this.http.post(this.rutasService_.rutas['ingreso_empleados_datos_basicos'], JSON.stringify(data));
    }; // Fin funcion insertar_usuario_datos_generales
    IngresoUsuarioServidorService.prototype.insertar_turno_fijo = function (data) {
        return this.http.post(this.rutasService_.rutas['InsertTurnoFijo'], JSON.stringify(data));
    };
    IngresoUsuarioServidorService.prototype.actualizar_turno_fijo = function (data) {
        return this.http.post(this.rutasService_.rutas['UpdateTurnoFijo'], JSON.stringify(data));
    };
    IngresoUsuarioServidorService.prototype.update_turno_fijo = function (data) {
        return this.http.post(this.rutasService_.rutas['updateTurnoFijo'], JSON.stringify(data));
    };
    IngresoUsuarioServidorService.prototype.insertar_turno = function (data) {
        return this.http.post(this.rutasService_.rutas['InsertTurnoVariable'], JSON.stringify(data)).subscribe(function (a) {
        });
    }; // Fin función insertar_turno
    IngresoUsuarioServidorService.prototype.getTurnosFijos = function (data) {
        return this.http.post(this.rutasService_.rutas['getTurnos'], JSON.stringify(data));
    };
    IngresoUsuarioServidorService.prototype.actualizar_turnos = function (data, id, mes) {
        console.log(this.rutasService_.rutas['ActualizarTurnos']);
        data['id'] = id;
        data['mes'] = mes;
        return this.http.post(this.rutasService_.rutas['ActualizarTurnos'], JSON.stringify(data));
    };
    IngresoUsuarioServidorService.prototype.liberar_turno = function (data, id, mes) {
        data['id'] = id;
        data['mes'] = mes;
        return this.http.post(this.rutasService_.rutas['LiberarDefinitivoTurnos'], JSON.stringify(data));
    };
    IngresoUsuarioServidorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__["a" /* RutasservidorService */]])
    ], IngresoUsuarioServidorService);
    return IngresoUsuarioServidorService;
}());



/***/ }),

/***/ "./src/app/services/liberar-turnos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiberarTurnosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__ = __webpack_require__("./src/app/services/rutasservidor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LiberarTurnosService = /** @class */ (function () {
    function LiberarTurnosService(http, rutasService_) {
        this.http = http;
        this.rutasService_ = rutasService_;
    }
    LiberarTurnosService.prototype.liberar_turnos_servidor = function (mes, anio, id) {
        return this.http.get(this.rutasService_.rutas['LiberarTurnos'] + mes + '/' + anio + '/' + id);
    };
    LiberarTurnosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__["a" /* RutasservidorService */]])
    ], LiberarTurnosService);
    return LiberarTurnosService;
}());



/***/ }),

/***/ "./src/app/services/loginservices.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginservicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__ = __webpack_require__("./src/app/services/rutasservidor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginservicesService = /** @class */ (function () {
    function LoginservicesService(http, rutasService_) {
        this.http = http;
        this.rutasService_ = rutasService_;
    }
    LoginservicesService.prototype.login = function (data) {
        return this.http.post(this.rutasService_.rutas['login'], JSON.stringify(data));
    }; // Fin funcion login
    LoginservicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__["a" /* RutasservidorService */]])
    ], LoginservicesService);
    return LoginservicesService;
}());



/***/ }),

/***/ "./src/app/services/marcaje-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarcajeServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__ = __webpack_require__("./src/app/services/rutasservidor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarcajeServiceService = /** @class */ (function () {
    function MarcajeServiceService(http, rutasService_) {
        this.http = http;
        this.rutasService_ = rutasService_;
    }
    MarcajeServiceService.prototype.situacion_marcaje = function (id) {
        return this.http.post(this.rutasService_.rutas['SituacionMarcaje'], id);
    };
    MarcajeServiceService.prototype.realizarMarcaje = function (id) {
        return this.http.post(this.rutasService_.rutas['MarcarMovimiento'], id);
    };
    MarcajeServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__["a" /* RutasservidorService */]])
    ], MarcajeServiceService);
    return MarcajeServiceService;
}());



/***/ }),

/***/ "./src/app/services/perfil-trabajador-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilTrabajadorServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__ = __webpack_require__("./src/app/services/rutasservidor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilTrabajadorServiceService = /** @class */ (function () {
    function PerfilTrabajadorServiceService(rutas_, http_) {
        this.rutas_ = rutas_;
        this.http_ = http_;
        this.array_dias = [
            'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
        ];
    }
    PerfilTrabajadorServiceService.prototype.getPerfil = function (trabajador_id) {
        return this.http_.get(this.rutas_.rutas['perfil_trabajador'] + trabajador_id);
    }; // Fin funcion getPerfil
    PerfilTrabajadorServiceService.prototype.getStatusHorarios_por_consulta = function (trabajador_id, mes, anio) {
        return this.http_.get(this.rutas_.rutas['estatusTurnos'] + trabajador_id + '/' + mes + '/' + anio);
    }; // Fin funcion getStatusHorarios_por_consulta
    PerfilTrabajadorServiceService.prototype.getStatusHorarios_mes_actual = function (trabajador_id) {
        var _this = this;
        var date = new Date();
        this.http_.get(this.rutas_.rutas['estatusTurnos'] + trabajador_id + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()).toPromise().then(function (data) {
            _this.mes_en_curso = data;
        });
    }; // Fin funcion getStatusHorarios_mes_actual
    PerfilTrabajadorServiceService.prototype.getStatusHorarios_mes_proximo = function (trabajador_id) {
        var _this = this;
        var date = new Date();
        this.http_.get(this.rutas_.rutas['estatusTurnos'] + trabajador_id + '/' + (date.getMonth() + 2) + '/' + date.getFullYear()).toPromise().then(function (data) {
            _this.mes_proximo = data;
        });
    }; // Fin funcion getStatusHorarios_mes_proximo
    PerfilTrabajadorServiceService.prototype.getTurnosSinLiberacion = function (trabajador_id) {
        return this.http_.get(this.rutas_.rutas['TurnosSinLiberar'] + trabajador_id).toPromise();
    };
    PerfilTrabajadorServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__["a" /* RutasservidorService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PerfilTrabajadorServiceService);
    return PerfilTrabajadorServiceService;
}());



/***/ }),

/***/ "./src/app/services/planillaservices.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanillaservicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__ = __webpack_require__("./src/app/services/rutasservidor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlanillaservicesService = /** @class */ (function () {
    function PlanillaservicesService(http, rutasService_) {
        this.http = http;
        this.rutasService_ = rutasService_;
    }
    PlanillaservicesService.prototype.obtener_planilla = function (nombre_empresa) {
        return this.http.get(this.rutasService_.rutas['planilla'] + nombre_empresa);
    };
    PlanillaservicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__["a" /* RutasservidorService */]])
    ], PlanillaservicesService);
    return PlanillaservicesService;
}());



/***/ }),

/***/ "./src/app/services/rutasservidor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutasservidorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RutasservidorService = /** @class */ (function () {
    //  public urlBase:any = 'http://127.0.0.1:80/';
    function RutasservidorService() {
        this.urlBase = 'https://sister.cl/ServidorImagenesSister/';
        this.rutas = {
            'ingreso_empleados_datos_basicos': this.urlBase + 'api/Enrolamiento',
            'login': this.urlBase + 'api/login',
            'planilla': this.urlBase + 'api/planilla/',
            'perfil_trabajador': this.urlBase + 'perfil_trabajador/',
            'estatusTurnos': this.urlBase + 'estatusturnos/',
            'InsertTurnoVariable': this.urlBase + 'api/TurnosVariables/',
            'InsertTurnoFijo': this.urlBase + 'api/InsertTurnoFijo/',
            'updateTurnoFijo': this.urlBase + 'api/updateTurnoFijo/',
            'getTurnos': this.urlBase + 'api/getTurnos/',
            'TurnosSinLiberar': this.urlBase + 'TurnosSinLiberar/',
            'LiberarTurnos': this.urlBase + 'LiberarTurnos/',
            'ActualizarTurnos': this.urlBase + 'api/ActualizarTurnosVariables/',
            'LiberarDefinitivoTurnos': this.urlBase + 'api/LiberarDefinitivoTurnos/',
            'GuardarSucursal': this.urlBase + 'api/GuardarSucursal/',
            'SituacionMarcaje': this.urlBase + 'api/SituacionMarcaje/',
            'MarcarMovimiento': this.urlBase + 'api/MarcarMovimiento/',
            'ComisionAfp': this.urlBase + 'ComisionAfp/',
            'DiasLaboralesRealizados': this.urlBase + 'DiasLaboralesRealizados/',
            'DiasLaboralesCalendarizados': this.urlBase + 'DiasLaboralesCalendarizados/',
            'LiberarSueldo': this.urlBase + 'api/LiberarSueldo/',
            'ConfirmarEstadoSueldo': this.urlBase + 'api/ConfirmarEstadoSueldo/',
            'SueldosLiberados': this.urlBase + 'api/SueldosLiberados/',
            'SueldosLiberadosPorFecha': this.urlBase + 'api/SueldosLiberadosPorFecha/',
            'UpdateTurnoFijo': this.urlBase + 'api/UpdateTurnoFijo/',
            'GetAsistenciaMesAnterior': this.urlBase + 'api/GetAsistenciaMesAnterior/',
        };
    }
    RutasservidorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RutasservidorService);
    return RutasservidorService;
}());



/***/ }),

/***/ "./src/app/services/sueldos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SueldosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__ = __webpack_require__("./src/app/services/rutasservidor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SueldosService = /** @class */ (function () {
    // tslint:disable
    function SueldosService(http, rutasService_) {
        this.http = http;
        this.rutasService_ = rutasService_;
    }
    SueldosService.prototype.getComisionAfp = function (afp) {
        return this.http.get(this.rutasService_.rutas['ComisionAfp'] + afp);
    };
    SueldosService.prototype.getDiasTrabajados = function (id, mes, anio) {
        this.getFechas(mes, anio);
        return this.http.get(this.rutasService_.rutas['DiasLaboralesRealizados'] + id + '/' + this.mesReal + '/' + this.anioReal);
    };
    SueldosService.prototype.getDiasCalendarizados = function (id, mes, anio) {
        this.getFechas(mes, anio);
        return this.http.get(this.rutasService_.rutas['DiasLaboralesCalendarizados'] + id + '/' + this.mesReal + '/' + this.anioReal);
    };
    SueldosService.prototype.getDiasCalendarizadosFijos = function (id) {
        return this.http.post(this.rutasService_.rutas['GetAsistenciaMesAnterior'], { 'id': id });
    };
    SueldosService.prototype.getFechas = function (mes, anio) {
        switch (mes) {
            case 0:
                this.mesReal = 12;
                this.anioReal = anio - 1;
                break;
            default:
                this.mesReal = mes;
                this.anioReal = anio;
                break;
        }
    };
    SueldosService.prototype.InsertSueldo = function (data) {
        return this.http.post(this.rutasService_.rutas["LiberarSueldo"], JSON.stringify(data));
    };
    SueldosService.prototype.ConfirmacionSueldoLiberado = function (data) {
        return this.http.post(this.rutasService_.rutas["ConfirmarEstadoSueldo"], JSON.stringify(data));
    };
    SueldosService.prototype.getSueldosLiberados = function (data) {
        return this.http.post(this.rutasService_.rutas["SueldosLiberados"], data);
    };
    SueldosService.prototype.getSueldosLiberadosPorFecha = function (data) {
        return this.http.post(this.rutasService_.rutas["SueldosLiberadosPorFecha"], data);
    };
    SueldosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rutasservidor_service__["a" /* RutasservidorService */]])
    ], SueldosService);
    return SueldosService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map