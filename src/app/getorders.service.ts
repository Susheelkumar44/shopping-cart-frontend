import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class GetOrderService {
    constructor(private http:HttpClient) { }
    private getOrderDetailsURL = "http://localhost:8083/orders"
    createAuthorizationHeader(headers: HttpHeaders) {
      return headers.append('Authorization', 
        localStorage.getItem('token'));
    }

    getAllOrderDetails() {
      let headers = new HttpHeaders();
      let headersData = this.createAuthorizationHeader(headers);
      let allOrderDetails = this.http.get(this.getOrderDetailsURL, {
        headers: headersData
      })
      return allOrderDetails
    }
}
