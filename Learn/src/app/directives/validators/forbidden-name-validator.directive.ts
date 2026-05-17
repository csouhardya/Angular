import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidtor(nameRegex: RegExp): ValidatorFn { 
    return (control: AbstractControl): ValidationErrors  | null => {
        const forbiddenName = nameRegex.test(control.value);
        return forbiddenName ? {forbiddenName: {value: control.value}} : null;
    }
}