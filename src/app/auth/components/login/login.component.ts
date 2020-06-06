import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private userService: UserService,
    private userForms: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.userForms.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
  }

  loginHandler(){
    const {email, password } = this.loginForm.value
    this.userService.login(email, password);
    event.preventDefault()
  }
}
