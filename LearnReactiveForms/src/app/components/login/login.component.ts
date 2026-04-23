import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  constructor(private loginService: LoginService, private router: Router) {}
  
  ngOnInit(): void {}

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    console.log(this.loginForm);
    this.loginService.userLogin(this.loginForm.controls.username?.value!, this.loginForm.controls.password?.value!)
      .subscribe(token => {
        localStorage.setItem('jwt', token);
        console.log(token);
        this.loginForm.reset();
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.loginForm.reset();
      },
    );
  }
}
