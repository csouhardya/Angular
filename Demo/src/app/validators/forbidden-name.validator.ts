import { AbstractControl, ValidationErrors } from "@angular/forms";
export function ForbiddenNameValidator(control: AbstractControl): ValidationErrors | null{
    if(control.value){
        if(control.value?.toString().includes('admin')){
            return {NameIsInvalid: true};
        }
    }
    return null;
}