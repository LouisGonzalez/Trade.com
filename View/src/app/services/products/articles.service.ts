import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/models/product-search.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  readonly URL_API = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  postProduct(data: any){
    return this.http.post<any>(this.URL_API+'/post/Article',data,{
      withCredentials:true
    });
  }

  postService(data: any){
    return this.http.post<any>(this.URL_API+'/post/Service',data,{
      withCredentials:true
    });
  }

  getAllProducts(){
    return this.http.get<Post[]>(this.URL_API+'/post/Article',{
      withCredentials:true
    });
  }

  getAllServices(){
    return this.http.get<Post[]>(this.URL_API+'/post/Service',{
      withCredentials:true
    });
  }

  getOneProduct(data: any){
    return this.http.get<Post>(this.URL_API+`/post/${data}`,{
      withCredentials:true
    });
  }

}
