import { Component } from '@angular/core';
import { user } from '../models/user';
import { role } from '../models/role';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css',
})
export class TemplateDrivenComponent {
  constructor() {
    this.roles = [{id: 1, value: 'User'}, {id: 2, value: 'Admin'}, {id: 3, value:'Paid User'}, {id: 4, value: 'Long time user'}]
  }
  user: user = {} as user;
  roles: role[];
  submitted: boolean = false;

  onSubmit(form: NgForm){
    console.log(user);
    this.submitted = true;
    form.reset();
  }

}
