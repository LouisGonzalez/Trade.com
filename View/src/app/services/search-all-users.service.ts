import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class SearchAllUsersService {

  readonly URL_API = GLOBAL.URL;

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get(this.URL_API+'/allUsers');
  }
  
}

