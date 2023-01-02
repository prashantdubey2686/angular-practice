import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../services/job/job.service';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  providers: [],
})
export class JobComponent implements OnInit {
  columnDefs: ColDef[] = [
    { field: 'advertise', sortable: false  },
    { field: 'postname' },
    { field: 'discription' },
    {field: 'postname'},
    {field: 'advertisementdate'},
    { headerName: 'Actions',
        cellRenderer: (data: any) => {
          return `<a class='btn btn-danger' href="/job/addjob/${data.rowIndex}">Edit</a>`;
        }
    }

  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    
  };

  rowData: any[] = [];

  constructor(
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rowData = this.jobService.getJobs();
  }

  addjob(pagename: string) {
    this.router.navigateByUrl(`job/${pagename}`);
  }
}
