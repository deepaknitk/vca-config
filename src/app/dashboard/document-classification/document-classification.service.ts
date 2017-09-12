import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {ApiService} from '../../api.service';
import {AuthService} from '../../auth.service';
import {MockDataService} from '../../mock-data.service';
import {DocumentCalssification} from '../../models/document-calssification';

@Injectable()
export class DocumentClassificationService {

  constructor(private http: HttpClient, private apiService: ApiService
    , private authService: AuthService, private mockData: MockDataService) {
  }

  getAllDocumentClassifications(): DocumentCalssification[] {
    // this.http.get(this.apiService.API_ROOT_URL + this.apiService.DOCUMENT_CLASSIFICATION_LIST
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data['list'];
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    const data = this.mockData.DOCUMENT_CLASSIFICATION_LIST;
    return data.list;
  }

  readDocumentClassificationData(documentClassificationId): DocumentCalssification {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.READ_DOCUMENT_CLASSIFICATION, {"id": documentClassificationId}
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data["object"];
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    return this.mockData.DOCUMENT_CLASSIFICATION_LIST.list.filter(function (documentClassification, index, array) {
      return (documentClassification['id'] === documentClassificationId);
    })[0];

  }

  createDocumentClassification(NewDocumentClassification): boolean {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.CREATE_DOCUMENT_CLASSIFICATION, NewDocumentClassification
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data;
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    NewDocumentClassification.id = Math.random();
    this.mockData.DOCUMENT_CLASSIFICATION_LIST.list.push(NewDocumentClassification);
    return true;
  }

  updateDocumentClassification(DocumentClassificationData): boolean {
    // this.http.post(this.apiService.API_ROOT_URL + this.apiService.UPDATE_DOCUMENT_CLASSIFICATION, DocumentClassificationData
    //   , {headers: this.authService.getAuthorizationHeaders()})
    //   .subscribe(data => {
    //     console.log(data);
    //     return data;
    //   }, (err: HttpErrorResponse) => {
    //     console.log(err);
    //   });
    const documentClassifications = this.mockData.DOCUMENT_CLASSIFICATION_LIST.list;
    documentClassifications.forEach(function (documentClassification, index) {
      if (documentClassification.id === DocumentClassificationData.id) {
        documentClassifications[index] = DocumentClassificationData;
      }
    });
    this.mockData.DOCUMENT_CLASSIFICATION_LIST.list = documentClassifications;
    return true;
  }
}
