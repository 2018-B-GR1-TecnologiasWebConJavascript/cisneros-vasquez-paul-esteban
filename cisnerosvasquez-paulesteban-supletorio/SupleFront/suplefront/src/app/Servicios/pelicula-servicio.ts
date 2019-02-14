
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from "../../environments/environment";
import {Pelicula} from "../Interfaces/Pelicula";

import {AuthServiceService} from "./auth-service.service";

@Injectable()
export class PeliculaServicio {
  nombreModelo = '/Pelicula';
  constructor(private readonly _httpClient: HttpClient,
              private readonly _authService: AuthServiceService) { }

  findAll(): Observable <Pelicula[]> {
    const convenios$ = this._httpClient.get(environment.url + this.nombreModelo)
      .pipe(map(respuesta => {
        return <Pelicula[]> respuesta
      }));
    return convenios$;
  }
  create(
  nombre: string,
  actoresprincipales: string,
  aniolanzamiento : number,
  rating: number,
  sinopsis : string,
         //   retirado: boolean,
  ): Observable<Pelicula> {

    const objetoAGuardar = {
      nombre: nombre,
      actoresprincipales: actoresprincipales,
      aniolanzamiento : aniolanzamiento,
      rating: rating,
      sinopsis : sinopsis,
      actores: this._authService.usuario.id,

    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <Pelicula> r)); // Castear
  }

}
