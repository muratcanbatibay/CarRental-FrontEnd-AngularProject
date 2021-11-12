import { carResponseModel } from './../models/carResponseModel';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44305/api/cars/getall"
  constructor(private HttpClient:HttpClient) { }
  
  getCars():Observable <carResponseModel> { 
    return this.HttpClient
    .get<carResponseModel>(this.apiUrl)
    

}
}
