import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  newAuthor: any
  error_message: any
  errors: boolean

  ngOnInit() {
    this.newAuthor = {
      author_name: "",
    }
    this.errors = false
  }

  createNewAuthor() {
    console.log("authorname is: ", this.newAuthor)
    let obs = this._httpService.addNewAuthor(this.newAuthor)
    obs.subscribe(data => {
      if (data['error']) {
        console.log("data is: ", data)
        this.errors = true
        this.error_message = data['error']['message']
        console.log("this.error_message is: ", this.error_message)
      } else {
        console.log("yay data, no errors!", data)
        this.errors = false
        this._router.navigate(['/home']);
      }
    })
  }

  cancelButtonClicked() {
    this._router.navigate(['/home']);
  }

}
