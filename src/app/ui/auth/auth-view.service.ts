import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, Validators} from "@angular/forms";
import { AuthService } from '../../domain/auth/auth.service';
import {DialogsService} from "../../shared/dialogs.service";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthViewService {

  signedIn: boolean = false;
  signedInObservable = new BehaviorSubject<boolean>(false);

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private dialogsService: DialogsService,
    private router: Router
  ) {

  }

  //front if false
  public currentSide: boolean = false
  public actionFront: string = "signin"
  public actionBack: string = "loading-back"
  public name = new FormControl<string>("", Validators.required)
  public email = new FormControl<string>("", [Validators.email, Validators.required])
  public password = new FormControl<string>("", Validators.required)

  rotate(){
    this.currentSide = !this.currentSide
  }

  signin(){
    if(this.email.valid && this.password.valid){
      this.rotate()
      this.actionBack = "loading-back"
      this.authService.signin({
        email: this.email.value || "",
        password: this.password.value || ""
      }).subscribe({
        next:(v)=>{
          if(v){
            console.log(v);
            this.signedIn = true;
            this.signedInObservable.next(true);
            this.router.navigate(['/user']);
          }else{
            this.rotate()
            this.actionFront = "signin"
          }
        },
        error:()=>{
          this.actionFront = "signup"
          console.log("Could not signin with the email address")
        }
      })
    }
    else{
      this.dialogsService.openInfoDialog("Fill required fields")
    }
  }
  signup(){
    if(this.name.valid && this.email.valid && this.password.valid){
      //true
      console.log("currentSide: "+this.currentSide)
      this.rotate()
      //if back
      if(!this.currentSide){
        this.actionFront = "loading-front"
      }

      this.authService.signup({
        name: this.name.value || "",
        email: this.email.value || "",
        password: this.password.value || ""
      }).subscribe({
        next:(v)=>{
          if(v){
            console.log(v);
            this.signedIn = true;
            this.signedInObservable.next(true);
            this.router.navigate(['/user']);
          }else{
            this.rotate()
            this.actionBack = "signup-from-signin"
          }
        },
        error:()=>{
          this.rotate()
          this.actionBack = "signup-from-signin"
          console.log("Could not signup")
        }
      })
    }
    else{
      this.dialogsService.openInfoDialog("Fill required fields")
    }
  }
  signupRotate(){
    this.actionBack = "signup-from-signin"
    this.rotate()
  }

  signinRotate(){
    this.actionFront = "signin"
    this.rotate()
  }

  logout(){
    this.authService.logout()
    this.currentSide = false
    this.actionFront = "signin"
    this.actionBack = "loading-back"
  }
}
