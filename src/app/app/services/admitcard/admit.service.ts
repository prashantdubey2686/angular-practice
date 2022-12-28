import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdmitService {
  constructor() {}
  getAdmitcards() {
    const admitcards = localStorage.getItem('admitcards');
    return admitcards == null ? [] : JSON.parse(admitcards);
  }
  getAdmitByIndex(i : number) {
    const admitcards = localStorage.getItem('admitcards');
    return admitcards == null ? null : JSON.parse(admitcards)[i];
  }

  addAdmitcard(admitcard: any) {
    const admitcards = localStorage.getItem('admitcards');
    let admitcardArray = [];
    if (admitcards == null) {
      admitcardArray.push(admitcard);
    } else {
      admitcardArray = [admitcard, ...JSON.parse(admitcards)];
    }
    localStorage.setItem('admitcards', JSON.stringify(admitcardArray));
  }
  
  saveAdmitcard(admitcard: any, id: number){
    const admitcardsStr = localStorage.getItem('admitcards');
    let admitcardArray = [];
    if(admitcardsStr == null){
      admitcardArray.push(admitcard);
    }else{
      const admitcards = JSON.parse(admitcardsStr);
      admitcards[id] = admitcard;
      admitcardArray = admitcards;
    }
    localStorage.setItem('admitcards', JSON.stringify(admitcardArray));
  }
}
