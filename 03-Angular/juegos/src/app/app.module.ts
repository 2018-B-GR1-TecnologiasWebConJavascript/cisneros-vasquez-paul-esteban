import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { RutaGestionUsuarioComponent } from './rutas/ruta-gestion-usuario/ruta-gestion-usuario.component';
import { RutaGestionProductosComponent } from './rutas/ruta-gestion-productos/ruta-gestion-productos.component';
import {UsuarioServiceService} from "./servicios/usuario-service.service";
import { RutaVerDetalleUsuarioComponent } from './rutas/ruta-ver-detalle-usuario/ruta-ver-detalle-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    Ruta404Component,
    RutaLoginComponent,
    RutaPerfilComponent,
    RutaMenuComponent,
    RutaGestionUsuarioComponent,
    RutaGestionProductosComponent,
    RutaVerDetalleUsuarioComponent
  ],// Components
  imports: [
    BrowserModule,
    AppRoutingModule
  ],// modulos
  providers: [UsuarioServiceService],// Servicios
  bootstrap: [AppComponent] // componente principar
})
export class AppModule { }
