import {Rol} from "./Rol";


export interface Usuario {
  id?: number;
  nombre: string;
  createdAt?: number;
  updatedAt?: number;
  correo: string;
  fechanacimiento: string;
  password: string;
  roles: Rol[];


}
