import {Pelicula} from "./Pelicula";
import {Evento} from "./Evento";

export interface EventosPorPelicula {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  idPelicula: Pelicula[];
  idEvento: Evento[];
  preciobase:number;

}
