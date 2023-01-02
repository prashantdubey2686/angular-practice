import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { AccountService } from '../services/account/account.service';
import { FormsModule } from '@angular/forms';
import { RoleService } from '../services/account/role.service';


@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers:[AccountService,RoleService]
})
export class ProfileModule { }
