import {FormControl} from "@angular/forms";

export function checkFormControl(formControl: FormControl): boolean {
  return formControl.invalid && (formControl.dirty || formControl.touched)
}
