import { AbstractControl, ValidationErrors } from "@angular/forms";

export function forbiddenNameValidator(control: AbstractControl): ValidationErrors | null {
    if(control.value?.toString().includes('admin')){
        return {forbiddenName: true};
    }
    return null;
}