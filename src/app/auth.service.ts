import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from "@angular/router";

import { ApiService } from "./api.service";
import { AppService } from "./app.service";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private api: ApiService, private appService: AppService) {
    this.signedToken = appService.getStorage('signedToken');
    if (this.signedToken) {
      this.isUserLoggedIn = true;
    }
  }

  isUserLoggedIn: Boolean = false;
  redirecturl: string;
  signedToken: string;

  login(UserName: string, Password: string): void {
    this.http.post(this.api.API_ROOT_URL + this.api.LOGIN, {
      "userName": UserName,
      "password": Password
    }).subscribe(data => {
       console.log("data is from log in "+ JSON.stringify(data));
      this.isUserLoggedIn = true;
      const url = this.redirecturl ? this.redirecturl : '/roles';
      this.router.navigate([url]);
      this.signedToken = data["signedToken"];
      this.appService.setStrorage("signedToken", this.signedToken);

    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  logout(): void {
    this.isUserLoggedIn = false;
    this.signedToken = '';
    this.appService.setStrorage("signedToken", this.signedToken);
          this.router.navigate(['/login']);
  }

  getAuthorizationHeaders(): any {
    const signedToken = this.appService.getStorage("signedToken");
    if (signedToken) {
      return new HttpHeaders().set("Authorization", "Bearer " + this.appService.getStorage("signedToken"));
    } else {
      this.logout();
    }
  }
}
