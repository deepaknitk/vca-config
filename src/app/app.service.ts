import {Injectable} from '@angular/core';

@Injectable()
export class AppService {

  constructor() {
  }

  forgotPassword(Username: string): void {
    console.log(Username);
  }

  createAccount(Username: string, Password: any): void {
    console.log(Username, Password);
  }

  setStrorage(key, value): void {
    localStorage.setItem(key, value);
  }

  getStorage(key): string {
    return localStorage.getItem(key);
  }

  copyAngularObject(object): any {
    return JSON.parse(JSON.stringify(object));
  }
}
