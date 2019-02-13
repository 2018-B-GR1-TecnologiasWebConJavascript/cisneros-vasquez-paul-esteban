import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {find, map, takeWhile} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {Usuario} from '../Interfaces/Usuario';
@Injectable()
export class AuthServiceService {
  usuario: any = {

  };
  UsuariosTotales = [];
  constructor(private readonly _httpClient: HttpClient) { }
  login(nombre: string,
        password: string): Observable<Usuario> {

    const url = environment.url + '/Usuario/login';

    return this._httpClient
      .post(url, {
        nombre: nombre,
        password: password
      })
      .pipe(map(r => <Usuario>r)); // Casteo

  }
  obtenertodosUsuarios() {
    const convenios$ = this._httpClient.get(environment.url + '/Usuario').pipe(map(r => <Usuario[]> r));
    convenios$.subscribe((convenios: Usuario[]) => {
      this.UsuariosTotales=convenios;  
      console.log(this.UsuariosTotales)  
    });
    return this.UsuariosTotales;
   
  }
  islogin(): boolean {
    let blnUsuario = false;
    

if((Object.keys(this.usuario).length) > 0){
  blnUsuario = true;
}else{
  console.log("no logeado")
}

    return blnUsuario;
  }

  esAdministrador(): boolean {
    let Aux = false;
    
      if(this.islogin()){
        const helado = this.UsuariosTotales.forEach((valuex)=>{if (valuex.nombre ===Object.values(this.usuario)[3] && valuex.roles[0].nombre ==="Administrador"){
          return Aux = true;
        console.log(1)
        }
     
      });

      }else
      
      { 
        Aux = false
        console.log(2)
      
      }

     
 
  
    return Aux;
  }
  esUsuario(): boolean {
    let Aux = false;
    
      if(this.islogin()){
        const helado = this.UsuariosTotales.forEach((valuex)=>{if (valuex.nombre ===Object.values(this.usuario)[3] && valuex.roles[0].nombre ==="Usuario"){
          return Aux = true;
        console.log(1)
        }
     
      });

      }else
      
      { 
        Aux = false
        console.log(2)
      
      }

     
 
  
    return Aux;
  }
}
