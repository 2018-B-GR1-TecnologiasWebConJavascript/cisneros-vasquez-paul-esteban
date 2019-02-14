import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  nombreP : string;

  actoresprincipalesP: string;
  fechaP: string;
  aniolanzamientoP : number;
  ratingP: number;
  sinopsisP: string;
  @Output()
  formularioValido = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  emitirFormularioValido(formularioPelicula: NgForm) {
    const objetoUsuario = {
      nombre : this.nombreP,
      actoresprincipales : this.actoresprincipalesP,
      fecha : this.fechaP,
      aniolanzamiento : this.aniolanzamientoP,
      rating : this.ratingP,
      sinopsis : this.sinopsisP,


      //rol: this.BrowRoles
    };
    //console.log((this.cbxrols.findIndex(rol => rol.nombre === formularioUsuario.value.BrowRoles)+1))
    this.formularioValido.emit(objetoUsuario);
  }
}
