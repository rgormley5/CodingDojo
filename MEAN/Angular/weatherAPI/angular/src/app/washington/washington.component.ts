import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  public href: String = "";
  route: String;

  constructor(
    private router: Router,
    private _api: ApiService
  ) { }

  weather: any

  ngOnInit() {
    console.log("loaded washington.component.ts");
    let str = this.router.url;
    let cityname = str.substring(1, str.length);
    this.getWashingtonWeather(cityname);
  }

  getWashingtonWeather(cityname) {
    let obs = this._api.getWeatherByName(cityname);
    obs.subscribe(data => {
      console.log('yay data!', data);
      this.weather = data;
    })
  }

}
