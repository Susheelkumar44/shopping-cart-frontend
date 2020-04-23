import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router'
import { CartService } from 'src/app/addproduct.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productnamesearch',
  templateUrl: './productnamesearch.component.html',
  styleUrls: ['./productnamesearch.component.css']
})
export class ProductnamesearchComponent /*implements OnInit*/{

  listOfAllProducts = [];
  private getAllProductsURLSearch = "http://localhost:1237/catalog?";
  constructor(private http: HttpClient,
              private router:Router, 
              private cartservice: CartService,
              private toastrservice:ToastrService) { }

  getProductDetails() {
    const params = new HttpParams()
    .set('productName', localStorage.getItem('searchParameter'))
    console.log("Search Parameter ", localStorage.getItem('searchParameter'))
    let searchParam = this.getAllProductsURLSearch + params;
    console.log("Search URL is ", searchParam)
    return this.http.get<any>(searchParam).toPromise().then((data) => {
      console.log("Data recieved", data);
      this.listOfAllProducts = data;
    }).catch((err) => {
      console.log(err)
    })
  }

  ngOnInit(): void {
    this.getProductDetails();
  }

  addToCart(selecteditem) {
    if ((localStorage.getItem('token')) == undefined) {
      this.toastrservice.error("Log In to add to cart")
      this.router.navigate(['/signin'])
    }
    this.cartservice.addToCart(selecteditem).subscribe((response) => {
      console.log("value ", response);
      //this.router.navigate(['/cart']);
      this.showSuccessOnAddingToCart()
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
