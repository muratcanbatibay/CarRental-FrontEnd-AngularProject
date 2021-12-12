import { Car } from 'src/app/models/car';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: Car[], filterText:string): Car[] {
     filterText= filterText? filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Car)=>p.carName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
