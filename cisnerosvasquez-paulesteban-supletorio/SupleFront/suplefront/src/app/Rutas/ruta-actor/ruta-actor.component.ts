import { Component, OnInit } from '@angular/core';
import {ActorServicio} from "../../Servicios/actor-servicio";
import {AuthServiceService} from "../../Servicios/auth-service.service";

@Component({
  selector: 'app-ruta-actor',
  templateUrl: './ruta-actor.component.html',
  styleUrls: ['./ruta-actor.component.css']
})
export class RutaActorComponent implements OnInit {

  constructor(private readonly _authService: AuthServiceService,
              private readonly _actorservicio: ActorServicio) { }

  ngOnInit() {
  }

}
