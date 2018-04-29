import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  authors: any
  editAuthor: any

  ngOnInit() {
    console.log("loaded home component");
    this.fetchAuthors();

    this.editAuthor = {
      author_name: String,
      updated_at: Date
    }

  }

  fetchAuthors() {
    let obs = this._http.findAllAuthors();
    obs.subscribe(data => {
      console.log("yay data!", data);
      this.authors = data['authors'];
    })
  }

  editButtonClicked(id) {
    console.log("id is: ", id)
    this._http.saveId(id);
    // this._router.navigate(['/edit']);
    this._router.navigate(['/edit/' + id]);
  }

  viewQuotesButtonClicked(id) {
    this._http.saveId(id)
    this._router.navigate(['/author/' + id]);
  }

  deleteButtonClicked(id) {
    let obs1 = this._http.deleteThisAuthor(id);
    obs1.subscribe(data => {
      console.log("yay obs1 data!", data);
    })
    this.fetchAuthors();
  }

}
