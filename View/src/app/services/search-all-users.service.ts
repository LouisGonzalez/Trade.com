import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchAllUsersService {

  readonly URL_API = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get(this.URL_API+'/allUsers');
  }
  
}

