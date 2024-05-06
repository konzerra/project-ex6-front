import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {DialogsService} from '../../shared/dialogs.service';
import {Router} from '@angular/router';
import {catchError, map, Observable, of} from "rxjs";
import {AuthSigninDto} from "./dto/AuthSigninDto";
import {AuthSignupDto} from "./dto/AuthSignupDto";
import {AuthApi} from "./AuthApi";
import {Role} from "../user/Role";
import {JwtDto} from "./dto/JwtDto";
import {User} from "../user/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private httpClient: HttpClient,
    private dialogsService: DialogsService,
    private router: Router
  ) {


    //this.signedIn = true
    //TODO
    //emit signedInObservable if user signed in already
    // if(this.getUser()){
    //   this.signedIn = true
    //   this.signedInObservable.next(true)
    // }
  }


  public setData(jwtDto: JwtDto) {
    this.setUser(jwtDto.user)
    this.setJwtToken(jwtDto.token)
    this.setRole(jwtDto.user.roles)
  }

  signin(signinDto: AuthSigninDto): Observable<boolean> {
    return this.httpClient.post<JwtDto>(AuthApi.signin, signinDto).pipe(
      map(v => {
        this.setData(v);
        return true;
      }),
      catchError(err => {
        this.dialogsService.openInfoDialog("Cannot signin, check credentials");
        this.router.navigate(["/auth"]);
        return of(false); // Return an Observable<boolean> indicating failure
      })
    );
  }

  signup(signupDto: AuthSignupDto){
    return this.httpClient.post<JwtDto>(AuthApi.signup, signupDto).pipe(
      map(v => {
        this.setData(v);
        return true;
      }),
      catchError(err => {
        this.dialogsService.openInfoDialog("Cannot signup");
        this.router.navigate(["/auth"]);
        return of(false); // Return an Observable<boolean> indicating failure
      })
    );
  }

  // resetPassword(resetDto:AuthResetDto){
  //   return this.httpClient.post<JwtDto>(AuthApi.reset, resetDto)
  // }

  // generatePasswordPin(email:string){
  //   return this.httpClient.get<JwtDto>(ApiPathUtil.insertEmail(AuthApi.generate_password_pin,email))
  // }

  private setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user))
  }
  public getUser(): User | null {
    let userJson = localStorage.getItem('user')
    if (userJson != null) {
      return JSON.parse(userJson)
    }
    return null
  }

  private setRole(roles: Array<Role>) {
    localStorage.setItem("roles", JSON.stringify(roles))
  }
  public getRole(): Array<Role> {
    let roles: Array<Role> = new Array<Role>()
    let rolesJson = localStorage.getItem("roles" || "[]")
    if (rolesJson != null) {
      roles = JSON.parse(rolesJson)
    }
    return roles
  }

  public hasRole(role: string): boolean {
    let found = false
    if (this.isJwtTokenExpired()) {
      return false
    }
    let roles: Array<Role> = new Array<Role>()
    let rolesJson = localStorage.getItem("roles" || "[]")

    if (rolesJson != null) {
      roles = JSON.parse(rolesJson)
      roles.forEach((it) => {
        if (it.name === role)
          found = true
      })
    }
    return found
  }


  private setJwtToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken)
  }
  public getJwtToken(): string | null {
    if (this.isJwtTokenExpired()) {
      return null
    }
    return localStorage.getItem("jwtToken")
  }

  //Recommended to cal in authViewService only
  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('roles')
  }


  public isLoggedIn(): boolean {
    return this.getJwtToken() != null
  }

  public isJwtTokenExpired(): boolean {
    let token = localStorage.getItem("jwtToken")
    if (token != null) {
      return this.tokenExpired(token)
    }
    return false
  }


  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

}
