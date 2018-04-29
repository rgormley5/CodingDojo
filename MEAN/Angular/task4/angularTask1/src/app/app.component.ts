import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks = [];

  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    // this.getTasksFromService()
  }

  // getTasksFromService() {
  //   let observable = this._httpService.getTasks()
  //   observable.subscribe(data => {
  //     console.log("Got our data!", data)
  //     this.tasks = data['tasks'][0].description;
  //   })
  // }

  button1Clicked() {
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.tasks = data['tasks'][0].description;
    })
  }

  button2Clicked(id) {
    console.log("input is: ", id)

    let observable = this._httpService.getTaskByID(id)
    observable.subscribe(data => {
      console.log("This is data: ", data)
      this.tasks = data['task'][0].description;
    })

    // return false
  }
  
}
