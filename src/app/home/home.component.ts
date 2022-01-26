import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repository } from '../repository';
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
  // users: User[];
  user!: User;
  username!: string;
  userService!: UserRequestService;
  repos!: Repository;

  searchNewUser(user: User){
    this.userService.userRequest(this.user.username)
  }

  constructor(private router: Router, gitUserService: UserRequestService) {
    this.userService = gitUserService;
  }

  ngOnInit(): void {
    this.userService.userRequest(this.username);
    this.user = this.userService.user;
    console.log(this.user);

    this.userService.repoRequest(this.username);
    this.repos = this.userService.repos;
    console.log(this.repos)
    
  }

}
