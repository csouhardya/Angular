import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Role } from '../models/role';
import { forbiddenNameValidator } from '../validators/forbidden-name.validator';
import { PasswordMustContainSpecialCharValidator } from '../validators/password.validator';
import { EmailFormatValidator } from '../validators/email.validator';
import { DemoService1Service } from '../services/demo-service1.service';
import { BehaviorSubject, filter, forkJoin, map, of, Subject } from 'rxjs';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component implements OnInit {
  constructor(private formBuilder: FormBuilder, private demoService1: DemoService1Service) {
    this.roles = [{
      id: 1,
      value: 'admin'
    },
    {
      id: 2,
      value: 'user'
    },
    {
      id: 3,
      value: 'founder'
    }]
  }

  ngOnInit(): void {
    
  }

  public subject = new Subject<number>();
  public behaviourSubject = new BehaviorSubject<number>(10);
  isSubmitted: boolean = false;
  roles: Role[];
  employeeForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5), forbiddenNameValidator]],
    password: ['', [Validators.required, Validators.minLength(8), PasswordMustContainSpecialCharValidator]],
    address: this.formBuilder.group({
      city: ['', [Validators.required]],
      state: ['',[Validators.required]]
    }),
    email: ['', [Validators.required, EmailFormatValidator]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    role: ['', [Validators.required]]
  });

  onSubmit() {
    this.employeeForm.reset();
  }

  populate(){
    this.employeeForm.patchValue({
       name: 'Populated Name',
       address: {
        city: 'PopulatedCity'
       }
      });
  }

  fetchService() {
    this.demoService1.getEmployees().subscribe({
      next: value => console.log(value),
      error: err => console.log(err)
    })
  }

  trySubject() {
    this.subject.next(0);
    this.subject.subscribe(x=> console.log('Subject: '+x))
    this.subject.next(1);
    this.subject.next(2);
  }

  tryBehaviourSubject(){
    this.behaviourSubject.next(0);
    this.behaviourSubject.next(1);

    this.behaviourSubject.subscribe(x=> console.log('BehaviourSubject: '+x))
    this.behaviourSubject.next(2);
    this.behaviourSubject.next(3);
  }

  tryRxjsForkJoin(input1: number[], input2: number[]){
    forkJoin(of(input1), of(input2)).subscribe(([input1, input2]) => { console.log(input1, input2)})
  }

  tryRxjsFilter() {
    of(1,2,3,4,5).pipe(filter( x=> x> 1)).subscribe({ next: val => console.log(val)})
  }

  tryRxjsMap(input: number[]){
    of(input).pipe(map( n =>  n.filter(n => n> 1))).subscribe({ next: val => console.log(val)});
  }

  divClick(){
    console.log('div click')
  }

  btnClick(){
    console.log('btn click')
  }


}
