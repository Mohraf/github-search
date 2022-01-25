import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  newUser = new User("");
  @Output() searchUser = new EventEmitter<User>();

  submitUser(){
    this.searchUser.emit(this.newUser)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
