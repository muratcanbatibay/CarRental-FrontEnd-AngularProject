import { Car } from 'src/app/models/car';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

cars:Car[]=[]


  constructor( private activatedRoute:ActivatedRoute,
               private carService:CarService,
                 ) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response => { this.cars = response.data })
    
  }

}
