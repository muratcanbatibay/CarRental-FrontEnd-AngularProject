import { ListResponseModel } from './../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { ThisReceiver } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  apiUrl="https://localhost:44305/api/"
  constructor(private HttpClient:HttpClient) { }

  addCard(card:Card):Observable<ResponseModel>{
      let newPath=this.apiUrl+"creditcards/cardadd"
       return this.HttpClient.post<ResponseModel>(newPath,card)
  }
  getCard(card:Card){
    let newPath= this.apiUrl+"creditcards/getalldetails"
    return this.HttpClient.get<ListResponseModel<Card>>(newPath)
  }

}
