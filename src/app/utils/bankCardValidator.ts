import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";


export function cardValidator(): ValidatorFn {
  return function(control: AbstractControl): ValidationErrors | null {
    let value = control.value
    if (!value) {
      return {
        cardInvalid: true
      };
    }
      // Remove all non-digit characters
    const sanitized = value.replace(/\D+/g, '');
    console.log(sanitized+ " Sanitized")
    if(sanitized.length < 8) {
      return {
        cardInvalid: true
      };
    }
    let sum = 0;
    let shouldDouble = false; // We start with the rightmost digit and double every second digit

    // Loop through values from the right (Luhn algorithm implementation)
    for (let i = sanitized.length - 1; i >= 0; i--) {
      let digit = Number(sanitized.charAt(i));

      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9; // Subtract 9 if doubled value is greater than 9
      }

      sum += digit;
      shouldDouble = !shouldDouble; // Alternate the flag
    }

    // Valid if the sum modulo 10 is zero
    return (sum % 10) === 0 ? null : { cardInvalid: true };
  };
}
