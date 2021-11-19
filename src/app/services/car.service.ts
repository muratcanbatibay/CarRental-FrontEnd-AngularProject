import { Car } from './../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44305/api/cars/getall"
  constructor(private HttpClient:HttpClient) { }
  
  getCars():Observable <ListResponseModel<Car>> { 
    return this.HttpClient
    .get<ListResponseModel<Car>>(this.apiUrl)
    

}
}
