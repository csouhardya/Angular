import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormResetEvent, FormSubmittedEvent, PristineChangeEvent, StatusChangeEvent, TouchedChangeEvent, Validators, ValueChangeEvent } from '@angular/forms';
import { user } from '../models/user';
import { role } from '../models/role';
import { forbiddenNameValidtor } from '../directives/validators/forbidden-name-validator.directive';
import { phoneNumberValidator } from '../directives/validators/phone-number-validator.directive';
import { passwordValidator } from '../directives/validators/password-validator.directive';
import { dateOfBirthValidator } from '../directives/validators/date-of-birth-validator.directive';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  constructor(private formBuilder: FormBuilder){
      this.roles = [{id: 1, value: 'User'}, {id: 2, value: 'Admin'}, {id: 3, value:'Paid User'}, {id: 4, value: 'Long time user'}];

      // check for events
      this.userForm.events.subscribe(e => {
        if( e instanceof ValueChangeEvent) { console.log("e value changed to" + e.value); }
        if( e instanceof StatusChangeEvent) { console.log("e status changed to" + e.status); }
        if( e instanceof PristineChangeEvent) { console.log("e pristine changed to" + e.pristine); }
        if( e instanceof TouchedChangeEvent) { console.log("e touch changed to" + e.touched); }
        if( e instanceof FormResetEvent) { console.log("form is reset"); }
        if( e instanceof FormSubmittedEvent) { console.log("form is submitted"); }
      })
  }

  roles: role[];
  submitted: boolean = false;

  // using form builder
  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5), forbiddenNameValidtor(/admin/i)]],
    password: ['', [Validators.required, Validators.maxLength(8), Validators.maxLength(20), passwordValidator()]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, phoneNumberValidator()]],
    address: this.formBuilder.group({
      city: ['', [Validators.required]],
      state: ['', [Validators.required, Validators.minLength(6)]],
      zip: ['', [Validators.required, Validators.min(6)]]
    }),
    dateOfBirth: ['', [Validators.required, dateOfBirthValidator()]],
    role: ['', [Validators.required]]
  })

  // //using formGroup
  // userForm = new FormGroup({
  //   name: new FormControl(),
  //   password: new FormControl(),
  //   email: new FormControl(),
  //   phoneNumber: new FormControl(),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     state: new FormControl(),
  //     zip: new FormControl()
  //   }),
  //   dateOfBirth: new FormControl(),
  //   role: new FormControl()
  // })

  populateFormGroup() {} // TODO

  onSubmit(){} //TODO
}
