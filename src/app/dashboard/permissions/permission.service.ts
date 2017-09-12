import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../../api.service';
import {AuthService} from '../../auth.service';
import {MockDataService} from '../../mock-data.service';
import {Permission} from '../../models/permission';

@Injectable()
export class PermissionService {

  constructor(private http: HttpClient, private apiService: ApiService
              , private authService: AuthService, private mockData: MockDataService) {
  }

  getAllPermissions(): Permission[] {
    // this.http.get(this.apiService.API_ROOT_URL + this.apiService.ROLE_LIST, {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data["list"];
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    const data = this.mockData.PERMSSION_LIST;
    return data.list;
  }

  readPermissionData(PermissionId): Permission {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.READ_ROLE, {"id": roleId}
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data["object"];
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    return this.mockData.PERMSSION_LIST.list.filter(function (Permission, index, array) {
      return (Permission["id"] === PermissionId);
    })[0];

  }

  createPermission(NewPermission): boolean {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.CREATE_ROLE, NewRole
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data;
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    NewPermission.id = Math.random();
    this.mockData.PERMSSION_LIST.list.push(NewPermission);
    return true;
  }

  updatePermission(PermissionData): boolean {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.UPDATE_ROLE, RoleData
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data;
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    // this.mockData.ROLE_LIST.list.push(RoleData);
    const Permissions = this.mockData.PERMSSION_LIST.list;
    Permissions.forEach(function (role, index) {
      if (role.id === PermissionData.id) {
        Permissions[index] = PermissionData;
      }
    });
    this.mockData.PERMSSION_LIST.list = Permissions;
    return true;
  }
}
