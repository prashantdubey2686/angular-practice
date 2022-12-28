import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NewserviceService {
  Url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}
  user() {
    return this.http.get(this.Url);
  }
}
