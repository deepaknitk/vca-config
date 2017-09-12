import {Injectable} from '@angular/core';
import {ApiService} from '../../api.service';
import {AuthService} from '../../auth.service';
import {DID} from '../../models/did';
import {MockDataService} from '../../mock-data.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DidService {
  didEditMode: boolean;
  selectedDidData: DID;

  constructor(private mockData: MockDataService, private http: HttpClient
    , private apiService: ApiService, private authService: AuthService) {
  }

  getAllDidNumbers(): DID[] {
    // this.http.get(this.apiService.API_ROOT_URL + this.apiService.DIAL_LIST, {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data["list"];
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    return this.mockData.DID_LIST.list;
  }

  readDialData(dialId): DID {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.READ_DIAL, {"id": dialId}
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data["object"];
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    return this.mockData.DID_LIST.list.filter(function (dial, index, array) {
      return (dial['id'] === dialId);
    })[0];

  }

  createDial(NewDial): boolean {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.CREATE_DIAL, NewDial
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data;
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    NewDial.id = Math.random();
    this.mockData.DID_LIST.list.push(NewDial);
    return true;
  }

  updateDial(DialData): boolean {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.UPDATE_DIAL, DialData
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data;
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    const dials = this.mockData.DID_LIST.list;
    dials.forEach(function (dial, index) {
      if (dial.id === DialData.id) {
        dials[index] = DialData;
      }
    });
    this.mockData.DID_LIST.list = dials;
    return true;
  }

}

