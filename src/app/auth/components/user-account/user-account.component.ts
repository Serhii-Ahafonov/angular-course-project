import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../../services/data-storage.service';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  user: any
  userForm: FormGroup
  editModeEnabled:boolean
  show:boolean = false

  constructor(
    private accountData: DataStorageService,
    private userService: UserService,
    private fb: FormBuilder,
    

  ) { 
    this.userForm=this.fb.group({
        name: ["", Validators.required],
        surname: ["", Validators.required],
        age: ["", Validators.required],
        email: ["", [Validators.required , Validators.email]]
      })
  }

  ngOnInit(): void {
    this.user=this.userService.user$.subscribe(user => {
      const { name,surname, age, email} = user
      this.userForm.setValue({
        name: name,
        surname: surname,
        age: age,
        email: email
      })

    });
    
  };
  swithEditMode(){
    this.editModeEnabled = !this.editModeEnabled
    this.show = !this.show
  
  };

  saveChangesHandler(){
    this.accountData.upadteUserDataOnDB(this.userService.userId, this.userForm.value)
    this.show = !this.show
    this.editModeEnabled = !this.editModeEnabled
  }

}
