import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { CartService } from 'src/app/addproduct.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {

  listOfAllProducts = [];
  private getAllProductsUrl = "http://localhost:1237/catalog";

  constructor(private http: HttpClient, 
    private router:Router, 
    private cartservice: CartService,
    private toastrservice:ToastrService) { }

  getProductDetails() {
    return this.http.get<any>(this.getAllProductsUrl).toPromise().then((data) => {
      console.log(data)
      this.listOfAllProducts=data
    }).catch((err => {
      console.log(err)
    }))
  }
  ngOnInit(): void {
    this.getProductDetails()
  }

  addToCart(selecteditem) {
    if ((localStorage.getItem('token')) == undefined) {
      this.toastrservice.error("Log In to add to cart")
      this.router.navigate(['/signin'])
    }
    this.cartservice.addToCart(selecteditem).
    subscribe(
      (response) => {
      console.log("value ", response);
      //this.router.navigate(['/cart']);
      this.showSuccessOnAddingToCart()
    },
    (error) => {
      console.log("error in adding to cart", error)
      switch (error.status) {
        case 409: this.toastrservice.warning(`Product Already in the Cart`)
        //this.router.navigate(['/cart']);
        break;
        //ToDo: More sever error handling to come...
      }
    })
  }

  goToDetailsPage(productID: string) {
    localStorage.setItem("productID", productID)
    this.router.navigate(['/productdetails'])
  }

  showSuccessOnAddingToCart() {
    this.toastrservice.success("Added to Cart Successfully")
  }
}
