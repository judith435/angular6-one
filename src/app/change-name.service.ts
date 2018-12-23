import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeNameService {

  constructor() { }
  private peopleData = [];

  getPeople(): Promise<any[]> {
    return new Promise<any[]> ((resolve, reject) => this.getPeopleResolver(resolve, reject))
  }

  private getPeopleResolver(resolve, reject){
    setTimeout(() => {
      if (this.peopleData == null) {
        reject('unable to get data');
        return;
      }
      resolve(this.peopleData);
    }, 1000);
  }
}
