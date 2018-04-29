import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  newAnimal: any
  error_message: any
  errors: boolean

  ngOnInit() {
    this.newAnimal = {
      pet_name: ""
    }
    this.errors = false
  }

  cancelButtonClicked(){
    this._router.navigate(['/home']);
  }

  onSubmit(){
    console.log("this.newAnimal is: ", this.newAnimal)
    let obs = this._service.newAnimal(this.newAnimal)
    obs.subscribe(data => {

      if (data['error']) {
        console.log("data is: ", data)
        this.errors = true
        this.error_message = data['error']['message']
      } else {
        console.log("yay onSubmit data: ", data)
        this._router.navigate(['/home']);
      }
    })
  }

}
