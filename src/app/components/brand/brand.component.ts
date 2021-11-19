import { BrandService } from '../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class BrandComponent implements OnInit {
 brands:Brand[]=[];
  constructor(private brandService:BrandService ) { }

  ngOnInit(): void {
    this.getBrands();

  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{this.brands=response.data})
    
}
}
