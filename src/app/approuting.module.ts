import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { CartComponent } from './cart/cart.component';
import { EmptycartpageComponent } from './cart/emptycartpage/emptycartpage.component';
import { ProductdetailsComponent } from './catalogs/productdetails/productdetails.component';
import { ProductnamesearchComponent } from './catalogs/productnamesearch/productnamesearch.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserprofileeditComponent } from './userdetails/userprofileedit/userprofileedit.component';
import { SearchbycategoryComponent } from './catalogs/searchbycategory/searchbycategory.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersconfirmationComponent } from './orders/ordersconfirmation/ordersconfirmation.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './authguard.service';

const appRoutes: Routes = [
    {
        path: "signin", 
        component: LoginComponent
    },
    {
        path: "homepage", 
        component: CatalogsComponent
    },
    {
        path: "signup", 
        component:RegistrationComponent
    },
    {
        path: "cart", 
        component: CartComponent
    },
    {
        path: "emptyCart", 
        component: EmptycartpageComponent
    },
    {
        path: "productdetails", 
        component: ProductdetailsComponent
    },
    {
        path: "productnamesearch", 
        component: ProductnamesearchComponent
    },
    {
        path: "userdetails",
        // canActivate:[AuthGuard],
        component: UserdetailsComponent
    },
    {
        path: "edituserprofile", 
        component: UserprofileeditComponent
    },
    {
        path: "searchbycategory", 
        component: SearchbycategoryComponent
    },
    {
        path: "orderdetails", 
        component: OrdersComponent
    },
    {
        path: "orderconfirmation", 
        component: OrdersconfirmationComponent
    },
    {
        path: "**", 
        component: PagenotfoundComponent
    } //This route should always be placed at last
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule {

}