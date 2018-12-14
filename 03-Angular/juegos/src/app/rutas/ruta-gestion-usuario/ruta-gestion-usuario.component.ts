import { Component, OnInit } from '@angular/core';
import {UsuarioServiceService} from "../../servicios/usuario-service.service";

@Component({
  selector: 'app-ruta-gestion-usuario',
  templateUrl: './ruta-gestion-usuario.component.html',
  styleUrls: ['./ruta-gestion-usuario.component.scss']
})
export class RutaGestionUsuarioComponent implements OnInit {
  usuarios=[];
//inyeccion de dependencias
  constructor(
    private readonly _usuarioService:UsuarioServiceService
  ) { }

  ngOnInit() {
    this.usuarios = this._usuarioService.usuarios;

  }

  eliminar(usuario){

    const indiceUsuarioEliminar = this._usuarioService.eliminar(usuario.id);
    console.log(indiceUsuarioEliminar);

  }
}



interface Usuario {
  nombre?: string;
  id?: number
}
