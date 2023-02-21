import { Component } from '@angular/core';
import { OrderDTO } from '../order-dto';
import { OrderOperationService } from '../order-operation.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  allOrders:OrderDTO [] = [];
  constructor(private orderService:OrderOperationService)
  {
    orderService.getAllOrdersFromSpring().subscribe(
      data=>{
          this.allOrders = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );
  }

}
