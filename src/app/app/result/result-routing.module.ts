import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result.component';
import { AddresultComponent } from './addresult/addresult.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
const routes: Routes = [
    {
        path : '',
        component: ResultComponent
      },
    {path: 'result',
     component: ResultComponent
    },
    {
      path: 'addresult',
      component: AddresultComponent
    },
    {
      path: 'addresult/:id',
      component: AddresultComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
            ReactiveFormsModule,
  ]
})
export class ResultRoutingModule { }
