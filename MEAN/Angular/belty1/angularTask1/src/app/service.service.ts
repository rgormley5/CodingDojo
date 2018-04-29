import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  tempID: any

  newAnimal(newAnimal) {
    return this._httpClient.post('/animal', newAnimal);
  }

  getAllAnimals() {
    return this._httpClient.get('/animal')
  }

  getThisAnimal() {
    return this._httpClient.get('animal/' + this.tempID)
  }

  deleteThisAnimal() {
    return this._httpClient.delete('/animal/' + this.tempID)
  }

  editThisAnimal(editAnimal) {
    return this._httpClient.put('/animal/' + this.tempID, editAnimal)
  }

  addLike(editAnimal) {
    return this._httpClient.patch('/animal/' + this.tempID, editAnimal)
  }

}
