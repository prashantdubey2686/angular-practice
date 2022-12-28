import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmitcardComponent } from './admitcard.component';
import { AddadmitcardComponent } from './addadmitcard/addadmitcard.component';
const routes: Routes = [
  {path: '', component: AdmitcardComponent},
  {path: 'admitcard', component: AdmitcardComponent},
  {path: 'addadmitcard', component:AddadmitcardComponent},
  {path: 'addadmitcard/:id', component: AddadmitcardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmitcardRoutingModule { }
