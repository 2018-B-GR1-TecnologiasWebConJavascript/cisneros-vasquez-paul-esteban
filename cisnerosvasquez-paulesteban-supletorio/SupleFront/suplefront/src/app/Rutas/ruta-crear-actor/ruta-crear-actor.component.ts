import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ActorServicio} from "../../Servicios/actor-servicio";
import {Usuario} from "../../Interfaces/Usuario";
import {Actor} from "../../Interfaces/Actor";

@Component({
  selector: 'app-ruta-crear-actor',
  templateUrl: './ruta-crear-actor.component.html',
  styleUrls: ['./ruta-crear-actor.component.css']
})
export class RutaCrearActorComponent implements OnInit {

  constructor(private readonly _actorservicio: ActorServicio,private readonly _router: Router) { }

  ngOnInit() {
  }
    CrearActor(ActorObjeto) {

        // if (this.nombreContieneA(razaObjeto.nombre.toString())) {
        const crearRaza$ = this._actorservicio
            .create(
                ActorObjeto.nombres,
                ActorObjeto.apellidos,
                ActorObjeto.fechanacimiento,
                ActorObjeto.numeropeliculas,
            //RolObjeto.retirado,
            );

        crearRaza$
            .subscribe(
                (actor: Actor) => {
                    console.log('Usuario');
                    alert(`Actor Creado: ${actor.nombres}`);
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
