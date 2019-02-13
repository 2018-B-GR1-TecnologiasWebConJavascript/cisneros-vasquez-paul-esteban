import { Component, OnInit } from '@angular/core';
import {UsuarioServicio} from "../../Servicios/usuario-servicio";
import {Usuario} from "../../Interfaces/Usuario";
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-registro',
  templateUrl: './ruta-registro.component.html',
  styleUrls: ['./ruta-registro.component.css']
})
export class RutaRegistroComponent implements OnInit {

  constructor(private readonly _usuarioservicio: UsuarioServicio,private readonly _router: Router) { }


  ngOnInit() {
  }
  CrearUsuario(usuarioObjeto) {

    // if (this.nombreContieneA(razaObjeto.nombre.toString())) {
    const crearRaza$ = this._usuarioservicio
      .create(
        usuarioObjeto.nombre,
        usuarioObjeto.correo,
        usuarioObjeto.password,
        "1995-25-01",
      );

    crearRaza$
      .subscribe(
        (usuario: Usuario) => {
          console.log('Usuario');
          alert(`Usuario Creado: ${usuario.nombre}`);
          const crearRol$ = this._usuarioservicio.crearRol(usuarioObjeto.idrolU,usuario.id);
          console.log(usuarioObjeto.idrolU);
          console.log(usuario.id);

          crearRol$
            .subscribe(
              (usuario: Usuario) => {
                console.log('Rolcreado');
                this._router.navigate(['/inicio']);
              },
              (error) => {
                console.error('Error: ', error);
              }
            );
        },
        (error) => {
          console.error('Error: ', error);
        }
      );

    // } else {
    //   alert('ERROR, No contiene una letra A');
    // }
  }

}
