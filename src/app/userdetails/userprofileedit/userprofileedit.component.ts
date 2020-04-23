import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-userprofileedit',
  templateUrl: './userprofileedit.component.html',
  styleUrls: ['./userprofileedit.component.css']
})
export class UserprofileeditComponent implements OnInit {

  @ViewChild('f') updateForm: NgForm;
  userData = {
    firstName : '',
    lastName : '',
    phone : '',
    address : {
      addressLine: '',
      city: '',
      state: '',
      zip: ''
    },
    encryptedPassword: ''
  }

  private editUserProfileURL = "http://localhost:1235/user"

  constructor(private http: HttpClient,
    private toastrservice:ToastrService) { }
  
  createAuthorizationHeader(headers: HttpHeaders) {
    return headers.append('Authorization', 'Bearer ' +
      localStorage.getItem('token'));
  }

  async onUpdate() {
    let headers = new HttpHeaders();
    let headersData = this.createAuthorizationHeader(headers);

    if ((this.updateForm.value.userData.firstName) != '') {
      this.userData.firstName = this.updateForm.value.userData.firstName;
    }
    if ((this.updateForm.value.userData.lastName) != '' ) {
      this.userData.lastName = this.updateForm.value.userData.lastName;
    }
    if ((this.updateForm.value.userData.phone) != '' ) {this.userData.phone = this.updateForm.value.userData.phone;}
    if ((this.updateForm.value.userData.addressLine) != '' ) {this.userData.address.addressLine = this.updateForm.value.userData.addressLine;}
    if ((this.updateForm.value.userData.city) != '' ) {this.userData.address.city = this.updateForm.value.userData.city;}
    if ((this.updateForm.value.userData.state) != '' ) {this.userData.address.state = this.updateForm.value.userData.state;}
    if ((this.updateForm.value.userData.zip) != '' ) {this.userData.address.zip = this.updateForm.value.userData.zip;}
    if ((this.updateForm.value.userData.encryptedPassword) != '' ) {this.userData.encryptedPassword = this.updateForm.value.userData.encryptedPassword;}

    try {
      const data = await this.http.put(this.editUserProfileURL, this.userData, {
        headers : headersData
      }).toPromise();
      console.log(data)
      this.toastrservice.success("Profile Edited Successfully")
    }catch(err) {
      console.log(err)
      this.toastrservice.error("Oops! Something went wrong try again")
    }
  }

  ngOnInit(): void {
  }

}
