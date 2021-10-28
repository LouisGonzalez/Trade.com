import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  readonly URL_API = GLOBAL.URL;

  constructor(private http: HttpClient) { }

  getUser(){
    
    return this.http.get(this.URL_API+'/logged',{
      withCredentials:true
    });
  }
}
