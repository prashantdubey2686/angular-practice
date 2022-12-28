import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { JobService } from '../services/job/job.service';
import { ResultService } from '../services/result/result.service';
import { AdmitService } from '../services/admitcard/admit.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
  providers: [DataService, JobService],
})
export class FrontpageComponent implements OnInit {
  jobs: any[] = [];
  results: any[] = [];
  admitcards: any[] = [];
  constructor(private jobService: JobService, private resultservice: ResultService, private admitservice: AdmitService) {}

  ngOnInit(): void {
    this.jobs = this.jobService.getJobs();
    this.results = this.resultservice.getResults();
    this.admitcards = this.admitservice.getAdmitcards();
  }
}
