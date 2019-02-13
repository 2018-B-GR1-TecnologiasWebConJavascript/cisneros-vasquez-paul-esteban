
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from "../../environments/environment";
import {Actor} from "../Interfaces/Actor";

@Injectable()
export class ActorServicio {
  nombreModelo = '/Actor';
  constructor(private readonly _httpClient: HttpClient) { }

  findAll(): Observable <Actor[]> {
    const convenios$ = this._httpClient.get(environment.url + this.nombreModelo)
      .pipe(map(respuesta => {
        return <Actor[]> respuesta
      }));
    return convenios$;
  }

}

