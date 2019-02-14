import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PeliculaServicio} from "../../Servicios/pelicula-servicio";
import {Pelicula} from "../../Interfaces/Pelicula";



@Component({
  selector: 'app-ruta-crear-pelicula',
  templateUrl: './ruta-crear-pelicula.component.html',
  styleUrls: ['./ruta-crear-pelicula.component.css']
})
export class RutaCrearPeliculaComponent implements OnInit {

  constructor(private readonly _peliculaservicio: PeliculaServicio,private readonly _router: Router) { }

  ngOnInit() {
  }
  CrearPelicula(RolObjeto) {

    // if (this.nombreContieneA(razaObjeto.nombre.toString())) {
    const crearRaza$ = this._peliculaservicio
      .create(
        RolObjeto.nombre,
        RolObjeto.actoresprincipales,
        RolObjeto.aniolanzamiento ,
        RolObjeto.rating,
        RolObjeto.sinopsis,
        //RolObjeto.retirado,
      );

    crearRaza$
      .subscribe(
        (pelicula: Pelicula) => {
          console.log('Pelicula creada');
          alert(`Pelicula Creado: ${pelicula.nombre}`);
          this._router.navigate(['/gestioneventos']);



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
