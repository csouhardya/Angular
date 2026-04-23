import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  username: FormControl = new FormControl();
  password: FormControl = new FormControl();

  constructor(private loginService: LoginService) {}
  
  ngOnInit(): void {}

  Login() {
    console.log(this.username,this.password);
    this.loginService.userLogin(this.username.value, this.password.value)
      .subscribe(token => {
        localStorage.setItem('jwt', token);
        console.log(token);
        this.username.reset();
        this.password.reset();
      },
      error => {
        console.log(error);
        this.username.reset();
        this.password.reset();
      },
    );
  }
}
