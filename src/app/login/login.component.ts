import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  LoginAction: any;
  UserName: string;
  Password: string;

  ngOnInit(): void {
  }

  login(): void {
    console.log("login page is here");
    this.authService.login(this.UserName, this.Password);
  }

}
