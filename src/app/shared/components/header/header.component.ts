import { Component, OnInit } from '@angular/core';
import { throttleTime } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authReady = false
  navItems: any;
  allowNavigation: boolean

  constructor( private userService: UserService,) { }

  ngOnInit(): void {
    this.userService.user$.subscribe(user => {
      this.allowNavigation = user !== null ? true : false;
      this.authReady = true
    })
  }
  
  logoutHandler(){
    this.userService.logout()
  }

}
