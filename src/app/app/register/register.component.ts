import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl,Validator, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  value = 30;
emailRegex= '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
  
  register = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(20)]),
    number:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email,Validators.pattern(this.emailRegex)]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  });
  
  constructor (private fb: FormBuilder) { }

  ngOnInit() {}
  getControl(name:any) :AbstractControl |null{
    return this.register.get(name);
  }
  onsubmit(){
    console.log(this.register.value);
  }
 
}
