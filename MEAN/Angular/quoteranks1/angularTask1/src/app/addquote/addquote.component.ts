import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-addquote',
  templateUrl: './addquote.component.html',
  styleUrls: ['./addquote.component.css']
})
export class AddquoteComponent implements OnInit {

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  newQuote: any
  tempID = this._http.tempid
  author: any

  ngOnInit() {
    this.newQuote = {
      quote: "",
    }
  }

  quoteSubmitted() {
    let obs = this._http.addNewQuote(this.newQuote);
    obs.subscribe(data => {
      console.log("addquote > quoteSubmit > data is:", data);
    })
    this._router.navigate(['/author/' + this.tempID]);
  }

  cancelButtonClicked() {
    this._router.navigate(['/home']);
  }

  findAuthor() {
    let obs = this._http.findThisAuthor(this.tempID);
    obs.subscribe(data => {
      console.log("yay data!", data);
      this.author = data['data'][0]['author_name']
    })
  }

}
