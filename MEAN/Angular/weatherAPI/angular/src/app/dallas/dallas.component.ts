import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  public href: String = "";
  route: String;

  constructor(
    private router: Router,
    private _api: ApiService
  ) { }

  weather: any;

  ngOnInit() {
    console.log("loaded dallas.component.ts");
    let str = this.router.url;
    let cityname = str.substring(1, str.length);
    this.getDallasWeather(cityname);
  }

  getDallasWeather(cityname) {
    let obs = this._api.getWeatherByName(cityname);
    obs.subscribe(data => {
      console.log('yay data!', data);
      this.weather = data;
    })
  }

}
