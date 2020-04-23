import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { CartService } from 'src/app/addproduct.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router,
    private cartservice: CartService,
    private toastrservice: ToastrService) { }

  private getProductDetailsURL = "http://localhost:1237/catalog"
  singleProductDetails;
  Instock : boolean;

  async getSingleProductDetails() {
    let productID = localStorage.getItem("productID")
    let getProductDetailsFramedURL = `${this.getProductDetailsURL}/${productID}`
    console.log("URL Framed ", getProductDetailsFramedURL)
    try {
      const data = await this.http.get<any>(getProductDetailsFramedURL).toPromise();
      this.singleProductDetails = data;
      this.Instock = this.singleProductDetails.InStock
      console.log("data", this.singleProductDetails);
    }
    catch (err) {
      console.log(err);
    }
  }

  addToCart(selecteditem) {
    console.log("Inside addToCart method")
    if ((localStorage.getItem('token')) == undefined) {
      this.toastrservice.error("Log In to add to cart")
      this.router.navigate(['/signin'])
    }
    this.cartservice.addToCart(selecteditem).subscribe((response) => {
      console.log("value ", response);
      //this.router.navigate(['/cart']);
      this.showSuccessOnAddingToCart()
    },(error) => {
      console.log("error in adding to cart", error)
      switch (error.status) {
        case 409: this.toastrservice.warning(`Product Already in the Cart`)
        //this.router.navigate(['/cart']);
        break;
        //ToDo: More sever error handling to come...
      }
    })
  }

  showSuccessOnAddingToCart() {
    this.toastrservice.success("Added to Cart Successfully")
  }

  ngOnInit(): void {
    this.getSingleProductDetails()
  }

}
