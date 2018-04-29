import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NiceService {

  constructor(private _nice: HttpClient) {
      this.getTasks();
      this.getDescription();
  }

  getTasks() {
    let tempObservable = this._nice.get('/tasks');
    tempObservable.subscribe(data => console.log("nice!nice!", data));
  }

  getDescription() {
    let tempObservable = this._nice.get('/tasks');
    tempObservable.subscribe(data => console.log("description is: ", data['tasks'][0].description));
  }

}
