import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddContactService {

  readonly URL_API = "http://localhost:3000";

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

}
