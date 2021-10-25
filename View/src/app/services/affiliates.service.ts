import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AffiliatesService {

  readonly URL_API = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(this.URL_API+'/searchStandard',{
      withCredentials:true
    });
  }

  createMember(data:any){
    return this.http.post<User>(this.URL_API+'/createMember',data,{
      withCredentials:true
    });
  }

}
