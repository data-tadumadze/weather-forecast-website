import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private authservice: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }
  onSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    if (this.authservice.login(username, password)) {
      this.errorMessage = '';
    } else {
      this.errorMessage = "Incorrect username or password"
    }
  }
}
