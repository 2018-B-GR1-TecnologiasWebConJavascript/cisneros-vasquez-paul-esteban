import { Component, OnInit } from '@angular/core';
import {ActorServicio} from "../../Servicios/actor-servicio";
import {Actor} from "../../Interfaces/Actor";
import {Pelicula} from "../../Interfaces/Pelicula";
import {PeliculaServicio} from "../../Servicios/pelicula-servicio";


@Component({
  selector: 'app-ruta-evento',
  templateUrl: './ruta-evento.component.html',
  styleUrls: ['./ruta-evento.component.css']
})
export class RutaEventoComponent implements OnInit {
  imagenes:Actor[]= [];
  imagenes2:Pelicula[]= [];
  constructor(private readonly _actorservicio: ActorServicio,
              private readonly _peliculaservicio: PeliculaServicio) { }

  ngOnInit() {
    const actor$ = this._actorservicio.findAll();
    actor$.subscribe((actor: Actor[]) => {
      this.imagenes=actor;
    });
    const pelicula$ = this._peliculaservicio.findAll();
    pelicula$.subscribe((pelicula: Pelicula[]) => {
      this.imagenes2=pelicula;
    });

  }


}
