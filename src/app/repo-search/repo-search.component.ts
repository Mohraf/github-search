import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import { UserRequestService } from '../user-http/user-request.service';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {
  user!: User
  repos!: Repository

  constructor(private http: HttpClient, private userService: UserRequestService) {
    
  }

  ngOnInit(): void {
    this.userService.userRequest(this.user.username)
    this.user = this.userService.user
    
  }

}
