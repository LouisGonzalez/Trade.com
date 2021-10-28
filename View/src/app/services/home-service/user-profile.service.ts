import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../models/user/user';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  selectedUser: User;

  readonly URL_API = GLOBAL.URL;

  constructor(private http: HttpClient) { 
    this.selectedUser = new User();
  }

  getUser(){
    return this.http.get<User>(this.URL_API+'/logged',{
      withCredentials:true
    });
  }
  
  updateUser(data: any){
    return this.http.post<User>(this.URL_API+'/logged', data, {
      withCredentials:true
    });
  }

}
