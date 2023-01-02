import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account/account.service';
import { ProfileModel } from '../models/profile-model';
import { RoleService } from '../services/account/role.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  isLoader = false;
  roles:any=[];
  display = true;
  profile: ProfileModel = new ProfileModel();
  constructor(private accountService: AccountService, private roleService:RoleService) {}

  ngOnInit(): void {
    this.isLoader = true;
    this.accountService.getProfile().subscribe(
      (res) => {
        console.log(res);
        this.profile = res;
        this.isLoader = false;
      },
      (err) => {
        console.log(err);
        this.isLoader = false;
      }
    );

    this.roleService.getRole().subscribe(
      (res) => {
        this.roles = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  onSave() {
    this.isLoader = true;
    this.accountService.saveProfile(this.profile).subscribe((res) => {
      console.log(res);
      this.isLoader = false;
    },
    (err) =>{
      this.isLoader = false;
      console.log(err);
    }
    );
   // console.log(this.profile);
  }
}
