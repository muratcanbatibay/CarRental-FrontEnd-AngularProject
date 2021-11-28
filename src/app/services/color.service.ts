import { ListResponseModel } from './../models/listResponseModel';
import { Color } from './../models/color';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44305/api/color/getall"
  constructor(private HttpClient:HttpClient) { }
  
  getColors():Observable <ListResponseModel<Color>> { 
    return this.HttpClient
    .get<ListResponseModel<Color>>(this.apiUrl)
   
}

}
