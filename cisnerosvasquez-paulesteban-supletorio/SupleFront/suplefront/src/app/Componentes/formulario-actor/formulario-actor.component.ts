import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-formulario-actor',
  templateUrl: './formulario-actor.component.html',
  styleUrls: ['./formulario-actor.component.css']
})
export class FormularioActorComponent implements OnInit {
  cbxrols: any=[true,false];
  nombresA : string;
  apellidosA : string;
  fechaA : string;
  numeropeliculasA  : number;
  @Output()
  formularioValido = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  emitirFormularioValido(formularioUsuario: NgForm) {
    const objetoUsuario = {
      nombres : this.nombresA,
      apellidos : this.apellidosA,
    fechanacimiento : this.fechaA,
    numeropeliculas : this.numeropeliculasA,
    retirado : (this.cbxrols.indexOf( formularioUsuario.value.BrowRetirado)),


      //rol: this.BrowRoles
    };
    //console.log((this.cbxrols.findIndex(rol => rol.nombre === formularioUsuario.value.BrowRoles)+1))
    this.formularioValido.emit(objetoUsuario);
  }
}
