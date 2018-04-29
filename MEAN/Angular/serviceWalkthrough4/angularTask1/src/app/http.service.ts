import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
      // this.getPokemon();
  }

  getTasks() {
    console.log("in here")
    // our http response is an observable, store it in the variable tempObservable
    // let tempObservable = this._http.get('/tasks');

    // subscribe to our observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks')
  }

  addTask(newtask) {
    return this._http.post('/tasks', newtask)
  }
  
}

