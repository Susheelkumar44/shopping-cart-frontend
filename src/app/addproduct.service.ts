import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class CartService {
    private addToCartUrl = "http://localhost:1236/cart"
    constructor(private http:HttpClient) { }

    createAuthorizationHeader(headers: HttpHeaders) {
       return headers.append('Authorization', 'Bearer ' +
         localStorage.getItem('token')); 
      }

    addToCart(item) {
        let headers = new HttpHeaders();
        let headersData = this.createAuthorizationHeader(headers);
        console.log("Token",localStorage.getItem('token'))
        console.log("Headers Formed is", headersData)
        let productsToCart = {
            "productID" : item._id,
            "quantity" : 1
        }
        let dataReturned = this.http.put(this.addToCartUrl, productsToCart, {
            headers : headersData
        });
        console.log("Data returned from AddToCartSeparate",dataReturned)
        return dataReturned
    }
}