import { Component } from '@angular/core';
import {AuthServiceService} from "./Servicios/auth-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'suplefront';
  constructor(private readonly _authService: AuthServiceService) { }
 // usuario = this._authService.usuario;
}
