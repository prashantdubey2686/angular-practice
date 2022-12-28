import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmitService } from '../services/admitcard/admit.service';

@Component({
  selector: 'app-admitcard',
  templateUrl: './admitcard.component.html',
  styleUrls: ['./admitcard.component.scss'],
  providers: [AdmitService],
})
export class AdmitcardComponent implements OnInit {
  users: any;
  constructor(private admitservice: AdmitService, private rt: Router) {
    this.users = admitservice.getAdmitcards();
  }

  ngOnInit(): void {}
}
