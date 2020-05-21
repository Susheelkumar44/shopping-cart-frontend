import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { GetOrderService } from 'src/app/getorders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router,
    private getOrderDetails: GetOrderService,
    private toastrservice: ToastrService) { }

    allOrderDetails;
    async getAllOrderDetails() {
      this.getOrderDetails.getAllOrderDetails().subscribe((data) => {
        console.log(data);
        this.allOrderDetails = data;
      },(error) => {
        console.log("Error in getting the order details data: ", error)
      })
    }


  ngOnInit(): void {
    this.getAllOrderDetails();
  }

}
