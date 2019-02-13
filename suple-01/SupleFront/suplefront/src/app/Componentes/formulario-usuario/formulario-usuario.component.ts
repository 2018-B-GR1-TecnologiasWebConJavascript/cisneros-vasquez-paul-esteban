import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { RolServicio } from 'src/app/Servicios/rol-servicio';
import { UsuarioServicio } from 'src/app/Servicios/usuario-servicio';
import { Usuario } from 'src/app/Interfaces/Usuario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {
  cbxrols: any=[];
  busquedaU: Usuario[] = [];
  nombreU: string;
  correoU: string;
  passwordU: string;
  idrol: number;
  //BrowRoles: string;
  //@Input()
  //nombre: string;
  @Output()
  formularioValido = new EventEmitter();
  constructor(private readonly _rolservicio: RolServicio,
              private readonly _usuarioservicio: UsuarioServicio) { }

  ngOnInit() {
    //this.nombreU = this.nombre;
    const usuarios$ = this._rolservicio.findAll();
    usuarios$.subscribe((usuarios: Usuario[]) => {
      this.cbxrols=usuarios;

    });
    //this.cbxrols= this.busquedaU
  }
  emitirFormularioValido(formularioUsuario: NgForm) {
    const objetoUsuario = {
      nombre: this.nombreU,
      correo: this.correoU,
      password: this.passwordU,
      idrolU:((this.cbxrols.findIndex(rol => rol.nombre === formularioUsuario.value.BrowRoles)+1))

      //rol: this.BrowRoles
    };
    //console.log((this.cbxrols.findIndex(rol => rol.nombre === formularioUsuario.value.BrowRoles)+1))
    this.formularioValido.emit(objetoUsuario);
  }
}
