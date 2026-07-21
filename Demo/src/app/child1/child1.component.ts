import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Role } from '../models/role';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
    
  }

  roles: Role[] = [
    {
      id: 1,
      value: 'admin'
    },
    {
      id:2,
      value: 'user'
    },
    {
      id:3,
      value: 'founder'
    }
  ]
  isSubmitted: boolean = false;
  employee: Employee = new Employee();

  onSubmit(form: NgForm) {
    this.isSubmitted = true;
    console.log(this.employee);
    form.reset();
  }
}
