
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from "../../environments/environment";
import {FacturaCabecera} from "../Interfaces/FacturaCabecera";
import {Usuario} from "../Interfaces/Usuario";


@Injectable()
export class FacturaCabeceraServicio {
  nombreModelo = '/FacturaCabecera';

  constructor(private readonly _httpClient: HttpClient) { }

  findAll(): Observable <FacturaCabecera[]> {
    const convenios$ = this._httpClient.get(environment.url + this.nombreModelo)
      .pipe(map(respuesta => {
        return <FacturaCabecera[]> respuesta
      }));
    return convenios$;
  }
  create(nombre: string,
         fecha: string,

  ): Observable<FacturaCabecera> {

    const objetoAGuardar = {
      nombre: nombre,
      fecha: fecha,

    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <FacturaCabecera> r)); // Castear
  }
  buscarUsuariofacturas(idusuario: string|number): Observable<Usuario> {

    const url = environment.url + '/Usuario/buscarUsuariofacturas';

    return this._httpClient
      .post(url, {
        idusuario: idusuario,
      })
      .pipe(map(r => <Usuario>r)); // Casteo

  }
  findOneById(id: number | string): Observable<FacturaCabecera> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(r => <FacturaCabecera> r)); // Castear
  }
  updateOneById(factura: FacturaCabecera) {

    const url = environment.url + this.nombreModelo
      + '/' + factura.id;

    return this._httpClient
      .put(url, factura)
      .pipe(map(r => <FacturaCabecera> r)); // Castear

  }

}

