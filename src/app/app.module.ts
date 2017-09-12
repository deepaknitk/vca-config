import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';

import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { AuthGaurd } from './auth-gaurd.service';
import {MockDataService} from './mock-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    DashboardModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [AppService, ApiService, AuthService, AuthGaurd, MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
