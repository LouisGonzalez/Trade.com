import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  readonly URL_API = "http://localhost:3000";  

  constructor(private http: HttpClient) { }

  getMyNotifications(data:any):Observable<any>{
    return this.http.post(this.URL_API+'/notify',data,{
      withCredentials:true
    });
  }

  getAllNotifications(data:any):Observable<any>{
    return this.http.post(this.URL_API+'/allNotify',data, {
      withCredentials: true
    })
  }

/*  createNotify(data:any):Observable<any>{
    return this.http.post(this.URL_API+'/notify',data);
  }*/

  updateViewNotify(data:any):Observable<any>{
    return this.http.put(this.URL_API+'/notify',data,{
      withCredentials:true
    });
  }
}