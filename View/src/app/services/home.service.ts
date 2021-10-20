import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  readonly URL_API = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getUser(){
    
    return this.http.get(this.URL_API+'/logged');
  }
}
