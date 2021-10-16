import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  selectedUser: User;

  readonly URL_API = "http://localhost:3000";

  constructor(private http: HttpClient) { 
    this.selectedUser = new User();
  }

  getUser(){
    return this.http.get<User>(this.URL_API+'/logged',{
      withCredentials:true
    });
  }
  
  editUser(data: any){
    return this.http.post<User>(this.URL_API+'/logged', data, {
      withCredentials:true
    });
  }

}
