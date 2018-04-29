import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  editAuthor: any
  tempId: any
  errors: boolean
  error_message: any

  ngOnInit() {
    this.editAuthor = {
      author_name: "",
    }
    this.errors = false
    this.tempId = this._httpService.tempid
    console.log("edit.component.ts: this.tempId is:", this.tempId)

    this.fetchAuthor(this.tempId)
  }

  cancelButtonClicked() {
    this._router.navigate(['/home']);
  }

  fetchAuthor(id) {
    let obs = this._httpService.findThisAuthor(id);
    obs.subscribe(data => {
      console.log("yay data!", data);
      this.editAuthor = data['data'][0]
    })
  }

  editSubmitted(editAuthor) {
    console.log("edit.component.ts: editSubmitted(editAuthor): this.editAuthor is: ", this.editAuthor)
    let obs = this._httpService.editThisAuthor(this.editAuthor);
    obs.subscribe(data => {
      if (data['error']) {
        console.log("data is: ", data)
        this.errors = true
        this.error_message = data['error']['message']
      } else {
        console.log("yay data!", data);
        this._router.navigate(['/home']);
      }
    })
  }
  
}
