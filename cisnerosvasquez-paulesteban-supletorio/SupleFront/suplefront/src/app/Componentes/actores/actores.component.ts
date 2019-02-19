import {Component, Input, OnInit} from '@angular/core';
import {AuthServiceService} from "../../Servicios/auth-service.service";
import {Usuario} from "../../Interfaces/Usuario";
import {Actor} from "../../Interfaces/Actor";
import {ActorServicio} from "../../Servicios/actor-servicio";
import {Router} from "@angular/router";

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {
  @Input()
  id: number;
  @Input()
  nombres: string;
  @Input()
  apellidos : string;
  @Input()
  fechanacimiento : string;
  @Input()
  numeropeliculas : number;
  @Input()
  retirado : boolean;

  constructor(private readonly _authService: AuthServiceService,
              private readonly _actorservicio: ActorServicio,
              private readonly _router: Router) { }

  ngOnInit() {
  }
  borrar(id:string|number){
    const razaEliminada$ = this._actorservicio.delete(id);

    razaEliminada$
      .subscribe(
        (usuarioEliminada: Actor) => {

          this._router.navigate(['/inicio']);


        },
        (error) => {
          console.error('Error', error);
        }
      );

  }
}
