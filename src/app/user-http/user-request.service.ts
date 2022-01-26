import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user';
import { Repository } from '../repository';
// import { Users } from '../userList';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  user!: User
  repos!: Repository

  constructor(private http: HttpClient) {
    this.user = new User("", "", "", "")
    this.repos = new Repository("", "", "", "", "")
  }

  userRequest(username: string){
    interface ApiResponse{
      bio: string;
      login: string;
      avatar_url: string;
    }

    let promise = new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl + `${username}?` + environment.access_token).toPromise().then(response=>{
        
        if(response){
          console.log(response)
          this.user.username = response.login
          this.user.avatar_url = response.avatar_url
          this.user.bio = response.bio
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

  repoRequest(username: string){
    let promise = new Promise((resolve, reject)=>{
      let repoUrl = environment.apiUrl + `${username}` + '/repos';
      this.http.get<any>(repoUrl).toPromise().then(res=>{
        if(res){
          console.log(res)
          resolve(this.repoRequest)
        }
      },
      error=>{
        reject(error)
      })
    })
    return promise
  }
}
