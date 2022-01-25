import { Injectable } from '@angular/core';
import { Users } from '../userList';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(){
    return Users
  }

  constructor() { }
}
