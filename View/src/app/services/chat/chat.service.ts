import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly URL_API = GLOBAL.URL

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
