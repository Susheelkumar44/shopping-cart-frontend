import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router) { }
  
  userDetails;
  private getUserDetailsURL = "http://localhost:1235/user";
  createAuthorizationHeader(headers: HttpHeaders) {
    return headers.append('Authorization', 'Bearer ' +
      localStorage.getItem('token'));
  }

  async getUserDetails() {
    let headers = new HttpHeaders();
    let headersData = this.createAuthorizationHeader(headers);

    try {
      const data = await this.http.get<any>(this.getUserDetailsURL, {
        headers: headersData
      }).toPromise();
      console.log(data);
      this.userDetails = data;
    }catch(err) {
      console.log(err);
    }
  }

  onClickEditProfile() {
    this.router.navigate(['/edituserprofile']);
  }
  
  ngOnInit(): void {
    this.getUserDetails();
  }

}
