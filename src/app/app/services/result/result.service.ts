import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  constructor() {}
  getResults() {
    const results = localStorage.getItem('results');
    return results == null ? [] : JSON.parse(results);
  }
  getResultByIndex(i: number) {
    const results = localStorage.getItem('results');
    return results == null ? null : JSON.parse(results)[i];
  }
  addResult(result: any) {
    const results = localStorage.getItem('results');
    let resultarray = [];
    if (results == null) {
      resultarray.push(result);
    } else {
      resultarray = [result, ...JSON.parse(results)];
    }
    localStorage.setItem('results', JSON.stringify(resultarray));
  }
  saveResult(result: any, id: number) {
    const resultstr = localStorage.getItem('results');
    let resultarray = [];
    if (resultstr == null) {
      resultarray.push(result);
    } else {
      const results = JSON.parse(resultstr);
      results[id] = result;
      resultarray = results;
    }
    localStorage.setItem('results', JSON.stringify(resultarray));
  }
}
