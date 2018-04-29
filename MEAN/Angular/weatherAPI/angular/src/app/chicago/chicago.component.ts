import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  public href: String = "";
  route: String;

  constructor(
    private router: Router,
    private _api: ApiService
  ) { }

  weather: any

  ngOnInit() {
    console.log("loaded chicago.component.ts")
    let str = this.router.url
    let cityname = str.substring(1, str.length)
    this.getChicagoWeather(cityname)
  }

  getChicagoWeather(cityname) {
    let obs = this._api.getWeatherByName(cityname);
    obs.subscribe(data => {
      console.log('yay data!', data);
      this.weather = data
    })
  }

}
