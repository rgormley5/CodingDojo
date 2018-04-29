import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  public href: String = "";
  route: String;

  constructor(
    private _api: ApiService,
    private router: Router
  ) { }

  weather: any;

  ngOnInit() {
    console.log("loaded seattle.component.ts");

    let str = this.router.url
    let cityname = str.substring(1, str.length)
    
    this.getSeattleWeather(cityname);
  }

  getSeattleWeather(cityname) {
    let obs = this._api.getWeatherByName(cityname);
    obs.subscribe(data => {
      console.log("yay data!", data);
      this.weather = data
    })
  }

}
