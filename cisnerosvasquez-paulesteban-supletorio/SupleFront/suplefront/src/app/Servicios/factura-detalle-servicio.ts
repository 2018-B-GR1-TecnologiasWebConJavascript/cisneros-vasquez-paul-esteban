
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from "../../environments/environment";
import {FacturaDetalle} from "../Interfaces/FacturaDetalle";




@Injectable()
export class FacturaDetalleServicio {
  nombreModelo = '/FacturaDetalle';

  constructor(private readonly _httpClient: HttpClient) { }

  findAll(): Observable <FacturaDetalle[]> {
    const convenios$ = this._httpClient.get(environment.url + this.nombreModelo)
      .pipe(map(respuesta => {
        return <FacturaDetalle[]> respuesta
      }));
    return convenios$;
  }
  create(nombre: string,
         fecha: string,

  ): Observable<FacturaDetalle> {

    const objetoAGuardar = {
      nombre: nombre,
      fecha: fecha,

    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <FacturaDetalle> r)); // Castear
  }
  findOneById(id: number | string): Observable<FacturaDetalle> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(r => <FacturaDetalle> r)); // Castear
  }
  eliminarfacturadetalle(id:string|number): Observable<FacturaDetalle>{

    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <FacturaDetalle> r)); // Castear




  }
  createx(idEvento: number,
          idPelicula: number,
          preciobase: number,
          cantidad: number,
  ): Observable<FacturaDetalle> {

    const objetoAGuardar = {
      idFacturaCabecera: idEvento,
      idpelicula: idPelicula,
      precio: preciobase,
      cantidad: cantidad,
      total: (cantidad*preciobase),
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <FacturaDetalle> r)); // Castear
  }
}

