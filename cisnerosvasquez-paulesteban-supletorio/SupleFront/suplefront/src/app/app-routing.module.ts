import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaInicioComponent } from './Rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './Rutas/ruta-login/ruta-login.component';
import { RutaRegistroComponent } from './Rutas/ruta-registro/ruta-registro.component';
import { RutaGestionUsuarioComponent } from './Rutas/ruta-gestion-usuario/ruta-gestion-usuario.component';
import { RutaGestionEventosComponent } from './Rutas/ruta-gestion-eventos/ruta-gestion-eventos.component';
import { RutaUsuarioComponent } from './Rutas/ruta-usuario/ruta-usuario.component';
import { RutaEventoComponent } from './Rutas/ruta-evento/ruta-evento.component';
import { RutaCrearEventoComponent } from './Rutas/ruta-crear-evento/ruta-crear-evento.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    // NOMBRE
    path: 'inicio',
    component: RutaInicioComponent
    // COMPONENTE
  },
  {
    // NOMBRE
    path: 'login',
    pathMatch: 'full',
    component: RutaLoginComponent
    // COMPONENTE
  },
  {
    // NOMBRE
    path: 'registro',
    component: RutaRegistroComponent
    // COMPONENTE
  },{
    // NOMBRE
    path: 'gestionusuarios',

    component: RutaGestionUsuarioComponent,
    // COMPONENTE,
    children:[
      {
        // menu/gestion-usuarios
        path: ':idUsuario',
        component: RutaUsuarioComponent,
      },

    ]
  },
  {
    // NOMBRE
    path: 'gestioneventos',
    component: RutaGestionEventosComponent,
    // COMPONENTE
    children:[
      {
        // menu/gestion-usuarios
        path: 'gestioneventos/crearevento',
        component: RutaCrearEventoComponent,
      },
      {
        // menu/gestion-usuarios
        path: ':idEvento',
        component: RutaEventoComponent,
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
