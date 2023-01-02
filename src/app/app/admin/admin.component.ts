import { Component, OnInit } from '@angular/core';
import {NewserviceService} from '../services/newservice.service'
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [NewserviceService]
})
export class AdminComponent implements OnInit {
  columnDefs: ColDef[] = [
    { field: 'id', sortable: true  },
    { field: 'title' },
    { field: 'body' },
   
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    
  };

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
