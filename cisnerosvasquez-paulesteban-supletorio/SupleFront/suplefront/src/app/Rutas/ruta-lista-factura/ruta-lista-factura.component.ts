import { Component, OnInit } from '@angular/core';
import {FacturaCabecera} from "../../Interfaces/FacturaCabecera";
import {FacturaCabeceraServicio} from "../../Servicios/factura-cabecera-servicio";
import {AuthServiceService} from "../../Servicios/auth-service.service";
import {__values} from "tslib";

@Component({
  selector: 'app-ruta-lista-factura',
  templateUrl: './ruta-lista-factura.component.html',
  styleUrls: ['./ruta-lista-factura.component.css']
})
export class RutaListaFacturaComponent implements OnInit {
  cols:any [];
  busquedax: FacturaCabecera[] = [];
  constructor(private readonly _facturacabeceraservicio : FacturaCabeceraServicio,private readonly _authService:AuthServiceService,) { }

  ngOnInit() {
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'fecha', header: 'Fecha'},
      { field: 'total', header: 'Total'},
      { field: 'estado', header: 'Estado'},
      { field: 'acciones', header: 'Acciones' }

    ];
/*
    const facturascabecera$ = this._facturacabeceraservicio.findOneById(this._authService.usuario.id);
    facturascabecera$.subscribe((facturas: FacturaCabecera) => {
      this.busquedax=facturas;


    });*/

    const respuestaLogin$ = this._facturacabeceraservicio
      .buscarUsuariofacturas(
        this._authService.usuario.id
      );

    respuestaLogin$
      .subscribe(
        (usuario) => {
          console.log(usuario);

          this.busquedax = (Object.values(usuario)[0]).facturas;
          console.log(  (Object.values(usuario)[0]).facturas);
       //   const helado = (Object.values(usuario)[0]).facturas.forEach((value)=>{ this.busquedax = value;})
          // usuario.facturas


        },
        (error) => {
          console.error(error);
        }
      );
  }


}
