import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:any;
  registerForm: FormGroup;
  constructor(
    private userService: UserService,
    private userForms: FormBuilder
    ) { 
  }

  ngOnInit(): void{
    this.registerForm = this.userForms.group({
      name: new FormControl ("", Validators.required),
      email: new FormControl ("", [Validators.required , Validators.email]),
      password: new FormControl ("", [Validators.required, Validators.minLength(6)])

    })


    this.registerForm.valueChanges.subscribe((form) => {
      console.log(this.registerForm);  
    })
    
    
  }

  registeHandler(){
    this.userService.createUser(this.registerForm.value)
  }
  
}
