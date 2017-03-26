import { Component, OnInit } from '@angular/core';
import { AF } from "../providers/af";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public afService: AF, private router: Router) {}

  ngOnInit() {
  }

  login() {
    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['']);
    })
  }
}
