import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmitcardComponent } from './admitcard.component';
import { AdmitcardRoutingModule } from './admitcard-routing.module';
import { AddadmitcardComponent } from './addadmitcard/addadmitcard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdmitService } from '../services/admitcard/admit.service';


@NgModule({
  declarations: [
    AdmitcardComponent,
    AddadmitcardComponent,
  ],
  imports: [
    CommonModule,
    AdmitcardRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AdmitService]
})
export class AdmitcardModule { }
