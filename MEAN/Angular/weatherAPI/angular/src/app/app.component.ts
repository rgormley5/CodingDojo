import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router'; 
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _api: ApiService
  ) {}
  title = 'Dojo Weather Forecast';
  weather: any

  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
  }

  goHome() {
    this._router.navigate(['/home']);
  }

  getWeather(name) {
    // let obs = this._api.getWeatherByName();
    // obs.subscribe(data => {
    //   console.log("yay data!", data);
    //   this.weather = data
    // })
    this._router.navigate(['/' + name])
  }

}
