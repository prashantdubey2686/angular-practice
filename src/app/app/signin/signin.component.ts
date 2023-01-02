import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  isLoader = false;

  ngOnInit(): void {}

  userlogin(item: any) {
    if(this.isLoader){
      return;
    }
    this.isLoader = true;
    this.auth.userlogin(item.value.username, item.value.password, this.disableLoader);
  }

  disableLoader = () => {
    this.isLoader = false;
  }
}
