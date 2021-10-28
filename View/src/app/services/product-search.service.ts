import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  readonly URL_API = GLOBAL.URL
  articles:any[];

  constructor(private http: HttpClient) { }

  getPost():Observable<any>{
    // console.log('holaasdfasfa '+this.http.get(this.URL_API+'/search'));
    return this.http.get(this.URL_API+'/search',{
      withCredentials:true
    });
  }

}
