import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
      
  }

  tempid: any

  addNewAuthor(newAuthor) {
    return this._http.post('/authors', newAuthor)
  }

  findAllAuthors() {
    return this._http.get('/authors')
  }

  deleteThisAuthor(id) {
    return this._http.delete('/authors/' + id)
  }

  editThisAuthor(editAuthor) {
    return this._http.put('/authors/' + editAuthor._id, editAuthor)
  }

  findThisAuthor(id) {
    return this._http.get('/authors/' + id)
  }

  saveId(id) {
    this.tempid = id;
  }
  
}

