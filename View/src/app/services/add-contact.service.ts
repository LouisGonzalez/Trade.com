import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';


@Injectable({
  providedIn: 'root'
})
export class AddContactService {

  readonly URL_API = "http://localhost:3000";;

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