import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/cdk/stepper";
import {BreakpointObserver} from "@angular/cdk/layout";
import {PersonalInfoForm} from "./forms/PersonalInfoForm";
import {AddressInfoForm} from "./forms/AddressInfoForm";
import {CardInfoForm} from "./forms/CardInfoForm";
import {Cart} from "../../../domain/cart/Cart";
import {CartViewService} from "../cart.view.service";
import {checkFormControl} from "../../../utils/checkFormControl";
import {UserService} from "../../../domain/user/user.service";
import {UserViewService} from "../../user/user.view.service";
import {User} from "../../../domain/user/User";
import {DialogsService} from "../../../shared/dialogs.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
  personalInfoForm = new PersonalInfoForm()
  addressInfoForm = new AddressInfoForm()
  cardInfoForm = new CardInfoForm()

  cart: Cart[] = []
  totalPrice = 0
  minDate: string='';
  maxDate: string='';

  personalInfo = this._formBuilder.group({
    name: this.personalInfoForm.name,
    email: this.personalInfoForm.email,
    phone: this.personalInfoForm.phone,
  });
  addressInfo = this._formBuilder.group({
    country: this.addressInfoForm.country,
    city: this.addressInfoForm.city,
    fullAddress: this.addressInfoForm.fullAddress,
    postcode: this.addressInfoForm.postalCode,
    valid: this.addressInfoForm.valid,
  });
  cardInfo = this._formBuilder.group({
    number: this.cardInfoForm.cardNumber,
    name: this.cardInfoForm.cardholderName,

  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    public cartService: CartViewService,
    private userViewService: UserViewService,
    private dialogsService: DialogsService,
  ) {
    this.initializeDates();
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    let user = this.userViewService.getUser()
    this.personalInfoForm.name.setValue(user.name)
    this.personalInfoForm.email.setValue(user.email)
    let address = this.userViewService.getAddress()
    this.addressInfoForm.country.setValue(address.country)
    this.addressInfoForm.city.setValue(address.city)
    this.addressInfoForm.fullAddress.setValue(address.fullAddress)
    this.addressInfoForm.postalCode.setValue(address.postalCode)

    this.cartService.$cartList.subscribe({
      next: (cart)=>{
        this.cart = cart
        this.setTotalPrice()
      }
    })
  }

  protected readonly checkFormControl = checkFormControl;
  private initializeDates(): void {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-based
    const currentYear = currentDate.getFullYear();

    // Setting the minimum date to the current month and year
    this.minDate = `${currentYear}-${currentMonth.toString().padStart(2, '0')}`;

    // Setting the maximum date to 12 years from now
    const maxYear = currentYear + 12;
    this.maxDate = `${maxYear}-${currentMonth.toString().padStart(2, '0')}`;
  }

  order() {
    if(!this.cardInfoForm.valid() || !this.personalInfoForm.valid() || !this.addressInfoForm.valid()){
      this.dialogsService.openInfoDialog("Fill out all required fields")
      return
    }
    this.cartService.clearCart()
    this.dialogsService.openInfoDialog("Order was placed! We will contact you soon")
  }
  setTotalPrice(){
    let sum = 0;
    this.cart.forEach(item=>{
      sum+=item.quantity*item.product.price
    })
    this.totalPrice=sum;
  }
}
