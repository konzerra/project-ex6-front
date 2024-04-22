import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {inject} from "@angular/core";
import {AuthService} from "../domain/auth/auth.service";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const router: Router = inject(Router);
  const userAuthService: AuthService = inject(AuthService);

  // if (userAuthService.getUser() === null) {
  //   return router.navigate(['/auth']);
  // } else {
  //   const authority = route.data["authority"] as string
  //   if (authority === null || !userAuthService.hasAuthority(authority)) {
  //     return router.navigate(['/forbidden']);
  //   } else {
  //     return true;
  //   }
  // }
  return true
}
