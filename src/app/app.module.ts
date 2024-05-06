import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./ui/auth/auth.module";
import {SharedModule} from "./shared/shared.module";
import { ForbiddenComponent } from './ui/app/forbidden/forbidden.component';
import {AuthInterceptor} from "./auth_guard/auth.interceptor";
import {CommonModule, DatePipe} from "@angular/common";
import { DrawerComponent } from './ui/app/drawer/drawer.component';
import {AngularMaterialModule} from "./angular.material/angular.material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { ChatComponent } from './ui/app/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ForbiddenComponent,
    DrawerComponent,
    ChatComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AuthModule,
        SharedModule,
        AngularMaterialModule,
        ReactiveFormsModule
    ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
