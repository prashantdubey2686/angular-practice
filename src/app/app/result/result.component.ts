import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ResultService } from '../services/result/result.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  providers: [DataService],
})
export class ResultComponent implements OnInit {
  users: any;
  constructor(private router:Router, private resultservice: ResultService) {
    this.users = resultservice.getResults();
  }

  ngOnInit(): void {}
  addresult(pagename: string) {
    this.router.navigateByUrl(`result/${pagename}`);
  }
 
}
