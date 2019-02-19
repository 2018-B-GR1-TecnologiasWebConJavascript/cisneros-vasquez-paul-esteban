import {FacturaDetalle} from "./FacturaDetalle";


export interface FacturaCabecera {
  id?:any;
  createdAt?: number;
  updatedAt?: number;
  nombre?:string;
  cedula :number;
  telefono :number;
  direccion:string;
  correo:string;
  fecha:string;
  total:number;
  tipoPago:string;
  estado:string;
  idUsuario:number;
  idEvento:number;
  detalles: FacturaDetalle[];
  nombreCajero:string;
}
