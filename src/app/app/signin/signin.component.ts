import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  items:any;
  userlogin(item:any){
    console.log(item)
    this.items=item;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
