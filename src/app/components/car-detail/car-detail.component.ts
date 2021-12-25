import { CardService } from './../../services/card.service';
import { Car } from 'src/app/models/car';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

cars:Car[]=[]


  constructor(
               private carService:CarService,
               private toastrService:ToastrService,
               
                 ) { }

  ngOnInit(): void {
    this.getCarDetails();
    
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response => { this.cars = response.data })
    
  }
  getRent(car:Car){
    this.toastrService.success("Kiralama Sayfasına Yönlendiriliyorsunuz")
  }
  

}
