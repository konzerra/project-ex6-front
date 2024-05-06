import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";



export function cvvValidator() {
  return function(control: AbstractControl): ValidationErrors | null {
    let value = control.value
    if (!value) {
      return {
        cvvInvalid: false
      };
    }
    value = control.value.replace(" ", "");
    if(!isNumeric(value) || value.length > 3) {
      return { cvvInvalid: false }
    }
    if(control.value<100 || control.value>999){
      return { cvvInvalid: false }
    }
    return null;
  };
}


function isNumeric(str: string): boolean {
    return /^-?\d+(\.\d+)?$/.test(str);
}
