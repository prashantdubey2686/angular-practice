import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { ResultRoutingModule } from './result-routing.module';
import { AddresultComponent } from './addresult/addresult.component';
import { ResultService } from '../services/result/result.service';
@NgModule({
  declarations: [
    ResultComponent,
    AddresultComponent,
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
  ],
  providers:[ResultService]
})
export class ResultModule { }
