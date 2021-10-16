import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserLogin } from '../models/user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userLogin: UserLogin;

  readonly URL_API = "http://localhost:3000";

  constructor(private http: HttpClient) {
    this.userLogin = new UserLogin();
  }

  getLoginView(){
    // return this.http.get(this.URL_API+'/login');
    return this.http.get(this.URL_API+'/login',{
      withCredentials:true
    });
  }

  postLogin(data: any){
    return this.http.post(this.URL_API+'/login', data,{
        withCredentials:true
      });
    // return this.http.post(this.URL_API+'/login', data,{
    //   observe:'body',
    //   withCredentials:true,
    //   headers:new HttpHeaders().append('Content-Type','application/json')
    // });

  }
}
