import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { ProfileModel } from '../../models/profile-model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl: string =
    'https://quickapp-standard.azurewebsites.net/api/account/users/me';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProfile() {
    return this.http.get<ProfileModel>(this.baseUrl);
  }

  saveProfile(profile: ProfileModel) {
    const saveUrl =
      'https://quickapp-standard.azurewebsites.net/api/account/users/' +
      profile.id;
    return this.http.put(saveUrl, profile);
  }
}
