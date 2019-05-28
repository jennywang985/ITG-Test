import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  car:any=[]

  @Input()  cars = ""
  
  constructor(private myService:CarService) { }
 
  ngOnInit(){
    this.myService.getCar(this.cars['id']).subscribe(
      (result:any)=>{
          this.car = result;
    })
  }
}
