import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { SigninComponent } from './app/signin/signin.component';
import { RegisterComponent } from './app/register/register.component';
import { AdminComponent } from './app/admin/admin.component';
const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path: 'job', loadChildren:() => import('./app/job/job.module').then(mod=>mod.JobModule),
  },
  {
    path: 'result', loadChildren:() => import('./app/result/result.module').then(mod=>mod.ResultModule)
  },
  {
    path: 'admitcard', loadChildren:() =>import('./app/admitcard/admitcard.module').then(mod=>mod.AdmitcardModule)
  },
  {
    path : 'home',
    component: HomeComponent,
  },
  {
    path : 'admin',
    component: AdminComponent,
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  // {
  //   path : '**',
  //   redirectTo: ''
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
