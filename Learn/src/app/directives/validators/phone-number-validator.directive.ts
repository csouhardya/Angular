import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function phoneNumberValidator(): ValidatorFn {
    return (phoneControl:AbstractControl): ValidationErrors | null => {
        if(phoneControl.value) {
            if (!phoneControl.value.toString().startsWith('9')) {
                return {phoneNumberDoesNotStartWith9: phoneControl.value};
            }
        }
        return null;
    }
}