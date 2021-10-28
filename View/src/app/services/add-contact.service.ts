import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';
import { GLOBAL } from './global';


@Injectable({
  providedIn: 'root'
})
export class AddContactService {

  readonly URL_API = GLOBAL.URL;

  constructor(private http: HttpClient) { }

  getMyContacts(data:any):Observable<any>{
    return this.http.post(this.URL_API+'/getContacts',data, {
      withCredentials: true
    })
  }

  createContact(data:any):Observable<any>{
    return this.http.post<any>(this.URL_API+'/createContact',data, {
      withCredentials: true
    })
  }

  deleteContact(data:any):Observable<any>{
    return this.http.post(this.URL_API+'/deleteContact',data, {
      withCredentials:true
    })
  }

  getUnitUser(data:any){
    return this.http.post<User>(this.URL_API+'/unitUser',data, {
      withCredentials: true
    })
  }

}
