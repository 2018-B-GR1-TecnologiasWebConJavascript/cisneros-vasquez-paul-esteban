import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {
  @Input()
  id: number;
  @Input()
  nombres: string;
  @Input()
  apellidos : string;
  @Input()
  fechanacimiento : string;
  @Input()
  numeropeliculas : number;
  @Input()
  retirado : boolean;

  constructor() { }

  ngOnInit() {
  }

}
