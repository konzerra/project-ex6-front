import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthMainComponent} from "./auth-main/auth-main.component";
import {AuthSuccessComponent} from "./auth-success/auth-success.component";
import {SigninComponent} from "./signin/signin.component";
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AuthMainComponent,
    AuthSuccessComponent,
    SigninComponent,
    SignupComponent
  ],
  exports: [
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }
