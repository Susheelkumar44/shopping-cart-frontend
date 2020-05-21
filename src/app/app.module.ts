import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { FooterComponent } from './footer/footer.component';
import { AnnouncementComponent } from './catalogs/announcement/announcement.component'
import { ToastrModule  } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { EmptycartpageComponent } from './cart/emptycartpage/emptycartpage.component';
import { ProductdetailsComponent } from './catalogs/productdetails/productdetails.component';
import { ProductnamesearchComponent } from './catalogs/productnamesearch/productnamesearch.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserprofileeditComponent } from './userdetails/userprofileedit/userprofileedit.component';
import { DropdownDirective } from './customdirectives/dropdown.directive';
import { SearchbycategoryComponent } from './catalogs/searchbycategory/searchbycategory.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './approuting.module';
import { AuthGuard } from './authguard.service';
import { CartService } from './addproduct.service';
import { OrdersComponent } from './orders/orders.component';
import { OrdersconfirmationComponent } from './orders/ordersconfirmation/ordersconfirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegistrationComponent,
    CatalogsComponent,
    FooterComponent,
    AnnouncementComponent,
    CartComponent,
    EmptycartpageComponent,
    ProductdetailsComponent,
    ProductnamesearchComponent,
    UserdetailsComponent,
    UserprofileeditComponent,
    DropdownDirective,
    SearchbycategoryComponent,
    PagenotfoundComponent,
    OrdersComponent,
    OrdersconfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    ReactiveFormsModule,
    AppRoutingModule //Router module imported from AppRoutingModule class
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
