import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../header/header.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  loginPostData = {
    email : "",
    encryptedPassword: ""
  }
  loginStatus :string;
  showPasswordValue = false;
  isLoggedIn: boolean;

  private loginUrl = "http://localhost:1235/user/login"
  constructor(private http: HttpClient,private router:Router,
    private toastrservice:ToastrService) {  }

  sendUserData() {
    console.log(this.loginPostData.email)
    return this.http.post<any>(this.loginUrl, this.loginPostData).toPromise().then( (data) => {
      console.log("Returned",data)
      console.log("Token", data.accessToken)
      localStorage.setItem('token', data.accessToken)
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true')
      this.showSuccess()

      this.router.navigate(['/homepage'])
      // location.reload()
    }).catch((err) => {
      console.log(err)
      this.isLoggedIn = false;
      this.showFailure()
      return this.loginStatus = `Email or Password is wrong! Please Enter Correct Email or Password!☹️`
    })
  }

  showSuccess() {
    console.log("Reaching here")
    this.toastrservice.success('Logged In Successfully').onShown
  }

  showFailure() {
    this.toastrservice.error('Invalid email or password! Please try again')
  }
  getLoginStatusColor() {
    return this.isLoggedIn === true ? 'green' : 'red'
  }
  ngOnInit(): void {
  }

}
