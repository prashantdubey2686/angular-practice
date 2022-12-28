import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../services/result/result.service';
import {
  FormGroup,
  FormBuilder,
  FormControlName,
  FormControl,
  FormArray,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addresult',
  templateUrl: './addresult.component.html',
  styleUrls: ['./addresult.component.scss'],
})
export class AddresultComponent implements OnInit {
  addresultform: FormGroup | undefined;
  id: any;
  constructor(private fb: FormBuilder, private activateroute:ActivatedRoute, private resultservice: ResultService) {
    this.id = activateroute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    let result: any;
    if(this.id){
      result = this.resultservice.getResultByIndex(this.id as number);
    }
    this.addresultform = new FormGroup({
      advertise: new FormControl(result ?result.advertise:''),
      discription: new FormControl(result ?result.discription:''),
      diclaredate: new FormControl(result ?result.diclaredate:''),
      postname: new FormControl(result ?result.postname:''),
    });
  }
  getControls(name: string) {
    return this.addresultform!.get(name);
  }

  Addresult() {
    if(this.id){
      this.resultservice.saveResult(this.addresultform!.value, this.id);
    }else{
      this.resultservice.addResult(this.addresultform!.value);
    }
    console.log(this.addresultform!.value);
    this.addresultform?.reset();
  }
}
