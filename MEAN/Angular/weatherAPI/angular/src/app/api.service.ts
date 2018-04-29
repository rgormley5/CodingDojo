import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private _api: HttpClient) { 

  }

  getWeatherByName(cityname) {
    return this._api.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&APPID=21ee5bd131c030d449ee65aed35f0a85');
  }

}
