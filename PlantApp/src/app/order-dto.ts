export class OrderDTO {

    bookingOrderId:number;
    orderDate:number;
	transactionMode:string;
	quantity:number;
	totalCost:number;

    constructor(
        bookingOrderId:number,
        orderDate:number,
        transactionMode:string,
        quantity:number,
        totalCost:number
    )
    {
        this.bookingOrderId = bookingOrderId;
        this.orderDate = orderDate;
        this.transactionMode = transactionMode;
        this.quantity = quantity;
        this.totalCost = totalCost;
    }
}
