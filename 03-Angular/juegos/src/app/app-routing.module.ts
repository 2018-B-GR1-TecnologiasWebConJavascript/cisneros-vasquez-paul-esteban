import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";
import {Ruta404Component} from "./rutas/ruta404/ruta404.component";
import {RutaGestionUsuarioComponent} from "./rutas/ruta-gestion-usuario/ruta-gestion-usuario.component";
import {RutaGestionProductosComponent} from "./rutas/ruta-gestion-productos/ruta-gestion-productos.component";

const routes: Routes = [{
  //Nombre

    path: "",
  pathMatch: "full",
    redirectTo: "inicio"
  },{
  path: "inicio",
  component: RutaInicioComponent
}, {

  path: "menu",
  component: RutaMenuComponent,
  children: [{
    //Nombre

    path: "",
    pathMatch: "full",
    redirectTo: "gestion-producto"
  },
    {
      path: 'gestion-usuario',
      component: RutaGestionUsuarioComponent
    },
    {
      path: 'gestion-producto',
      component: RutaGestionProductosComponent
    }
  ]
}, {

  path: "login", component: RutaLoginComponent
}, {

  path: "perfil", component: RutaPerfilComponent
}, {
  path: "no-encontrado", component: Ruta404Component
},
  {
    path: '**',
    redirectTo: "no-encontrado"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
