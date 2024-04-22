import {FormControl, Validators} from "@angular/forms";

export class CardInfoForm {
  cardNumber:FormControl<string | null> = new FormControl(null, [Validators.required]);
  cardDate:FormControl<string | null> = new FormControl(null, [Validators.required]);
  cardName:FormControl<string | null> = new FormControl(null, [Validators.required]);
  cardCvv:FormControl<string | null> = new FormControl(null, [Validators.required]);

  valid():boolean{
    return this.cardNumber.valid && this.cardNumber.valid && this.cardDate.valid && this.cardName.valid;
  }
}
