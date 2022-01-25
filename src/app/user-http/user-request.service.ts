import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user';
// import { Repository } from '../repository';
// import { Users } from '../userList';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  user!: User

  constructor(private http: HttpClient) {
    this.user = new User("")
  }

  userRequest(){
    interface ApiResponse{
      login: string;
    }

    let promise = new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl + 'mohraf?' + environment.access_token).toPromise().then(response=>{
        if(response){
          console.log(response)
          this.user.username = response.login
          resolve(this.userRequest)
        }
      },
      error=>{
        this.user.username = "User not found"

        reject(error)
      })
    })
    return promise
  }
}
