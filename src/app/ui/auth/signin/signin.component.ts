import { Component } from '@angular/core';
import {AuthViewService} from "../auth-view.service";
import {checkFormControl} from "../../../utils/checkFormControl";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor(
    public authViewService: AuthViewService
  ) {
  }
  signin() {
    this.authViewService.signin()
  }

  protected readonly checkFormControl = checkFormControl;

  register() {
    this.authViewService.signupRotate()
  }
}
