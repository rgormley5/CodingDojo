import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newnew';
  constructor(
    private _service: ServiceService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {

  }

}
