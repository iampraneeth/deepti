import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: "login",
    templateUrl: "./user-login.component.html",
    styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {

    email: string;
    password: string;
    user: User;
    constructor(
        private route: Router,
        private userService: UserService) { }

    ngOnInit() {

    }
    onSubmit() {


        // this.userService.getUserByEmail(this.email).subscribe((data) => {
        //     this.user = data;

        //     if (this.user != null) {
        //         if (this.user.userPassword == this.password) {

        //             //setting session storage
        //             sessionStorage.setItem("user", JSON.stringify(this.user));
        //             //console.log(JSON.parse(sessionStorage.getItem("user")));

        //             this.route.navigate(['/main']);
        //         }
        //     } else {
        //         this.route.navigate(['/signin']);
        //     }

        // });




    }

}