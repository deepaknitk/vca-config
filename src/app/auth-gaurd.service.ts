import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, CanDeactivate} from '@angular/router';
import {AuthService} from './auth.service';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class AuthGaurd implements CanActivate, CanActivateChild, CanDeactivate<CanComponentDeactivate> {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;
    return this.checkAuth(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

  checkAuth(url: string): boolean {
    if (this.authService.isUserLoggedIn === true) {
      return true;
    }

    this.authService.redirecturl = url;

    this.router.navigate(['/login']);
    return false;
  }

}
