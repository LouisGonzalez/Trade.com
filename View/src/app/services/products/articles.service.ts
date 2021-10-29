import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/models/product-search.model';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  readonly URL_API = GLOBAL.URL;

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

  getAllMyProducts(data: any){
    return this.http.post<any>(this.URL_API+'/getMyArticles',data,{
      withCredentials:true
    });
  }

  getAllMyServices(data: any){
    return this.http.post<any>(this.URL_API+'/getMyServices',data,{
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

  updateOneProduct(data: any){
    return this.http.patch<Post>(this.URL_API+'/post/Article',data,{
      withCredentials:true
    });
  }


}
