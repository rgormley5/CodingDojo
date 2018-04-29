import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
      
  }

  tempid: any

  saveId(id) {
    this.tempid = id;
  }

  findAllAuthors() {
    return this._http.get('/authors')
  }

  addNewAuthor(newAuthor) {
    return this._http.post('/authors', newAuthor)
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

  deleteThisQuote(deleteQuote) {
    console.log("deleteQuote is: ", deleteQuote)
    return this._http.patch('/authors/deletequote/' + deleteQuote['quoteID'], deleteQuote)
  }

  addNewQuote(newQuote) {
    return this._http.patch('/authors/' + this.tempid, newQuote)
  }

  updateQuote(deleteQuote) {
    return this._http.patch('/authors/updatequote/' + deleteQuote['quoteID'], deleteQuote )
  }
  
}

