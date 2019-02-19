import { Component, OnInit } from '@angular/core';
import {EventoServicio} from "../../Servicios/evento-servicio";
import {EventopeliculaServicio} from "../../Servicios/eventopelicula-servicio";
import {EventosPorPelicula} from "../../Interfaces/EventosPorPelicula";
import {FacturaDetalleServicio} from "../../Servicios/factura-detalle-servicio";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-anadir-item',
  templateUrl: './ruta-anadir-item.component.html',
  styleUrls: ['./ruta-anadir-item.component.css']
})
export class RutaAnadirItemComponent implements OnInit {
id;
selected;
  eventopeliculas= [];
  eventopelicula:EventosPorPelicula;
  precioacordado;
  arregloprecio=[];
  arregloid=[];
  cantidad;
  eventos :EventosPorPelicula[]= [];
  auxid;
  constructor(private readonly _router: Router,
              private readonly _eventosservicio: EventoServicio,
              private readonly _eventopeliculaservicio: EventopeliculaServicio,
              private readonly _facturadetalle: FacturaDetalleServicio,
              private readonly _activatedRoute: ActivatedRoute,) { }

  ngOnInit() {

    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaActualizarFactura) => {
          this.auxid =parametros.idFactura;
     this.id=this._eventosservicio.ideventoaux;
    const eventospeliculas$ = this._eventopeliculaservicio.findAll();
    eventospeliculas$.subscribe((eventospeliculas: EventosPorPelicula[]) => {
      this.eventopeliculas= [];
      this.eventos=eventospeliculas;
      const helado = eventospeliculas
        .forEach(
          (eventopeliculasx) => {

           // let aux =((Object.values(parametros.idEventos)[0]));
            let aux1 = (Object.values(eventopeliculasx.idEvento)[2]);
          //  c
           // console.log((Object.values(eventopeliculasx.idEvento)[2]));
            if(this.id==aux1.valueOf()){
              this.arregloprecio.push(eventopeliculasx.preciobase);
              this.arregloid.push(eventopeliculasx.id);
              console.log(eventopeliculasx.id);
              this.eventopeliculas.push(eventopeliculasx.idPelicula);

            }
          }
        );
    });
    //console.log(this.eventopeliculas);

        }
      );
  }
  onOptionsSelected(event){
    let value = event.target.value;
    this.precioacordado=this.arregloprecio[value-1];
  }
  crearitem(peliculaEscogida: any){
    const auxid= parseInt(peliculaEscogida)
    console.log(typeof auxid);
    //const agregariten$ = this._facturadetalle.createx(this.arregloid[peliculaEscogida.id-1],this.id,this.precioacordado,this.cantidad);
    const agregariten$ = this._facturadetalle.createx(this.auxid,this.arregloid[auxid-1],this.precioacordado,this.cantidad);
    agregariten$.subscribe((item) => {
        console.log('itemcreado');
      //  this.eventopeliculas.push({nombre: this.peliculas[peliculaEscogida-1].nombre, id:this.eventopeliculas.length+1},);
        this._router.navigate(['/gestionfacturas',this.auxid]);
      },
      (error) => {
        console.error('Error: ', error);
      })
   // this._router.navigate(['/gestionfacturas',this.id]);
  };

}
interface ParametrosRutaActualizarFactura {
  idFactura: string;
}
