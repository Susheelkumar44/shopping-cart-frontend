import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/addorders.service';
//import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router,
    private orderService: OrderService,
    private toastrservice: ToastrService) { }

  cartProductDetails;
  cartDetails;

  private getCartDetailsURL = "http://localhost:1236/cart";
  private updateCartDetailsQuantityURL = "http://localhost:1236/cart/quantity"
  private deleteProductFromCartURL = "http://localhost:1236/cart";
  private removeProductsFromCartURL = "http://localhost:1236/cart/del"

  createAuthorizationHeader(headers: HttpHeaders) {
    return headers.append('Authorization', 'Bearer ' +
      localStorage.getItem('token'));
  }

  async getProductDetailsFromCart() {
    if ((localStorage.getItem('token')) == undefined) {
      this.toastrservice.error("Log In to see cart")
      this.router.navigate(['/signin'])
    }
    let headers = new HttpHeaders();
    let headersData = this.createAuthorizationHeader(headers);
    try {
      const data = await this.http.get<any>(this.getCartDetailsURL, {
        headers: headersData
      }).toPromise();
      console.log(data);
      this.cartProductDetails = data;
      if (this.cartProductDetails.grandTotal == 0) {
        this.router.navigate(['/emptyCart']);
        console.log("Oops! No Products in Cart");
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  async onAddQuantity(productID: string, quantity: number) {

    console.log("productID", productID)
    let headers = new HttpHeaders();
    let headersData = this.createAuthorizationHeader(headers);

    let updateQuantity = {
      "productID": productID,
      "quantity": quantity + 1
    }
    try {
      const data = await this.http.put(this.updateCartDetailsQuantityURL, updateQuantity, {
        headers: headersData
      }).toPromise();
      console.log(data);
      this.getProductDetailsFromCart();
    }
    catch (err) {
      console.log(err);
    }
  }

  async onRemoveQuantity(productID: string, quantity: number) {
    console.log("productID", productID)
    let headers = new HttpHeaders();
    let headersData = this.createAuthorizationHeader(headers);

    let updateQuantity = {
      "productID": productID,
      "quantity": quantity - 1
    }
    if ((updateQuantity.quantity) <= 0 ){
      this.deleteProductFromCart(productID)
    }
    try {
      const data = await this.http.put(this.updateCartDetailsQuantityURL, updateQuantity, {
        headers: headersData
      }).toPromise();
      console.log(data);
      this.getProductDetailsFromCart();
    }
    catch (err) {
      console.log(err);
    }
  }

  async deleteProductFromCart(productID: string) {

    let headers = new HttpHeaders();
    let headersData = this.createAuthorizationHeader(headers);
    let deleteProductURL = `${this.deleteProductFromCartURL}/${productID}`
    console.log("delete url is: ", deleteProductURL)

    try {
      const data = await this.http.delete(deleteProductURL, {
        headers: headersData
      }).toPromise();
      console.log(data);
      this.getProductDetailsFromCart();
    }
    catch (err) {
      console.log(err);
    }
  }

  async placeOrder(productDetails) {
    let headers = new HttpHeaders();
    let headersData = this.createAuthorizationHeader(headers);
    console.log("Order Details: ", productDetails)
    this.orderService.placeOrder(productDetails).subscribe(
      (response) => {
        console.log("value ", response)
        console.log("data of order :", productDetails.products)
        let dat = (productDetails.products).map(({productID}) => productID) 
        console.log("Dat: ", dat)

        let removeProductsFromCartAfterPost = {
            "products" : dat
        }
        const data = this.http.put(this.removeProductsFromCartURL, removeProductsFromCartAfterPost,  {
          headers : headersData
      }).toPromise();
      console.log("Call after deleting products ",data)
      this.router.navigate(['/orderconfirmation'])
      },
      (error) => {
        console.log("Error in posting orders ", error)
      }
    )
  }

  ngOnInit(): void {
    this.getProductDetailsFromCart();
  }

}
