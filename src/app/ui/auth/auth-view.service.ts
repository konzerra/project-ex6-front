import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, Validators} from "@angular/forms";
import { AuthService } from '../../domain/auth/auth.service';
import {DialogsService} from "../../shared/dialogs.service";

@Injectable({
  providedIn: 'root'
})
export class AuthViewService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private dialogsService: DialogsService
  ) {

  }

  public rotated: boolean = false
  public action: string = "signin"
  public email = new FormControl<string>("", [Validators.email, Validators.required])
  public password = new FormControl<string>("", Validators.required)
  public disableAction: boolean = false;

  rotate(){
    this.rotated = !this.rotated
    this.disableAction = true
  }

  signin(){
    if(this.email.valid && this.password.valid){

      this.authService.signin({
        email: this.email.value || "",
        password: this.password.value || ""
      })
      this.action = "success"
      this.rotate()
    }
    else{
      this.dialogsService.openInfoDialog("Fill required fields")
    }

  }
}
