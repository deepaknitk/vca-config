import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor() {
  }

  API_ROOT_URL = "http://192.168.1.40:8084";

  LOGIN = "/vca-security/api/v1.0/jwt-auth/login";
}
