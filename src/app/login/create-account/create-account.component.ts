import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css', '../login.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
  }

  Username: string;
  Password: any;
  ConfirmPassword: any;

  createAccount(): void {
    if(this.Password === this.ConfirmPassword){
      this.appService.createAccount(this.Username, this.Password);
    } else {
      alert("Password not matched!")
      return;
    }
  }

}
