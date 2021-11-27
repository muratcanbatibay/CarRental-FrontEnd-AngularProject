import { Car } from './../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44305/api/"
  constructor(private HttpClient:HttpClient) { }
  
  getCars():Observable <ListResponseModel<Car>> { 
    let newPath = this.apiUrl+ "cars/getall"
    return this.HttpClient
    .get<ListResponseModel<Car>>(newPath)

}

getCarsByBrand(brandId:number):Observable <ListResponseModel<Car>> { 
  let newPath= this.apiUrl+ "cars/getallbybrandid?brandId="+brandId
  return this.HttpClient
  .get<ListResponseModel<Car>>(newPath)
  

}
}
