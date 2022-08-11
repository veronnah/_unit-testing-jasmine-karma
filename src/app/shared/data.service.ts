import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getDetails() {
    // just for testing purposes :)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 2000)
    });
  }
}
