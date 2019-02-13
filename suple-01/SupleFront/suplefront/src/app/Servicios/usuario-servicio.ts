
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Usuario} from "../Interfaces/Usuario";
import {environment} from "../../environments/environment";

@Injectable()
export class UsuarioServicio {
  nombreModelo = '/Usuario';
  constructor(private readonly _httpClient: HttpClient) { }

  findAll(): Observable <Usuario[]> {
    const convenios$ = this._httpClient.get(environment.url + this.nombreModelo)
      .pipe(map(respuesta => {
        return <Usuario[]> respuesta
      }));
    return convenios$;
  }
  create(nombre: string,
         correo: string,
         password: string,
         fechanacimiento: string,
         ): Observable<Usuario> {

    const objetoAGuardar = {
      nombre: nombre,
      correo: correo,
      password: password,
      fechanacimiento: fechanacimiento,
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <Usuario> r)); // Castear
  }

  crearRol(idrol: number,idusuario: number,
    ): Observable<Usuario> {

const objetoAGuardar = {
  idusuario: idusuario,
  idrol: idrol,

};


const url = environment.url + this.nombreModelo + '/crearol';

return this._httpClient
 .post(url, objetoAGuardar)
 .pipe(map(r => <Usuario> r)); // Castear
}
eliminarrol(idrol: number,idusuario: number,
  ): Observable<Usuario> {

const objetoAGuardar = {
idusuario: idusuario,
idrol: idrol,

};


const url = environment.url + this.nombreModelo + '/eliminarrol';

return this._httpClient
.post(url, objetoAGuardar)
.pipe(map(r => <Usuario> r)); // Castear
}

  delete(id: number): Observable<Usuario> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Usuario> r)); // Castear
  }
  findOneById(id: number | string): Observable<Usuario> {
    const url = environment.url + this.nombreModelo
      + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(map(r => <Usuario> r)); // Castear
  }
  findOneByRolId(id: number | string

  ): Observable<Usuario> {

    const objetoAGuardar = {
      idusuario: id,

    };

    const url = environment.url + this.nombreModelo + '/buscarRol';

    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => <Usuario> r)); // Castear
  }

  updateOneById(usuario: Usuario) {

    const url = environment.url + this.nombreModelo
      + '/' + usuario.id;

    return this._httpClient
      .put(url, usuario)
      .pipe(map(r => <Usuario> r)); // Castear

  }
}

