import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import {AngularMaterialModule} from "../../angular.material/angular.material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CartComponent} from "./cart/cart.component";


@NgModule({
  declarations: [
    CheckoutComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }
