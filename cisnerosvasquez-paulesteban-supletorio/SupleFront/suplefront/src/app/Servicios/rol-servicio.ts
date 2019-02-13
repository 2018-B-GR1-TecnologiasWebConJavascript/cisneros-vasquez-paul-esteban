

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from "../../environments/environment";
import { Rol } from '../Interfaces/Rol';
import { Usuario } from '../Interfaces/Usuario';


@Injectable()
export class RolServicio {
  nombreModelo = '/Rol';
  constructor(private readonly _httpClient: HttpClient) { }

  findAll(): Observable <Rol[]> {
    const convenios$ = this._httpClient.get(environment.url + this.nombreModelo)
      .pipe(map(respuesta => {
        return <Rol[]> respuesta
      }));
    return convenios$;
  }

   buscarRoles(arreglo: Usuario[]) {
    const respuestaRoles = [];
    return arreglo
        .forEach(
            (usario) => {
                usario
                    .roles
                    .forEach(
                        (rol) => {
                            respuestaRoles.push({
                                nombre: rol.nombre
                            });
                        }
                    );
            }
        );
}

}
