import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../../api.service';
import {AuthService} from '../../auth.service';
import {MockDataService} from '../../mock-data.service';
import {Role} from '../../models/role';

@Injectable()
export class RoleService {

  constructor(private http: HttpClient, private apiService: ApiService
    , private authService: AuthService, private mockData: MockDataService) { }

  getAllRoles(): Role[] {
    // this.http.get(this.apiService.API_ROOT_URL + this.apiService.ROLE_LIST, {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data["list"];
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    const data = this.mockData.ROLE_LIST;
    return data.list;
  }

  readRoleData(roleId): Role {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.READ_ROLE, {"id": roleId}
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data["object"];
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    return this.mockData.ROLE_LIST.list.filter(function (role, index, array) {
      return (role["id"] === roleId);
    })[0];

  }

  createRole(NewRole): boolean {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.CREATE_ROLE, NewRole
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data;
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    NewRole.id = Math.random();
    this.mockData.ROLE_LIST.list.push(NewRole);
    return true;
  }

  updateRole(RoleData): boolean {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.UPDATE_ROLE, RoleData
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data;
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    const roles = this.mockData.ROLE_LIST.list;
    roles.forEach(function (role, index) {
      if (role.id === RoleData.id) {
        roles[index] = RoleData;
      }
    });
    this.mockData.ROLE_LIST.list = roles;
    return true;
  }

}
