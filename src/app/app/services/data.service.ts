import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class DataService {
  edata: any[] = [
    {
      advt: 'advt1111',
      disc: 'cccccca1111',
      date: '01/01/2021',
    },
    {
      advt: 'advt5523',
      disc: 'dddaa3333',
      date: '01/01/2021',
    },
    {
      advt: 'advt222',
      disc: 'aaaaa222',
      date: '01/01/2021',
    },
    {
      advt: 'advt55555',
      disc: 'ddddd4444',
      date: '01/01/2021',
    },
    {
      advt: 'advt1111',
      disc: 'aaaaa1111',
      date: '01/01/2021',
    },
    {
      advt: 'advt1111',
      disc: 'aaaaa1111',
      date: '01/01/2021',
    },
  ];
  constructor() {}
  user() {
    return this.edata;
  }
}
