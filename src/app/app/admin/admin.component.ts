import { Component, OnInit } from '@angular/core';
import {NewserviceService} from '../services/newservice.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [NewserviceService]
})
export class AdminComponent implements OnInit {
  Users: any;
  constructor(private userdata:NewserviceService) {
   }
  
  ngOnInit(): void {
    this.userdata.user().subscribe((data)=>{
      console.warn("data",data);
      this.Users=data
    });
  }

}
