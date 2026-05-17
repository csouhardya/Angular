import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function dateOfBirthValidator(): ValidatorFn {
    return (dobControl: AbstractControl): ValidationErrors | null => {
        if(dobControl.value) {
            return dobControl.value < Date.now() ? {dateOfBirthGreaterThanToday: dobControl.value} : null;
        }
        return null;
    }
}