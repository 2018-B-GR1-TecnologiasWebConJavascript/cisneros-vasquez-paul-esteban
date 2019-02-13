import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaGestionUsuarioComponent } from './Rutas/ruta-gestion-usuario/ruta-gestion-usuario.component';
import { RutaUsuarioComponent } from './Rutas/ruta-usuario/ruta-usuario.component';
import { RutaLoginComponent } from './Rutas/ruta-login/ruta-login.component';
import { RutaRegistroComponent } from './Rutas/ruta-registro/ruta-registro.component';
import { RutaGestionEventosComponent } from './Rutas/ruta-gestion-eventos/ruta-gestion-eventos.component';
import { RutaEventoComponent } from './Rutas/ruta-evento/ruta-evento.component';
import { RutaInicioComponent } from './Rutas/ruta-inicio/ruta-inicio.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import { LoginComponenteComponent } from './Componentes/login-componente/login-componente.component';
import {AuthServiceService} from "./Servicios/auth-service.service";
import { IsLogin } from './Servicios/Guards/is-login';
import { EsAdministrador } from './Servicios/Guards/es-administrador';
import {UsuarioServicio} from "./Servicios/usuario-servicio";
import { FormularioUsuarioComponent } from './Componentes/formulario-usuario/formulario-usuario.component';
import {MessageModule, MessagesModule} from "primeng/primeng";
import {EventoServicio} from "./Servicios/evento-servicio";
import { ActoresComponent } from './Componentes/actores/actores.component';
import { PeliculasComponent } from './Componentes/peliculas/peliculas.component';
import {ActorServicio} from "./Servicios/actor-servicio";
import {PeliculaServicio} from "./Servicios/pelicula-servicio";
import { RolServicio } from './Servicios/rol-servicio';
import { RutaCrearEventoComponent } from './Rutas/ruta-crear-evento/ruta-crear-evento.component';
import { RutaCrearActorComponent } from './Rutas/ruta-crear-actor/ruta-crear-actor.component';
@NgModule({
  declarations: [
    AppComponent,
    RutaGestionUsuarioComponent,
    RutaUsuarioComponent,
    RutaLoginComponent,
    RutaRegistroComponent,
    RutaGestionEventosComponent,
    RutaEventoComponent,
    RutaInicioComponent,
    LoginComponenteComponent,
    FormularioUsuarioComponent,
    ActoresComponent,
    PeliculasComponent,
    RutaCrearEventoComponent,
    RutaCrearActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // Acceso a un servicio HttpClient
    FormsModule,
    TableModule,
    MessagesModule,
    MessageModule

  ],
  providers: [AuthServiceService,IsLogin,EsAdministrador,RolServicio,UsuarioServicio,EventoServicio,ActorServicio,PeliculaServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
