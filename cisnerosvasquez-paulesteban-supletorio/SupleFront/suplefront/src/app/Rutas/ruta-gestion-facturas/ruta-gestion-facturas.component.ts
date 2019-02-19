import { Component, OnInit } from '@angular/core';

import {FacturaCabeceraServicio} from "../../Servicios/factura-cabecera-servicio";
import {FacturaCabecera} from "../../Interfaces/FacturaCabecera";
import {NgForm} from "@angular/forms";
import {AuthServiceService} from "../../Servicios/auth-service.service";

@Component({
  selector: 'app-ruta-gestion-facturas',
  templateUrl: './ruta-gestion-facturas.component.html',
  styleUrls: ['./ruta-gestion-facturas.component.css']
})
export class RutaGestionFacturasComponent implements OnInit {
  cols:any [];
  busqueda: FacturaCabecera[] = [];
  busquedax: FacturaCabecera[] = [];
  show = true;
  show2 = false;
  cbxestado= ["En Compra","Pagado","Todos"];
  constructor(private readonly _facturacabeceraservicio : FacturaCabeceraServicio, private readonly _authService:AuthServiceService) { }

  ngOnInit() {
    const show = true ;
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'fecha', header: 'Fecha'},
      { field: 'total', header: 'Total'},
      { field: 'estado', header: 'Estado'},
      { field: 'acciones', header: 'Acciones' }

    ];
    const facturascabecera$ = this._facturacabeceraservicio.findAll();
    facturascabecera$.subscribe((facturas: FacturaCabecera[]) => {
      this.busqueda=facturas;

      console.log(this.busqueda[0].nombre);
      console.log(this.busqueda);

    });
  }



  onClickMe(f: NgForm) {
    /* const helado=this.usuarios.find((valuex)=>{return valuex.pais==f.value.BrowPais
    // console.log(valuex.organizacion+"1");
     console.log(f.value.BrowOrganizacion+"2")
   });*/

    //console.log(this._authService.usuario.password);
    console.log(f.value.BrowFactura);
    if ((f.value.BrowEstado)!= "Todos" || (f.value.BrowFactura)!= undefined) {
      console.log(f.value.BrowEstado);
      this.show = false;
      this.show2 = true;
      this.busquedax = [];
      const helado = this.busqueda.forEach((valuex) => {
        //console.log((Object.values(valuex.idUsuario)[3]));
        console.log(valuex.idUsuario);
        if ((valuex.estado == f.value.BrowEstado)||((Object.values(valuex.idUsuario)[3]) == f.value.BrowFactura)) {

          this.busquedax.push(valuex);
        }
      });
    }else{
      this.busquedax= this.busqueda;
    }
  }

}
