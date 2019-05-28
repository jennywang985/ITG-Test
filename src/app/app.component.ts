import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ITG';
  myList:any=[];

  constructor(private myService:CarService) { }
 
  ngOnInit() {
    this.myService.getCars().subscribe(
      (result:any)=>{
        this.myList=result;
      })  
  }
}
