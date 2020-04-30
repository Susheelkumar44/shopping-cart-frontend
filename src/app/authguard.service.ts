import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable }  from 'rxjs/Observable'; 


export class AuthGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            let getLoginStatus = localStorage.getItem('isLoggedIn');
            if (getLoginStatus == "true") {
                return true;
            } else {
                return false;
            }
        }
}