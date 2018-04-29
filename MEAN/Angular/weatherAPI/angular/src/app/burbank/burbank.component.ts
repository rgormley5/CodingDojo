import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
// import { Location } from '@angular/common';

@Component({
  // template: 'The href is: {{href}}',
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  public href: String = "";
  route: String;

  constructor(
    // location: Location,
    private router: Router,
    private _api: ApiService
  ) { }
  
  weather: any

  ngOnInit() {
    console.log("loaded burbank.component.ts")
    // this.href = this.router.url
    let str = this.router.url
    let cityname = str.substring(1, str.length)
    console.log('cityname is:', cityname)

    let obs = this._api.getWeatherByName(cityname)
    obs.subscribe(data => {
      console.log('yay data!', data);
      this.weather = data
    })

  }



}
