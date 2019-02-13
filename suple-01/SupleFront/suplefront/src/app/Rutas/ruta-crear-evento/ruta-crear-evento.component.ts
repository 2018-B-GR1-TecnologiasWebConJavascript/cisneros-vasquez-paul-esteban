import { Component, OnInit } from '@angular/core';
import { EventoServicio } from 'src/app/Servicios/evento-servicio';
import { Evento } from 'src/app/Interfaces/Evento';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ruta-crear-evento',
  templateUrl: './ruta-crear-evento.component.html',
  styleUrls: ['./ruta-crear-evento.component.css']
})
export class RutaCrearEventoComponent implements OnInit {

  constructor(private readonly _eventoservicio : EventoServicio) { }

  ngOnInit() {

  }
  CrearUsuario(formularioUsuario: NgForm) {

    // if (this.nombreContieneA(razaObjeto.nombre.toString())) {
    const crearRaza$ = this._eventoservicio
      .create(
        formularioUsuario.value.nombre,
        formularioUsuario.value.fecha,
      );

    crearRaza$
      .subscribe(
        (evento: Evento) => {
          console.log('Evento');
          alert(`Usuario Creado: ${evento.nombre}`);

        },
        (error) => {
          console.error('Error: ', error);
          alert("Error al crear")
        }
      );

    // } else {
    //   alert('ERROR, No contiene una letra A');
    // }
  }

}
