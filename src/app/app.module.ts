import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component'
import { FormsModule} from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
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
    SearchbycategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    RouterModule.forRoot([
      {path: "signin", component: LoginComponent},
      {path: "homepage", component: CatalogsComponent},
      {path: "signup", component:RegistrationComponent},
      {path: "cart", component: CartComponent},
      {path: "emptyCart", component: EmptycartpageComponent},
      {path: "productdetails", component: ProductdetailsComponent},
      {path: "productnamesearch", component: ProductnamesearchComponent},
      {path: "userdetails", component: UserdetailsComponent},
      {path: "edituserprofile", component: UserprofileeditComponent},
      {path: "searchbycategory", component: SearchbycategoryComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
