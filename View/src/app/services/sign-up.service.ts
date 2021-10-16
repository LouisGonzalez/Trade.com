import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  readonly URL_API = "http://localhost:3000";

  constructor(private http: HttpClient) { }

    
  getSignUpView(){
    return this.http.get(this.URL_API+'/signup');
  }

  postSignUp(data: any){
    return this.http.post(this.URL_API+'/signup', data);
  }


}
