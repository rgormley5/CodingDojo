import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  animals: any

  ngOnInit() {
    this.displayAnimals();
  }

  displayAnimals(){
    let obs = this._service.getAllAnimals();
    obs.subscribe(data => {
      console.log("yay displayAnimals data: ", data);
      this.animals = data['animals']
    })
  }

  detailsClicked(id){
    this._service.tempID = id;
    this._router.navigate(['/details/' + id])
  }

  editClicked(id){
    this._service.tempID = id;
    this._router.navigate(['/edit/' + id])
  }

}
