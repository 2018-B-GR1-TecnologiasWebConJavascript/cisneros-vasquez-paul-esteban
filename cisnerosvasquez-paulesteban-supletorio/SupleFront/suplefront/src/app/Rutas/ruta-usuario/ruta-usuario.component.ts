import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../Interfaces/Usuario";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioServicio} from "../../Servicios/usuario-servicio";
import { Rol } from 'src/app/Interfaces/Rol';
import { RolServicio } from 'src/app/Servicios/rol-servicio';

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.css']
})
export class RutaUsuarioComponent implements OnInit {
  UsuarioAActualizar: Usuario;
  // roles = [{nombre:"Administrador", id:1}, {nombre:"Usuario",id:2}]
  roles : any= [];
  constructor(private readonly _activatedRoute: ActivatedRoute,
              private readonly _usuarioservicio: UsuarioServicio,
              private readonly _rolservicio: RolServicio,
              private readonly _router: Router) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    /*
        const usuariosx$ = this._usuarioservicio.findAll();
        usuariosx$.subscribe((usuariosx: Usuario[]) => {
          const usuariosrolx = usuariosx
            .forEach(
              (usario) => {
                usario
                  .roles
                  .forEach(
                    (rol) => {
                      this.roles.push({
                        nombre: rol.nombre
                      });
                    }
                  );
              }
            );

        });*/





    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaActualizarUsuario) => {
          const raza$ = this._usuarioservicio
            .findOneById(parametros.idUsuario);

          raza$
            .subscribe(
              (usuario: Usuario) => {
                this.roles = [];
                this.UsuarioAActualizar = usuario;
                const usuariosrolx = usuario.roles
                  .forEach(
                    (rol) => {

                      this.roles.push({
                        nombre: rol.nombre,
                        id: rol.id
                      });

                    }
                  );

              },
              (error) => {
                console.error('Error: ', error);
              }
            );

        }
      );
  }
  buscarRaza(idRaza) {
    const raza$ = this._usuarioservicio
      .findOneById(idRaza);

    raza$
      .subscribe(
        (raza: Usuario) => {
          console.log(raza);
        },
        (error) => {
          console.error('Error: ', error);
        }
      );
  }
  onClickMe(id:number) {
    console.log(this.UsuarioAActualizar.id);
    const eliminarRol$ = this._usuarioservicio.eliminarrol(id,this.UsuarioAActualizar.id);
    eliminarRol$
      .subscribe(
        (usuario: Usuario) => {
          console.log('Roeliminado');
          alert('Rol eliminado para el Usuario' + usuario.nombre);
         // const url = ['/gestionusuarios'];
          //this._router.navigate(url);
          this.roles.splice(this.roles.findIndex(rol => rol.id === id), 1);
        },
        (error) => {
          console.error('Error: ', error);
        }
      );
  }

  actualizarUsuario(objetoUsuario) {

    objetoUsuario.id = this.UsuarioAActualizar.id;

    const razaActualizada$ = this._usuarioservicio
      .updateOneById(objetoUsuario);

    razaActualizada$
      .subscribe(
        (usuarioActualizado: Usuario) => {
          const crearRol$ = this._usuarioservicio.crearRol(objetoUsuario.idrolU,usuarioActualizado.id);
          console.log(objetoUsuario.idrolU);
          console.log(usuarioActualizado.id);

          crearRol$
            .subscribe(
              (usuario: Usuario) => {
                console.log('Rolcreado');


              },
              (error) => {
                console.error('Error: ', error);
              }
            );
          const url = ['/gestionusuarios'];

          alert('Raza actualizada ' + usuarioActualizado.nombre);

          this._router.navigate(url);
        },
        (error) => {
          console.error('Error', error);
        }
      );

  }
}

interface ParametrosRutaActualizarUsuario {
  idUsuario: string;
}
