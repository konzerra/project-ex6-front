import {FormControl, Validators} from "@angular/forms";

export class PersonalInfoForm {
  name:FormControl<string | null> = new FormControl("", [Validators.required]);
  email:FormControl<string | null> = new FormControl("", [Validators.required]);
  phone:FormControl<string | null> = new FormControl("", [Validators.required]);


  valid():boolean{
    return this.name.valid && this.email.valid && this.phone.valid;
  }
}
