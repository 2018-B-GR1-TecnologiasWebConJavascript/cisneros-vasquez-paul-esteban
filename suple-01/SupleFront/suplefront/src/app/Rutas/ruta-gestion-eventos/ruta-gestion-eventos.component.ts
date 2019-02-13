import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Servicios/auth-service.service';
import {NgForm} from "@angular/forms";
import {Evento} from "../../Interfaces/Evento";
import {EventoServicio} from "../../Servicios/evento-servicio";

@Component({
  selector: 'app-ruta-gestion-eventos',
  templateUrl: './ruta-gestion-eventos.component.html',
  styleUrls: ['./ruta-gestion-eventos.component.css']
})
export class RutaGestionEventosComponent implements OnInit {
  cols:any [];
  busqueda: Evento[] = [];
  busquedax: Evento[] = [];
  show = true;
  show2 = false;

  constructor(private readonly _eventosservicio: EventoServicio,
              private readonly _authService:AuthServiceService) { }

  ngOnInit() {
    const show = true ;
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'fecha', header: 'Fecha'},
      { field: 'acciones', header: 'Acciones' }

    ];
    const usuarios$ = this._eventosservicio.findAll();
    usuarios$.subscribe((eventos: Evento[]) => {
      this.busqueda=eventos;

      console.log(this.busqueda[0].nombre);
      console.log(this.busqueda);

    });


  }


  onClickMe(f: NgForm) {
    /* const helado=this.usuarios.find((valuex)=>{return valuex.pais==f.value.BrowPais
    // console.log(valuex.organizacion+"1");
     //console.log(f.value.BrowOrganizacion+"2")
   });*/
    if ((f.value.BrowEvento)) {
      this.show = false;
      this.show2 = true;
      this.busquedax = [];
      const helado = this.busqueda.forEach((valuex) => {
        if ((valuex.nombre == f.value.BrowEvento)) {

          this.busquedax.push(valuex);
        }
      });
    }else{
      this.busquedax= this.busqueda;
    }
  }
}
