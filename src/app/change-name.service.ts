import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export class People { name: string;}  
@Injectable({
  providedIn: 'root'
})
export class ChangeNameService {

  constructor() { }
  private peopleData = [];

  getPeople(): Promise<any[]> {
    return new Promise<any[]> ((resolve, reject) => this.getPeopleResolver(resolve, reject))
  }

  public People: Observable<any> = new Observable(observer => {
    setTimeout (() => {
      if (this.peopleData == null) {
        observer.error('unable to get the data');
      }
      else {
        observer.next([...this.peopleData])
      }
    }, 1000);

    setTimeout (() => {
      if (this.extraObj == null) {
        observer.error('unable to get the data');
      }
      else {
        observer.next(this.extraObj)
      }
    }, 2000);
    setTimeout(()  =>
    {  observer.complete();
    }) 
  }) 


  private getPeopleResolver(resolve, reject){
    setTimeout(() => {
      if (this.peopleData == null) {
        reject('unable to get data');
        return;
      }
      resolve([...this.peopleData]);
    }, 1000);
  }
}
