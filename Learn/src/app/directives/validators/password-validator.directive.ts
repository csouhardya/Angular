import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidator(): ValidatorFn {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{1,}$/;
    return (passwordControl:AbstractControl): ValidationErrors | null => {
        if(passwordControl.value) {
            return passwordRegex.test(passwordControl.value) ? {passwordDoesnotMatchRequirement: passwordControl.value} : null;
        }
        return null;
    }
}