import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ResisterService } from '../services/account/resister.service';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isLoader = false;

  value = 30;
  emailRegex =
    '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';

  register = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    // number:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(this.emailRegex),
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    private resisterService: ResisterService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}
  getControl(name: any): AbstractControl | null {
    return this.register.get(name);
  }
  onsubmit() {
    //console.log(this.register.value);
    this.isLoader = true;

    this.resisterService.register(this.register.value).subscribe(
      (res) => {
       this.isLoader = false;

        console.log(res);
        this.authService.userlogin(
          this.register.value.userName!,
          this.register.value.newPassword!
        );
      },
      (err) => {
        this.isLoader = false;
        console.log(err);
      }
    );
  }
}
