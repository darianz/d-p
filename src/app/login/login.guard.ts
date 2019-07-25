import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class LoginGuard implements CanActivate{
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
   

    constructor (private loginService: LoginService){}

    canActivate(
         route: ActivatedRouteSnapshot,
         router: RouterStateSnapshot
         ): boolean | Promise<boolean> | Observable<boolean> {
        return this.loginService.user.pipe(map(user => {
            return !!user;
        }));
    }
}