import { Injectable } from '@angular/core';
import { OrderDTO } from './order-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderOperationService {

  baseURL = 'http://localhost:6001';
  
  allOrderEndpoint = this.baseURL+'/order/orders';

  //orderArr:OrderDTO[] = [];
  constructor(private http:HttpClient) { }

  getAllOrdersFromSpring():Observable<OrderDTO[]>
  {
    console.log("inside service : "+this.allOrderEndpoint);
      return this.http.get<OrderDTO[]>(`${this.allOrderEndpoint}`);
  }
}
