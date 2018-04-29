import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  public href: String = "";
  route: String;

  constructor(
    private router: Router,
    private _api: ApiService
  ) { }

  weather: any;

  ngOnInit() {
    console.log("loaded sanjose.component.ts")
    let str = this.router.url;
    let cityname = str.substring(1, str.length);
    this.getSanJoseWeather(cityname);
    // San Jose has a space: api url needs san%20jose
  }

  getSanJoseWeather(cityname) {
    let obs = this._api.getWeatherByName(cityname);
    obs.subscribe(data => {
      console.log('yay data!', data);
      this.weather = data;
    })
  }

}
