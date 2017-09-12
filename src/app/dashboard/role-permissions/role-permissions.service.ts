import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RolePermissions} from '../../models/role-permissions';
import {AuthService} from '../../auth.service';
import {ApiService} from '../../api.service';
import {MockDataService} from '../../mock-data.service';

@Injectable()
export class RolePermissionsService {

  constructor(private authService: AuthService, private apiService: ApiService
              , private mockData: MockDataService, private http: HttpClient) {
  }

  getAllRolePermissions(): RolePermissions[] {
    // this.http.get(this.apiService.API_ROOT_URL + this.apiService.ROLE_PERMISSIONS_COMPOSITE_LIST
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data["object"];
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    const data = this.mockData.ROLE_PERMISSIONS;
    return data.object;
  }

  saveRolePermissions(rolePermissions): boolean {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.ROLE_PERMISSIONS_COMPOSITE_UPDATE, rolePermissions
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data;
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    const ROLE_PERMISSIONS = this.mockData.ROLE_PERMISSIONS["object"];
    ROLE_PERMISSIONS.forEach(function (role, index) {
      if (role.roleId === rolePermissions.roleId) {
        ROLE_PERMISSIONS[index] = rolePermissions;
      }
    });
    this.mockData.ROLE_PERMISSIONS["object"] = ROLE_PERMISSIONS;
    return true;
  }

}
