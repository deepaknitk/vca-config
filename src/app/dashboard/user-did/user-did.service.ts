import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {UserDids} from '../../models/user-dids';
import {AuthService} from '../../auth.service';
import {ApiService} from '../../api.service';
import {MockDataService} from '../../mock-data.service';

@Injectable()
export class UserDidService {

  constructor(private authService: AuthService, private apiService: ApiService
    , private mockData: MockDataService, private http: HttpClient) {
  }

  getAllUserDids(): UserDids[] {
    // this.http.get(this.apiService.API_ROOT_URL + this.apiService.USER_DIDS_COMPOSITE_LIST
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data["list"];
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    const data = this.mockData.USER_DIDS;
    return data.list;
  }

  saveUserDids(userDids): boolean {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.USER_DIDS_COMPOSITE_UPDATE, userDids
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data;
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    const USER_DIDS = this.mockData.USER_DIDS['list'];
    USER_DIDS.forEach(function (user, index) {
      if (user.userHasDIDId === userDids.userHasDIDId) {
        USER_DIDS[index] = userDids;
      }
    });
    this.mockData.USER_DIDS['list'] = USER_DIDS;
    return true;
  }

}
