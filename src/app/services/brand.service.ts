import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from './../models/listResponseModel';
import { Brand } from './../models/brand';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

    apiUrl="https://localhost:44305/api/cars/getall"
    constructor(private HttpClient:HttpClient) { }
    
    getBrands():Observable <ListResponseModel<Brand>> { 
      return this.HttpClient
      .get<ListResponseModel<Brand>>(this.apiUrl)
      
  
  }
  
  
}
