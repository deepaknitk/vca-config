import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {UserRoles} from '../../models/user-roles';
import {AuthService} from '../../auth.service';
import {ApiService} from '../../api.service';
import {MockDataService} from '../../mock-data.service';

@Injectable()
export class UserRolesService {

  constructor(private authService: AuthService, private apiService: ApiService
    , private mockData: MockDataService, private http: HttpClient) {
  }

  getAllUserRoles(): UserRoles[] {
    // this.http.get(this.apiService.API_ROOT_URL + this.apiService.USER_ROLES_COMPOSITE_LIST
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data["list"];
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    const data = this.mockData.USER_ROLES;
    return data.list;
  }

  saveUserRoles(userRoles): boolean {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.USER_ROLES_COMPOSITE_UPDATE, userRoles
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data;
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    const USER_ROLES = this.mockData.USER_ROLES['list'];
    USER_ROLES.forEach(function (user, index) {
      if (user.userid === userRoles.userid) {
        USER_ROLES[index] = userRoles;
      }
    });
    this.mockData.USER_ROLES['list'] = USER_ROLES;
    return true;
  }

}
