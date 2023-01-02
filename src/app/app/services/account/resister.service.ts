import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ResisterService {
  resisterUrl: string =
    'https://quickapp-standard.azurewebsites.net/api/account/public/users';

  constructor(private http: HttpClient) {}
  register(user: any) {
    return this.http.post(this.resisterUrl, user);
  }
}
