import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor() {}

  getJobs() {
    const jobs = localStorage.getItem('jobs');
    return jobs == null ? [] : JSON.parse(jobs);
  }
  getJobByIndex(i : number) {
    const jobs = localStorage.getItem('jobs');
    return jobs == null ? null : JSON.parse(jobs)[i];
  }

  addJob(job: any) {
    const jobs = localStorage.getItem('jobs');
    let jobArray = [];
    if (jobs == null) {
      jobArray.push(job);
    } else {
      jobArray = [job, ...JSON.parse(jobs)];
    }
    localStorage.setItem('jobs', JSON.stringify(jobArray));
  }

  saveJob(job: any, id: number) {
    const jobsStr = localStorage.getItem('jobs');
    let jobArray = [];
    if (jobsStr == null) {
      jobArray.push(job);
    } else {
      const jobs = JSON.parse(jobsStr);
      jobs[id] = job;
      jobArray = jobs;
    }
    localStorage.setItem('jobs', JSON.stringify(jobArray));
  }
}
