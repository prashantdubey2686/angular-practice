import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job.component';
import { JobRoutingModule } from './job-routing.module';
import { AddjobComponent } from './addjob/addjob.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JobService } from '../services/job/job.service';

@NgModule({
  declarations: [
    JobComponent,
    AddjobComponent,
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    ReactiveFormsModule
  ],
  providers:[JobService]
})
export class JobModule { }
