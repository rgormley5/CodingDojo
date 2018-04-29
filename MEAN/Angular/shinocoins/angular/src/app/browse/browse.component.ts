import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(
    private _service: ServiceService
  ) { }

  trans = this._service.allTrans

  ngOnInit() {
  }

  submitID(id) {
    console.log("id is: ", id)
  }

}
