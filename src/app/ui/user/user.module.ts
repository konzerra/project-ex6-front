import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularMaterialModule} from "../../angular.material/angular.material.module";
import { UserAddressComponent } from './user.address/user.address.component';



@NgModule({
  declarations: [
    ProfileComponent,
    UserAddressComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class UserModule { }
