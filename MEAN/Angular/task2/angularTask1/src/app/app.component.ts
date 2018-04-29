import { Component } from '@angular/core';
import { NiceService } from './nice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newnew';
  constructor(private _niceService: NiceService) {
    
  }
}
