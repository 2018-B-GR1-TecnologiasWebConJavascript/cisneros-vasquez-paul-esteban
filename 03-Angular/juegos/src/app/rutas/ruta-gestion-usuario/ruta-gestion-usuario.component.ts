import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-gestion-usuario',
  templateUrl: './ruta-gestion-usuario.component.html',
  styleUrls: ['./ruta-gestion-usuario.component.scss']
})
export class RutaGestionUsuarioComponent implements OnInit {
usuarios: Usuario[] = [
  {id:1,
  nombre: "Paul"},
  {id:2,
    nombre: "Esteban"}
];
  constructor() { }

  ngOnInit() {
  }
 hola(){
   return console.log("holaaa...")
      }
}

interface Usuario {
  nombre?: string;
  id?: number
}
