import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CarService {

  constructor(
    private myHttp:HttpClient
  ) { }

  //Solve the problem:'Access-Control-Allow-Methods', use: proxy.config.json
  getCars(): Observable<any> {
    return this.myHttp.get('/api/vehicles/').pipe(
      map((response: Response) => response || {}));
  }

  getCar(id): Observable<any> {
    return this.myHttp.get('api/vehicle/'+id).pipe(
      map((response: Response) => response || {}));
  }
}
