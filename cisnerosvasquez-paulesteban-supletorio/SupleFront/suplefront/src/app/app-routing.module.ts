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
import {RutaCrearActorComponent} from "./Rutas/ruta-crear-actor/ruta-crear-actor.component";
import {RutaActorComponent} from "./Rutas/ruta-actor/ruta-actor.component";
import {RutaActualizarActorComponent} from "./Rutas/ruta-actualizar-actor/ruta-actualizar-actor.component";
import {RutaCrearPeliculaComponent} from "./Rutas/ruta-crear-pelicula/ruta-crear-pelicula.component";
import {AgregarHijosEventosComponent} from "./agregar-hijos-eventos/agregar-hijos-eventos.component";
import {RutaGestionFacturasComponent} from "./Rutas/ruta-gestion-facturas/ruta-gestion-facturas.component";
import {RutaFacturaComponent} from "./Rutas/ruta-factura/ruta-factura.component";
import {RutaListaFacturaComponent} from "./Rutas/ruta-lista-factura/ruta-lista-factura.component";
import {RutaAnadirItemComponent} from "./Rutas/ruta-anadir-item/ruta-anadir-item.component";

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
        path: 'crearevento',
        component: RutaCrearEventoComponent,
      },
      {
        // menu/gestion-usuarios
        path: ':idEventos',
        component: RutaEventoComponent,
      },
      {
        // menu/gestion-usuarios
        path: 'actualizar/:idEventos',
        component: AgregarHijosEventosComponent,
      },

    ]
  }, {
        // NOMBRE
        path: 'actor',

        component: RutaActorComponent,
        children:[
            {
                // menu/gestion-usuarios
                path: 'crearactor',
                component: RutaCrearActorComponent,
            },
            {
                // menu/gestion-usuarios
                path: 'crearpelicula',
                component: RutaCrearPeliculaComponent,
            },
            {
                // menu/gestion-usuarios
                path: ':idActor',
                component: RutaActualizarActorComponent,
            },

        ]
    },
  {
    // NOMBRE
    path: 'gestionfacturas',
    component: RutaGestionFacturasComponent,
    // COMPONENTE
    children:[
      {
        // menu/gestion-usuarios
        path: ':idFactura',
        component: RutaFacturaComponent,
      },

    ]
  },
  {
    // NOMBRE
    path: 'listafacturas',
    component: RutaListaFacturaComponent,
    // COMPONENTE
    children:[
      {
        // menu/gestion-usuarios
        path: ':idFactura',
        component: RutaFacturaComponent,
      },

    ]
  },
  {
    // NOMBRE
    path: 'anadiritem/:idFactura',
    pathMatch: 'full',
    component: RutaAnadirItemComponent
    // COMPONENTE
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
