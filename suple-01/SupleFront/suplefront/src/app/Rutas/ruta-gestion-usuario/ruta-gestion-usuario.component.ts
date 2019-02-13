import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../Interfaces/Usuario";
import {UsuarioServicio} from "../../Servicios/usuario-servicio";
import {Rol} from "../../Interfaces/Rol";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ruta-gestion-usuario',
  templateUrl: './ruta-gestion-usuario.component.html',
  styleUrls: ['./ruta-gestion-usuario.component.css']
})
export class RutaGestionUsuarioComponent implements OnInit {
  cols:any [];
  busqueda: Usuario[] = [];
  busquedax: Usuario[] = [];
  Aroles: Rol[] = [];
  show = true;
  show2 = false;
  constructor(private readonly _usuarioservicio: UsuarioServicio) { }

  ngOnInit() {
    const show = true ;
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'correo', header: 'Correo' },
      { field: 'fechanacimiento', header: 'Fecha de Nacimiento'},
      { field: 'acciones', header: 'Acciones' }

    ];
    const usuarios$ = this._usuarioservicio.findAll();
    usuarios$.subscribe((usuarios: Usuario[]) => {
      this.busqueda=usuarios;
      this.busquedax=usuarios;


    });


  }


  onClickMe(f: NgForm) {
    /* const helado=this.usuarios.find((valuex)=>{return valuex.pais==f.value.BrowPais
    // console.log(valuex.organizacion+"1");
     //console.log(f.value.BrowOrganizacion+"2")
   });*/
    if((f.value.BrowNombre)) {
      this.show = false;
      this.show2 = true;
      this.busquedax = [];
      //&& valuex.estado=='VIGENTE'
      const helado = this.busqueda.forEach((valuex) => {
        if ((valuex.nombre == f.value.BrowNombre)) {

          this.busquedax.push(valuex);
        }
      });
    }else{
      this.busquedax =this.busqueda;
    }
  }
  eliminar(usuario: Usuario) {

    const razaEliminada$ = this._usuarioservicio.delete(usuario.id);

    razaEliminada$
      .subscribe(
        (usuarioEliminada: Usuario) => {
          console.log('Se elimino:', usuarioEliminada);

          const indice = this.busqueda
            .findIndex((r) => r.id === usuario.id);

          this.busqueda.splice(indice, 1);


        },
        (error) => {
          console.error('Error', error);
        }
      );




  }
}
