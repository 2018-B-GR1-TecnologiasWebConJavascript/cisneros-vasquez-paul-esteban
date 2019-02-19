import {Rol} from "./Rol";

import {FacturaCabecera} from "./FacturaCabecera";


export interface Usuario {
  id?: number;
  nombre: string;
  createdAt?: number;
  updatedAt?: number;
  correo: string;
  fechanacimiento: string;
  password: string;
  roles: Rol[];
  facturas: FacturaCabecera[];

}
