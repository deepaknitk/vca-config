import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../login.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(private appService: AppService, private fb:FormBuilder) {
    this.generateForm();
  }

  generateForm(): void {
    this.forgotPasswordForm = this.fb.group({
      Username: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  forgotPassword():void{
   this.appService.forgotPassword(this.forgotPasswordForm.value.Username);
   console.log(this.forgotPasswordForm.status);
  }

}
