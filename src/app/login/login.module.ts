import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: 'login',
      component: LoginComponent
    }])
  ],
  declarations: [LoginComponent, ForgotPasswordComponent, CreateAccountComponent],
  exports: [RouterModule]
})
export class LoginModule { }
