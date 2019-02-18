import { Component, OnInit } from '@angular/core';
import {Evento} from "../Interfaces/Evento";
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../Interfaces/Usuario";
import {UsuarioServicio} from "../Servicios/usuario-servicio";
import {EventoServicio} from "../Servicios/evento-servicio";
import {EventopeliculaServicio} from "../Servicios/eventopelicula-servicio";
import {EventosPorPelicula} from "../Interfaces/EventosPorPelicula";
import {PeliculaServicio} from "../Servicios/pelicula-servicio";
import {Pelicula} from "../Interfaces/Pelicula";
import {parseIntAutoRadix} from "@angular/common/src/i18n/format_number";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-agregar-hijos-eventos',
  templateUrl: './agregar-hijos-eventos.component.html',
  styleUrls: ['./agregar-hijos-eventos.component.css']
})
export class AgregarHijosEventosComponent implements OnInit {



  peliculas: any = [];
/*
  evento_medicamento: Evento_medicamento = {
    idEvento: '',
    idMedicamento: '',
    precioBase: '' ,
  };*/
  Aevento: any =  [];
  eventopeliculas= [];
  eventos :EventosPorPelicula[]= [];



  constructor(private readonly _activatedRoute: ActivatedRoute,
              private readonly _eventopeliculaservicio: EventopeliculaServicio,
              private readonly _peliculaservicio: PeliculaServicio,
              private readonly _eventoservicio: EventoServicio,) {
  }



  ngOnInit() {

    this.eventopeliculas= [];
    const peliculas$ = this._peliculaservicio.findAll();
    peliculas$.subscribe((peliculas: Pelicula[]) => {
      this.peliculas=peliculas;

    });


    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaEvento) => {
          const evento$ = this._eventoservicio.findOneById((parametros.idEventos));
          evento$.subscribe((evento: Evento)=> {
            this.Aevento=evento;

          });

          const eventospeliculas$ = this._eventopeliculaservicio.findAll();
          eventospeliculas$.subscribe((eventospeliculas: EventosPorPelicula[]) => {
            this.eventopeliculas= [];
            this.eventos=eventospeliculas;
            const helado = eventospeliculas
              .forEach(
                (eventopeliculasx) => {

                let aux =((Object.values(parametros.idEventos)[0]));
                let aux1 = (Object.values(eventopeliculasx.idEvento)[2]);
                console.log(aux.valueOf());

                  if(aux.valueOf()==aux1.valueOf()){
                    this.eventopeliculas.push(eventopeliculasx.idPelicula);
                  }
                }
              );
          });


        }
      );



  }
  eliminarPelicula(id:number|string) {

    const eliminarpeli$ = this._eventopeliculaservicio.eliminareventopelicula(id,this.Aevento.id);
    eliminarpeli$
      .subscribe(
        (eventopeli: EventosPorPelicula) => {
          alert('Pelicula eliminada del Evento');
          // const url = ['/gestionusuarios'];
          //this._router.navigate(url);
          this.eventopeliculas.splice(this.eventopeliculas.findIndex(rol => rol.id === id), 1);
        },
        (error) => {
          console.error('Error: ', error);
        }
      );
  }
  crearPelicula(peliculaEscogida: any) {

    //  const actualizar = this.actualizarTablas();
    if(this.eventopeliculas.length>4){
      alert("No se puede crear el rol")
    }
    else{
      const agregarrol = this.eventopeliculas.some(rol => rol.nombre === this.peliculas[peliculaEscogida-1].nombre);

      const agregarro2 = this.eventopeliculas.forEach(rol =>{ return console.log(rol.nombre) });
      //const agregarrol = true;
      if(agregarrol==true){
        console.log("No se creo la pelicula");
        alert("PeliculaRepetidda repetido");

      }else{

        console.log("Inicio");
        console.log(peliculaEscogida);
       // console.log(this.peliculas.findIndex(rol => rol.nombre === peliculaEscogida));
        console.log(this.Aevento.id);

        const crearRol$ = this._eventopeliculaservicio.create(peliculaEscogida,this.Aevento.id,25);

        crearRol$
          .subscribe(
            (pelicula: EventosPorPelicula) => {
              console.log('Rolcreado');
              this.eventopeliculas.push({nombre: this.peliculas[peliculaEscogida-1].nombre, id:this.eventopeliculas.length+1},);

            },
            (error) => {
              console.error('Error: ', error);
            }
          );

      }
    }


  }
}

interface ParametrosRutaEvento {
  idEventos: string;
}
