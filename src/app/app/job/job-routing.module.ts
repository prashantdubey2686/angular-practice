import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './job.component';
import { AddjobComponent } from './addjob/addjob.component';


const routes: Routes = [
  {
    path : '',
    component: JobComponent
  },
  {path: 'job', component: JobComponent},
  {path: 'addjob', component:AddjobComponent},
  {path: 'addjob/:id', component:AddjobComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
