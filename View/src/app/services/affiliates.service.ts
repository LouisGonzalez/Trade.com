import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffiliatesService {

  readonly URL_API = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(this.URL_API+'/searchStandard');
  }

  createMember(data:any){
    return this.http.post(this.URL_API+'/createMember',data);
  }

}
