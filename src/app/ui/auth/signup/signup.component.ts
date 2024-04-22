import { Component } from '@angular/core';
import {checkFormControl} from "../../../utils/checkFormControl";
import {AuthViewService} from "../auth-view.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(
    public authViewService: AuthViewService
  ) {
  }
  signin() {
    this.authViewService.signin()
  }

  protected readonly checkFormControl = checkFormControl;
}
