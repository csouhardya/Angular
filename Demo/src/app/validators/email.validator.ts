import { AbstractControl, ValidationErrors } from "@angular/forms";

export function EmailFormatValidator(control: AbstractControl): ValidationErrors | null {
    if(control.value) {
        if(!control.value.includes('@')){
            return { EmailIsInvalid: true};
        }
    }
    return null;
}