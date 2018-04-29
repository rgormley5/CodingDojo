import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newnew';
  tasks = [];
  newTask: any;

  constructor(private _httpService: HttpService) {
  }
  ngOnInit() {
    // this.getTasksFromService()
    this.newTask = {
      title: "",
      description: "" 
    }
  }

  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = {title: "", description: ""}
    })
  }

  getTasksFromService() {
    console.log("in getTasks")
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.tasks = data['tasks'];
    })
  }
  
}
