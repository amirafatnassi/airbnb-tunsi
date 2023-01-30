import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");
    if (token !== null) {
      const expire = this.isExpiredToken(token);
      if (expire) {
        this.router.navigateByUrl("/auth/login");
        localStorage.removeItem("token");
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigateByUrl("/auth/login");
      return false;
    }
  }

  isExpiredToken(token: string): boolean {
    let decoded: any = jwt_decode(token);
    return Math.floor(new Date().getTime() / 1000) >= decoded.exp;
  }
}
