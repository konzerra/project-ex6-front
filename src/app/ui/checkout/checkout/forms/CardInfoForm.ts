import {FormControl, Validators} from "@angular/forms";
import {cardValidator} from "../../../../utils/bankCardValidator";
import {cvvValidator} from "../../../../utils/cvvValidator";

export class CardInfoForm {
  cardNumber:FormControl<string | null> = new FormControl(null, [Validators.required, cardValidator()]);
  cardDate:FormControl<string | null> = new FormControl(null, [Validators.required]);
  cardholderName:FormControl<string | null> = new FormControl(null, [Validators.required]);
  cardCvv:FormControl<string | null> = new FormControl(null, [Validators.required, cvvValidator()]);

  valid():boolean{
    return this.cardNumber.valid && this.cardDate.valid && this.cardCvv.valid && this.cardholderName.valid;
  }
}
