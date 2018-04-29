import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  tempID = this._http.tempid;
  author: String
  quotes: any
  rank: Number
  deleteQuote: any

  ngOnInit() {
    this.findAuthor();
  }

  // sort quotes by rank > sort in quotesArr

  deleteClicked(id) {
    this.deleteQuote = {
      quoteID: id,
      authorID: this.tempID
    }
    console.log("this.deleteQuote is: ", this.deleteQuote)
    let obs1 = this._http.deleteThisQuote(this.deleteQuote);
    obs1.subscribe(data => {
      console.log("yay, data!", data)
    })
  }

  voteUpClicked(id) {
    this.deleteQuote = {
      quoteID: id,
      authorID: this.tempID
    }
    console.log("this.deleteQuote is: ", this.deleteQuote)
    let obs = this._http.updateQuote(this.deleteQuote);
    obs.subscribe(data => {
      console.log("yay deleteQuote data: ", data);
      this.rank = data['newRank']
    })
  }

  voteDownClicked() {

  }

  findAuthor() {
    let obs = this._http.findThisAuthor(this.tempID)
    obs.subscribe(data => {
      console.log("yay data!", data);
      this.author = data['data'][0]['author_name'];
      this.quotes = data['data'][0]['quoteArr']
      this.rank = data['data'][0]['quoteArr'][0]['rank']
    })
  }

  addQuoteClicked() {
    this._router.navigate(['/addquote/' + this.tempID]);
  }

}
