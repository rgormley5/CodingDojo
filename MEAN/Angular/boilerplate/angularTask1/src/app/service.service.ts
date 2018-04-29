import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceService {

  constructor(
    private _httpClient: HttpClient
  ) { }

}
