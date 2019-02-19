import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../Servicios/auth-service.service";
import {FacturaCabecera} from "../../Interfaces/FacturaCabecera";
import {ActivatedRoute, Router} from "@angular/router";
import {FacturaCabeceraServicio} from "../../Servicios/factura-cabecera-servicio";
import {FacturaDetalleServicio} from "../../Servicios/factura-detalle-servicio";
import {FacturaDetalle} from "../../Interfaces/FacturaDetalle";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ruta-factura',
  templateUrl: './ruta-factura.component.html',
  styleUrls: ['./ruta-factura.component.css']
})
export class RutaFacturaComponent implements OnInit {
  detallecabecera: FacturaCabecera;
 // detallecabecera:any =[{nombre:"Paul",tipo:"Efectivo"}];
  item : any= [];
  cols:any = [];

   totalx=0;
   auxid;
  constructor(private readonly _authService: AuthServiceService,
              private readonly _activatedRoute: ActivatedRoute,
              private readonly _facturacabeceraservicio: FacturaCabeceraServicio,
              private readonly _facturadetalleservicio: FacturaDetalleServicio,
              private readonly _router: Router,) { }
tipop:any =["Efectivo","Tarjeta","Cheque"];
  nombreitem:any =["Soy Robot","Soy leyenda","Angeles de Charly","Glass"];

  ngOnInit() {
    this.cols = [
      { field: 'item', header: 'Item' },
      { field: 'cantidad', header: 'Cantidad'},
      { field: 'precio', header: 'Precio'},
      { field: 'total', header: 'Total'},
      { field: 'acciones', header: 'Acciones' }

    ];
    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaActualizarFactura) => {
          this.auxid=parametros.idFactura;
          const raza$ = this._facturacabeceraservicio
            .findOneById(parametros.idFactura);

          raza$
            .subscribe(
              (factura: FacturaCabecera) => {
                this.item = [];
                this.detallecabecera = factura;

                const usuariosrolx = factura.detalles
                  .forEach(
                    (detalle,index) => {
                    this.totalx= this.totalx+detalle.total;
                      this.item.push({
                      // nombre:this.nombreitem[parseInt(detalle.id)],
                       // nombre: (factura.idEvento.nombre),
                        nombre: detalle.id,
                        id: detalle.id,
                        cantidad: detalle.cantidad,
                        precio: detalle.precio,
                        total: detalle.total,
                      });

                    }
                  );

              },
              (error) => {
                console.error('Error: ', error);
              }
            );

        }
      );
  }
eliminarfacturadetalle(id:string|number){
  const eliminarfacturadetalle$ = this._facturadetalleservicio.eliminarfacturadetalle(id);
  eliminarfacturadetalle$
    .subscribe(
      (detalle: FacturaDetalle) => {
        console.log('Detalle eliminado');
        alert('Detalle eliminado:' + detalle.id);
        // const url = ['/gestionusuarios'];
        //this._router.navigate(url);
        this.item.splice(this.item.findIndex(rol => rol.id === id), 1);
        this.totalx= this.totalx-detalle.total;
      },
      (error) => {
        console.error('Error: ', error);
      }
    );

}
  anadiritem(){
    this._router.navigate(['./anadiritem',this.detallecabecera.id]);
  }
  estadocompra(){
    if(this.detallecabecera.estado==="Pagado"){

      return true;
    }else {
      return false;
    }

  }
  cajallena(){
    if(this.item.length < 1 ){

      return true;
    }else {
      return false;
    }

  }
  actualizarfacturadetalle() {
    const objetoFactura:any= {
      id:this.auxid,
      nombre: this.detallecabecera.nombre,
      cedula  : this.detallecabecera.cedula,
      telefono  : this.detallecabecera.telefono,
      direccion  : this.detallecabecera.direccion,
      correo   : this.detallecabecera.correo,
      fecha: "18/02/2019",
      total: this.totalx,
      tipoPago: this.detallecabecera.tipoPago,
      estado: "Pagado",
      idUsuario: 3,
      idEvento: 1,
      nombreCajero: this._authService.usuario.nombre,
    };

    const razaActualizada$ = this._facturacabeceraservicio
      .updateOneById(objetoFactura);

    razaActualizada$
      .subscribe(
        (facturaActualizado: FacturaCabecera) => {
          alert('Factura actualizada ' + facturaActualizado.nombre);
          this._router.navigate(["gestionfacturas"]);
        },
        (error) => {
          console.error('Error', error);
        }
      );

  }
  actualizardatosfactura() {
    const objetoFactura:any= {
      id:this.auxid,
      nombre: this.detallecabecera.nombre,
      cedula  : this.detallecabecera.cedula,
      telefono  : this.detallecabecera.telefono,
      direccion  : this.detallecabecera.direccion,
      correo   : this.detallecabecera.correo,
      fecha: "18/02/2019",
      total: this.totalx,
      tipoPago: this.detallecabecera.tipoPago,
      estado: this.detallecabecera.estado,
      idUsuario: 3,
      idEvento: 1,
    };

    const razaActualizada$ = this._facturacabeceraservicio
      .updateOneById(objetoFactura);

    razaActualizada$
      .subscribe(
        (facturaActualizado: FacturaCabecera) => {
          alert('Factura actualizada ' + facturaActualizado.nombre);
          this._router.navigate(["gestionfacturas",this.detallecabecera.id]);
        },
        (error) => {
          console.error('Error', error);
        }
      );

  }
}

interface ParametrosRutaActualizarFactura {
  idFactura: string;
}
