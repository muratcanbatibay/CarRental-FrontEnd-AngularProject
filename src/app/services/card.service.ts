import { ResponseModel } from './../models/responseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  apiUrl="https://localhost:44305/api/"
  constructor(private HttpClient:HttpClient) { }

  addCard(card:Card):Observable<ResponseModel>{
      let newPath=this.apiUrl+"creditcards/addtocard"
       return this.HttpClient.post<ResponseModel>(newPath,card)
  }

}
