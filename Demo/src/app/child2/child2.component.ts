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


