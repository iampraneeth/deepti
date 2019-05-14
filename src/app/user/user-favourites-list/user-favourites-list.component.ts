import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: "fav-list",
  templateUrl: "./user-favourites-list.component.html",
  styleUrls: ["./user-favourites-list.component.css"]
})
export class UserFavouritesListComponent implements OnInit {
  user: User;

  constructor(private router:Router){}

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
  }

  oNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }

  cNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  logout(){
    sessionStorage.removeItem("user");
    this.router.navigate(["/signin"]);
}
}