import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/cdk/stepper";
import {BreakpointObserver} from "@angular/cdk/layout";
import {PersonalInfoForm} from "./forms/PersonalInfoForm";
import {AddressInfoForm} from "./forms/AddressInfoForm";
import {CardInfoForm} from "./forms/CardInfoForm";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  personalInfoForm = new PersonalInfoForm()
  addressInfoForm = new AddressInfoForm()
  cardInfoForm = new CardInfoForm()


  personalInfo = this._formBuilder.group({
    name: this.personalInfoForm.name,
    email: this.personalInfoForm.email,
    phone: this.personalInfoForm.phone,
  });
  addressInfo = this._formBuilder.group({
    country: this.addressInfoForm.country,
    city: this.addressInfoForm.city,
    fullAddress: this.addressInfoForm.fullAddress,
    postcode: this.addressInfoForm.postcode,
    valid: this.addressInfoForm.valid,
  });
  cardInfo = this._formBuilder.group({
    number: this.cardInfoForm.cardNumber,
    name: this.cardInfoForm.cardName,

  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
  ) {
    console.log("cart opened")
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}
