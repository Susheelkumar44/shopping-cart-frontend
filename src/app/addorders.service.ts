import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private placeOrderURL = "http://localhost:8083/orders"
    private removeProductsFromCartURL = "http://localhost:1236/cart/del"
    constructor(private http:HttpClient){}

    createAuthorizationHeader(headers: HttpHeaders) {
        return headers.append('Authorization', 
          localStorage.getItem('token')); 
       }
    
    placeOrder(items: any) {
        let headers = new HttpHeaders();
        let headersData = this.createAuthorizationHeader(headers);
        console.log("Token",localStorage.getItem('token'))
        console.log("Headers Formed is", headersData)
        // console.log("data of order :", items.products)
        // let dat = (items.products).map(({productID}) => productID) 
        // console.log("Dat: ", dat)

        // let removeProductsFromCartAfterPost = {
        //     "products" : dat
        // }

        //console.log("To Delete from cart: ", removeProductsFromCartAfterPost)

        let dataReturned = this.http.post(this.placeOrderURL, items, {
            headers : headersData
        });
        // let value = this.http.put(this.removeProductsFromCartURL, removeProductsFromCartAfterPost,  {
        //     headers : headersData
        // });
        // console.log("value for delete: ", value)

        return dataReturned;
        
        
    }
}