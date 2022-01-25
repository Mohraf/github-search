import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRequestService } from '../user-http/user-request.service';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {
  users: User[];
  user!: User;

  searchNewUser(user: User){
    // this.userService.userRequest()
    // console.log(this.userService.userRequest())
    this.users.push(user);

  }

  constructor(userService: UserService, private http: HttpClient, private userRequestService: UserRequestService) {
    this.users = userService.getUsers();
  }

  ngOnInit(): void {
    this.userRequestService.userRequest()
    this.user = this.userRequestService.user
    // console.log(this.user)
  }

}
