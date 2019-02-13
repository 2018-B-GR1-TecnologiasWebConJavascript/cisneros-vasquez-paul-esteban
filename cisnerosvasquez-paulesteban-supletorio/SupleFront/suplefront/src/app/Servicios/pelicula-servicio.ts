
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from "../../environments/environment";
import {Pelicula} from "../Interfaces/Pelicula";

@Injectable()
export class PeliculaServicio {
  nombreModelo = '/Pelicula';
  constructor(private readonly _httpClient: HttpClient) { }

  findAll(): Observable <Pelicula[]> {
    const convenios$ = this._httpClient.get(environment.url + this.nombreModelo)
      .pipe(map(respuesta => {
        return <Pelicula[]> respuesta
      }));
    return convenios$;
  }

}
