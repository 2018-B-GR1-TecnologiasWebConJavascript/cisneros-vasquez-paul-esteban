import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthServiceService} from '../auth-service.service';

@Injectable()
export class EsCajero implements CanActivate {
  constructor(private readonly _authService: AuthServiceService,
              private readonly _router: Router) {
  }

  canActivate(): boolean {
    if (this._authService.esCajero()) {
      return true;
    } else {
      this._router.navigate(['/inicio']);
      return false;
    }
  }
}
