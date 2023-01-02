import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job.component';
import { JobRoutingModule } from './job-routing.module';
import { AddjobComponent } from './addjob/addjob.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JobService } from '../services/job/job.service';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    JobComponent,
    AddjobComponent,
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  providers:[JobService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobModule { }
