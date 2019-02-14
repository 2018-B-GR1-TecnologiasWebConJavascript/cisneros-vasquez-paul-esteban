
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from "../../environments/environment";
import {Actor} from "../Interfaces/Actor";
import {AuthServiceService} from "./auth-service.service";


@Injectable()
export class ActorServicio {
  nombreModelo = '/Actor';
  constructor(private readonly _httpClient: HttpClient,
              private readonly _authService: AuthServiceService) { }

  findAll(): Observable <Actor[]> {
    const convenios$ = this._httpClient.get(environment.url + this.nombreModelo)
      .pipe(map(respuesta => {
        return <Actor[]> respuesta
      }));
    return convenios$;
  }
  create(nombres: string,
         apellidos: string,
         fechanacimiento: string,
         numeropeliculas: number,
      //   retirado: boolean,
  ): Observable<Actor> {

    const objetoAGuardar = {
      nombres: nombres,
      apellidos: apellidos,
      fechanacimiento: fechanacimiento,
      numeropeliculas: numeropeliculas,
      retirado: false,
      actores: this._authService.usuario.id,

    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <Actor> r)); // Castear
  }

}

