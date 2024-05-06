
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler, HttpHeaderResponse,
  HttpInterceptor,
  HttpRequest, HttpResponse
} from "@angular/common/http";
import {catchError, EMPTY, Observable, switchMap, tap, throwError} from "rxjs";

import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "../domain/auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor{

  constructor(
    private userAuthService:AuthService,
    private router:Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      setHeaders: {
        //'Accept-Language': AppLanguage.getLocalLanguage()
      }
    })
    if(req.headers.get('No-Auth')==='true'){
      console.log("Intercepting in non-token")
      return next.handle(req.clone()).pipe(
        catchError(
          (error:HttpErrorResponse ) =>{
            if(error.status === 0 ){
              return throwError(()=>"Server is currently not working");
            }
            if(error.status === 404 ){
              return throwError(()=>"Not found");
            }
            if(error.status === 400){
              return throwError(()=>error.error.message)
            }
            return throwError(()=>"Unexpected error");
          }
        )
      )
    }
    const token = this.userAuthService.getJwtToken()
    if(token){
      req = this.addToken(req,token)
    }
    console.log("In interceptor before request")
    return next.handle(req).pipe(
      catchError(
        (error:HttpErrorResponse ) =>{
          if(error.status === 401){
            return throwError(()=>"unauthorized")
          }
          if(error.status === 403 ){
            this.router.navigate(['/forbidden']);
          }
          if(error.status === 0 ){
            return throwError(()=>"Server is currently not working");
          }
          if(error.status === 404 ){
            return throwError(()=>error.error.message);
          }
          if(error.status === 400){
            return throwError(()=>error.error.message)
          }
          return throwError(()=>"Unexpected error \n"+ error.message);
        }
      )
    )
  }

  private addToken(httpRequest:HttpRequest<any>,token:String){
    return httpRequest.clone(
      {
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      }
    )
  }

}
