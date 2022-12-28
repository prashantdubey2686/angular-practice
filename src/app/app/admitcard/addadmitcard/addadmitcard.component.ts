import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { AdmitService } from '../../services/admitcard/admit.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addadmitcard',
  templateUrl: './addadmitcard.component.html',
  styleUrls: ['./addadmitcard.component.scss'],
})
export class AddadmitcardComponent implements OnInit {
  addadmitcardform: FormGroup | undefined;
  id: any;
  constructor(
    private fb: FormBuilder,
    private admitservice: AdmitService,
    private activateroute: ActivatedRoute
  ) {
    this.id = activateroute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    let admitcard: any;
    if(this.id){
      admitcard = this.admitservice.getAdmitByIndex(this.id as number);
    }
    this.addadmitcardform = new FormGroup({
      advertise: new FormControl(admitcard ?admitcard.advertise:''),
      discription: new FormControl(admitcard ?admitcard.discription:''),
      diclaredate: new FormControl(admitcard ?admitcard.diclaredate:''),
      postname: new FormControl(admitcard ?admitcard.postname:''),
    });
  }
  getControls(name: string) {
    return this.addadmitcardform!.get(name);
  }

  addadmitcard() {
    if(this.id){
      this.admitservice.saveAdmitcard(this.addadmitcardform!.value, this.id);
    }else{
       this.admitservice.addAdmitcard(this.addadmitcardform!.value);
    }

    console.log(this.addadmitcardform!.value);
    this.addadmitcardform?.reset();
  }
}
