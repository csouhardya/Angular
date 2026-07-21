import { AbstractControl, ValidationErrors } from "@angular/forms";

export function PasswordMustContainSpecialCharValidator(control: AbstractControl): ValidationErrors | null {
    const specialChars: string = '!@#$%^&*';
    const specialCharsList: string[] = specialChars.split('');
    if(control.value != null) {
       var hasSpecialChar: boolean = specialCharsList.some(char => control.value.toString().includes(char));
       if(!hasSpecialChar){
        return { SpecialCharRequired: true}
       }
    }
    return null;
}