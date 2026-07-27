import { AbstractControl, ValidationErrors } from "@angular/forms";

export function EmailValidator(control: AbstractControl): ValidationErrors | null {
    if(control.value){
        if(!control.value?.toString().includes('@.')){
            return {EmailIsInvalid: true}
        }
    }
    return null;
}