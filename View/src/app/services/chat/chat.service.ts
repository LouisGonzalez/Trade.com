import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly URL_API = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  postChat(data:any){

    /*return this.http.post<User>(this.URL_API+'/logged', data, {
      withCredentials:true
    });*/

    return this.http.post(this.URL_API+'/logged', data, {
      withCredentials:true
    });
  }
}
