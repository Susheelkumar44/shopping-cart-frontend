import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router'
import { CartService } from 'src/app/addproduct.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-searchbycategory',
  templateUrl: './searchbycategory.component.html',
  styleUrls: ['./searchbycategory.component.css']
})
export class SearchbycategoryComponent /*implements OnInit*/ {

  listOfAllProducts=[];
  private getAllProductsByCategory = "http://localhost:1237/catalog?"

  constructor(private http: HttpClient,
    private router:Router, 
    private cartservice: CartService,
    private toastrservice:ToastrService,
    private route: ActivatedRoute) { }

  async getProductDetails() {
    let val : string;
    this.route.queryParamMap.subscribe(params => {val = params.get('category')});
    console.log("Val", val)
    const params = new HttpParams().set('category', val)
    let searchParam = this.getAllProductsByCategory + params;

    try {
      const data = await this.http.get<any>(searchParam).toPromise();
      console.log("Data recieved", data);
      this.listOfAllProducts = data;
    }
    catch (err) {
      console.log(err);
    }
  }

  ngOnInit(): void {
    this.getProductDetails();
  }

  addToCart(selecteditem) {
    if ((localStorage.getItem('token')) == undefined) {
      this.toastrservice.error("Log In to add to cart")
      this.router.navigate(['/signin'])
    }
    this.cartservice.addToCart(selecteditem).subscribe(
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
