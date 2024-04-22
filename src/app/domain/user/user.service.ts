import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DialogsService} from "../../shared/dialogs.service";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private httpClient: HttpClient,
    private dialogsService: DialogsService,
    private authService: AuthService,
  ) {
  }

}
