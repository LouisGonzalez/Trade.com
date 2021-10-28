import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  readonly URL_API = GLOBAL.URL;

  constructor(private http: HttpClient) { }

    
  getSignUpView(){
    return this.http.get(this.URL_API+'/signup',{
      withCredentials:true
    });
  }

  postSignUp(data: any){
    return this.http.post(this.URL_API+'/signup', data,{
      withCredentials:true
    });
  }


}
