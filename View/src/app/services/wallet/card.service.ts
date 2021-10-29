import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  readonly URL_API = GLOBAL.URL;

  constructor(private http: HttpClient) { }

  getCards(){
    return this.http.get<any>(this.URL_API+'/cards',{
      withCredentials:true
    });
  }

  getAddCard(){
    return this.http.get<any>(this.URL_API+'/addCard',{
      withCredentials:true
    });
  }

  getMyCards(){
    return this.http.get<any>(this.URL_API+'/myCards',{
      withCredentials:true
    });
  }

  postAddCard(data: any){
    return this.http.post<any>(this.URL_API+'/addCard', data,{
      withCredentials:true
    });
  }

  deleteCards(tarjeta: string){
    return this.http.delete<any>(this.URL_API+`/cards/${tarjeta}`,{
      withCredentials:true
    });
  }
}
