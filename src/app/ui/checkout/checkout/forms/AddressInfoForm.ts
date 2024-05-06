import {FormControl, Validators} from "@angular/forms";

export class AddressInfoForm {
  country: FormControl<string | null> = new FormControl('', [Validators.required]);
  city: FormControl<string | null> = new FormControl('', [Validators.required]);
  fullAddress: FormControl<string | null> = new FormControl('', [Validators.required]);
  postalCode: FormControl<string | null> = new FormControl('', [Validators.required]);

  valid():boolean{
    return this.country.valid && this.city.valid && this.postalCode.valid && this.fullAddress.valid;
  }
}
