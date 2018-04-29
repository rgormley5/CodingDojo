import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private _service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  animal: any

  ngOnInit() {
    this.getAnimalByID()
  }

  getAnimalByID(){
    let obs = this._service.getThisAnimal();
    obs.subscribe(data => {
      console.log("yay getAnimalByID data: ", data)
      this.animal = data['data'][0]
    })
  }

  adoptClicked(){
    let obs = this._service.deleteThisAnimal();
    obs.subscribe(data => {
      console.log("yay adoptClicked data: ", data);
    })
    this._router.navigate(['/home'])
  }

  likeClicked(){
    let obs = this._service.addLike(this.animal);
    obs.subscribe(data => {
      console.log("yay likeClicked data: ", data)
    })
    this._router.navigateByUrl('/refreshComponent', {skipLocationChange: true}).then(()=> this._router.navigate(['/details/' + this._service.tempID]))
  }

  // reload(){
  //   this._router.navigateByUrl('/refreshComponent', {skipLocationChange: true}).then(()=> this._router.navigate(['/details']))
  // }

}
