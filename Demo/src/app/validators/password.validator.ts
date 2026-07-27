import { AbstractControl, ValidationErrors } from "@angular/forms";

export function PasswordValidator(control: AbstractControl): ValidationErrors | null {
    const specialChars: string = '!@#$%%^&**()_?><';
    const specialCharsLst: string[] = specialChars.split(''); 
    if(control.value){
        var includesSpecialChar = specialCharsLst.some(char => control.value?.toString().includes(char))
        if(!includesSpecialChar) {
            return { PasswordIsInvalid: true};
        }
    }
    return null;
}