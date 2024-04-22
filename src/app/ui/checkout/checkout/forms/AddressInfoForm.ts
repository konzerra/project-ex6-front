import {FormControl, Validators} from "@angular/forms";

export class AddressInfoForm {
  country: FormControl<string | null> = new FormControl('', [Validators.required]);
  city: FormControl<string | null> = new FormControl('', [Validators.required]);
  fullAddress: FormControl<string | null> = new FormControl('', [Validators.required]);
  postcode: FormControl<string | null> = new FormControl('', [Validators.required]);

  valid():boolean{
    return this.country.valid && this.country.valid && this.city.valid && this.fullAddress.valid;
  }
}
