import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  roleUrl:string='https://quickapp-standard.azurewebsites.net/api/account/roles';
  

  constructor(private http:HttpClient, private authService: AuthService) { }

  getRole() {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.getToken(),
      Accept: 'application/json',
    });
    const options = { headers: headers };
    return this.http.get<any>(this.roleUrl, options);
  }
}
