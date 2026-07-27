import { Component, EventEmitter, inject, Input, OnInit, Output,  } from '@angular/core';
import { Employee } from '../models/employee';
import { NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Role } from '../models/role';
import { DemoService1Service } from '../services/demo-service1.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})


export class Child1Component implements OnInit {
  _demoservice = inject(DemoService1Service);
  constructor() {
    this.bvSubject$.subscribe({
      next: data => this.bvValueFromChild2 = data,
      error: err => console.log(err)
    });

    this.subject$.subscribe({
      next: data => this.subjectValueFromChild2 = data,
      error: err => console.log(err)
    });
  }
  ngOnInit() {}

  @Input() message: string | null = '';

  @Output() notificationEmitter= new EventEmitter<string>()

  bvSubject$ = this._demoservice.bvSubject.asObservable();
  subject$ = this._demoservice.subject.asObservable();

  bvValueFromChild2: string = '';
  subjectValueFromChild2: string = '';

  roles: Role[] = [
    {
      id: 1,
      value: 'Admin'
    },
    {
      id: 2,
      value: 'User'
    }
  ]

  employee: Employee = new Employee();

  isSubmitted : boolean = false;

  onSubmit(): void {
    this.isSubmitted = true;
    this.employee = new Employee();
  }

  sendDataToParent(): void {
    this.notificationEmitter.emit('Notification from child1');
  }


}