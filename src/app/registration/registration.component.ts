import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('f') signUpForm: NgForm;
  userData = {
    firstName : '',
    lastName : '',
    email : '',
    phone : '',
    address : {
      addressLine: '',
      city: '',
      state: '',
      zip: ''
    },
    encryptedPassword: ''
  }

  isRegistered :boolean;
  registrationStatus :string;


  private registrationUrl = "http://localhost:1235/user";  

  constructor(private http: HttpClient, private toastrservice:ToastrService) { }

  async onSubmit() {
   this.userData.firstName = this.signUpForm.value.userData.firstName;
   this.userData.lastName = this.signUpForm.value.userData.lastName;
   this.userData.email = this.signUpForm.value.userData.email;
   this.userData.phone = this.signUpForm.value.userData.phone;
   this.userData.address.addressLine = this.signUpForm.value.userData.addressLine;
   this.userData.address.city = this.signUpForm.value.userData.city;
   this.userData.address.state = this.signUpForm.value.userData.state;
   this.userData.address.zip = this.signUpForm.value.userData.zip;
   this.userData.encryptedPassword = this.signUpForm.value.userData.encryptedPassword;

   console.log("UserData", this.userData)

   try {
      const data = await this.http.post<any>(this.registrationUrl, this.userData).toPromise();
      console.log("Returned Data", data);
      this.isRegistered = true;
      // return this.registrationStatus = "Registration Successfull. Now continue shopping!!"
      this.onShowSuccessfullRegistration();
    }
    catch (err) {
      console.log(err);
      this.isRegistered = false;
      this.onShowUnSuccessfullRegistration()
      return this.registrationStatus = "Oops! Something Went Wrong, Please try again later!!"
    }
  }

  getRegistrationStatusColor() {
    return this.isRegistered === true ? 'green' : 'red'
  }

  onShowSuccessfullRegistration() {
    this.toastrservice.success("Registered Successfully")
  }

  onShowUnSuccessfullRegistration() {
    this.toastrservice.error("Oops! Something Went Wrong, Please try again later!!")
  }

  ngOnInit(): void {
  }

}
