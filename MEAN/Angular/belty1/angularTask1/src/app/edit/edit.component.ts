import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private _service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  editAnimal: any
  error_message: any
  errors: boolean

  ngOnInit() {
    console.log("loaded edit.component.ts")
    this.errors = false
    this.editAnimal = {
      pet_name: ""
    }
    this.getAnimalByID()
  }

  onSubmit(){
    let obs = this._service.editThisAnimal(this.editAnimal);
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

  cancelButtonClicked(){
    this._router.navigate(['/home']);
  }

  getAnimalByID(){
    let obs = this._service.getThisAnimal();
    obs.subscribe(data => {
      console.log("yay getAnimalByID data: ", data)
      this.editAnimal.pet_name = data['data'][0]['pet_name']
      this.editAnimal.pet_type = data['data'][0]['pet_type']
      this.editAnimal.pet_description = data['data'][0]['pet_description']
      this.editAnimal.pet_skill_1 = data['data'][0]['pet_skill_1']
      this.editAnimal.pet_skill_2 = data['data'][0]['pet_skill_2']
      this.editAnimal.pet_skill_3 = data['data'][0]['pet_skill_3']
    })
  }

}
