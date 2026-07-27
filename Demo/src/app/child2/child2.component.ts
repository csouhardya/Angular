import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Role } from '../models/role';
import { DemoService1Service } from '../services/demo-service1.service';
import { BehaviorSubject, filter, forkJoin, map, of, Subject } from 'rxjs';
import { formatDate } from '@angular/common';
import { ForbiddenNameValidator } from '../validators/forbidden-name.validator';
import { EmailValidator } from '../validators/email.validator';
import { PasswordValidator } from '../validators/password.validator';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})

export class Child2Component {
  @Input() message: string | null = null;
  @Output() notificationEmitter = new EventEmitter<string>();

  _demoService = inject(DemoService1Service)

  constructor(private formBuilder: FormBuilder) 
  { 
    this.roles = [
      {
        id: 1,
        value: 'Admin'
      },
      {
        id: 2,
        value: 'User'
      }
    ];

    
  }
  ngOnInIt() {}

  count: number = 0;
  subjectCount: number = 0;

  roles: Role[];

  employeesFromService: Employee[] = [new Employee()];

  isSubmitted: boolean=false;

  employeeForm: FormGroup = this.formBuilder.group({
      name: ['', [Validators.required, ForbiddenNameValidator]],
      email: ['', [Validators.required, EmailValidator]],
      password:['', [Validators.required, PasswordValidator]],
      phoneNumber:['',[Validators.required]],
      address: this.formBuilder.group({
        city:['',[Validators.required]]
      }),
      role:['', [Validators.required]],
      dob:[formatDate(new Date(), 'shortDate', 'en-US'),[Validators.required]]
    }
  )

  onSubmit() {
    this.isSubmitted = false;
    this.employeeForm.reset();
  }

  populate(): void{
    this.employeeForm.patchValue({
      name: 'souhardya',
      address: {
        city: 'kolkata'
      },
      password: 'password'
    })
  }

  tryBehaviousSubject():void {
    this._demoService.bvSubject.next(`from child ${this.count}`)
    this.count++;
  }

  trySubject(): void{
    this._demoService.subject.next(`from child subject ${this.subjectCount}`);
    this.subjectCount++;
  }

  getEmployees(): void{
    this._demoService.getDemo().subscribe({
      next: data => this.employeesFromService = data,
      error: err => console.log(err)
    })
  }

  tryPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {resolve('Data received')}, 2000)
    })
  }

  sendDataToParent() {
    this.notificationEmitter.emit('Notification from child 2');
  }

  


} 

