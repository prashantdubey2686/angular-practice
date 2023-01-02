import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenModel } from '../../models/token-model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = 'https://quickapp-standard.azurewebsites.net/connect/token';

  constructor(private http: HttpClient, private router: Router) {}

  userlogin(username: string, password: string, callback? : Function) {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('client_id', 'quickapp_spa');
    body.set('grant_type', 'password');
    body.set(
      'scope',
      'openid email phone profile offline_access roles quickapp_api'
    );

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const options = { headers: headers };
    this.http.post<TokenModel>(this.loginUrl, body, options).subscribe(
      (loginResponse) => {
        localStorage.setItem('token', JSON.stringify(loginResponse));
        console.log('Success :', loginResponse);
        this.router.navigate(['home']);
        if(!!callback) {
          callback();
        }
      },
      (err) => {
        localStorage.removeItem('token');
        console.log('Error :', err);
        if(!!callback) {
          callback();
        }
      }
    );
  }

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('signin');
  }

  getToken(): string | undefined {
    const token = localStorage.getItem('token');
    if (!!token) {
      return (JSON.parse(token) as TokenModel).access_token;
    }
    return;
  }
}
