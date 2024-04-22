import { Component } from '@angular/core';
import {AuthViewService} from "../auth-view.service";

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.scss']
})
export class AuthMainComponent {
  constructor(public authViewService: AuthViewService) {
  }
}
