
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from "../../environments/environment";
import {EventosPorPelicula} from "../Interfaces/EventosPorPelicula";

@Injectable()
export class EventopeliculaServicio {
  nombreModelo = '/EventosPorPelicula';
  constructor(private readonly _httpClient: HttpClient) { }
  findAll(): Observable <EventosPorPelicula[]> {
    const convenios$ = this._httpClient.get(environment.url + this.nombreModelo)
      .pipe(map(respuesta => {
        return <EventosPorPelicula[]> respuesta
      }));
    return convenios$;
  }
  delete(id: number): Observable<EventosPorPelicula> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <EventosPorPelicula> r)); // Castear
  }
  eliminareventopelicula(idPelicula: number|string,idEvento: number|string): Observable<EventosPorPelicula> {

    const url = environment.url + '/EventosPorPelicula/eliminareventopelicula';

    return this._httpClient
      .post(url, {
        idPelicula: idPelicula,
        idEvento: idEvento
      })
      .pipe(map(r => <EventosPorPelicula>r)); // Casteo

  }

  create(idPelicula: number|string,idEvento: number|string,
         preciobase: number,
  ): Observable<EventosPorPelicula> {

    const objetoAGuardar = {
      idPelicula: idPelicula,
      idEvento: idEvento,
      preciobase: preciobase,
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <EventosPorPelicula> r)); // Castear
  }

}
