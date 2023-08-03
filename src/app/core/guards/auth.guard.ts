import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { UserService } from '@core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _userService: UserService, private _router: Router) { }

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this._authService.hasToken()) {
      if (this._userService.getUser().isAdmin) {
        return true;
      } else {
        return this._router.parseUrl('/');
      }
    } else {
      return this._router.parseUrl('/login');
    }
  }
}
