import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GetUserDetails {

    private getUserDetailsURL = "http://localhost:1235/user";

    constructor(private http: HttpClient) {}

    createAuthorizationHeader(headers: HttpHeaders) {
        return headers.append('Authorization', 'Bearer ' +
          localStorage.getItem('token'));
    }

    getUserDetails() {
        let headers = new HttpHeaders();
        let headersData = this.createAuthorizationHeader(headers); 

        let something = this.http.get<any>(this.getUserDetailsURL, {
            headers : headersData
        });

        console.log("something ", something)

        return something;
    }
}