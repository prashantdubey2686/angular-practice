import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../services/job/job.service';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  providers: [],
  
})
export class JobComponent implements OnInit {
  users: any;
  constructor(private jobService: JobService, private router : Router) {
    
  }

  ngOnInit(): void {
    this.users = this.jobService.getJobs();
  }

  addjob(pagename: string) {
    this.router.navigateByUrl(`job/${pagename}`);
  }
}
