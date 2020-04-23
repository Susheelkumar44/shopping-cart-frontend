import { Component, Input, NgModule } from "@angular/core";
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { ThrowStmt } from '@angular/compiler';


@Component({
    selector: 'app-header',
    templateUrl : './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    isUserLoggedIn :boolean;
    searchParameter : string;
    localValue = (localStorage.getItem('isLoggedIn'));

    constructor(private router: Router,
        private toastrservice:ToastrService) {
     }

   
    checkIfUserLoggedIn () {
        
        console.log("token ",(localStorage.getItem('token')))
        if ((localStorage.getItem('token')) != undefined  || (localStorage.getItem('token')) == null) {
           
            this.isUserLoggedIn=true;
            console.log("Inside If Condition of token check ", this.isUserLoggedIn)
            localStorage.setItem('isLoggedIn', "true")
         } else {
            this.isUserLoggedIn=false;
            console.log("Inside else Condition of token check ", this.isUserLoggedIn)
            localStorage.setItem('isLoggedIn', "false")
        }
        console.log("IsUserLoggedIn ",this.isUserLoggedIn)
        
    }
    ngOnInit(): void {
        this.checkIfUserLoggedIn()
      }
    logOut() {

        console.log("In Log out method")
        localStorage.removeItem('token')
        console.log("Token after LogOut",localStorage.getItem('token'))
        localStorage.setItem('isLoggedIn', "false")
        this.isUserLoggedIn=false;
        this.toastrservice.success("Logged Out Successfully")
        this.router.navigate(['/homepage'])
    }

    onClick() {
        localStorage.setItem('searchParameter', this.searchParameter)
        if ((localStorage.getItem('searchParameter')) == undefined) {
            console.log("Inside empty", localStorage.getItem('searchParameter'))
            this.router.navigate(['/homepage'])
        } 
        else {
            console.log("Search Parameter in header", localStorage.getItem("searchParameter"))
            this.router.navigate(['/productnamesearch']);
        }
    }  
}