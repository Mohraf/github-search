import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserRequestService } from '../user-http/user-request.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  
  user!: User;
  username!: string;
  userService!: UserRequestService;

  submitUser(){
    this.userService.userRequest(this.username);
    this.user = this.userService.user;
    this.router.navigate(['home']);
  }

  constructor(private userRequestService: UserRequestService, private router: Router) {
    this.userService = userRequestService;
  }

  ngOnInit(): void {
  }

}
