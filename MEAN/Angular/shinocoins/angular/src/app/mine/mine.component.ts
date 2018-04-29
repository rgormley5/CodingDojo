import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Action } from 'rxjs/scheduler/Action';


@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  question: String
  answer: String
  atrans = {
    action: "",
    amount: 0,
    value: this._service.shintoCoinValue,
    id: this._service.id
  }

  constructor(
    private _service: ServiceService
  ) { }

  ngOnInit() {
    this.question = this._service.question
  }

  submitInput() {
    if (this.answer == this._service.answersArray[this._service.randInt]) {
      console.log("answered correctly!");
      this._service.shintoCoinValue++;
      this.question = this._service.question;
      console.log("shintoCoinValue is: ", this._service.shintoCoinValue);
      this.atrans["action"] = "Mined";
      this.atrans["amount"] += 1;
      this.atrans["id"]++;
      this._service.allTrans.push(this.atrans)
      console.log("this._service.allTrans is: ", this._service.allTrans)
      
    } else {
      console.log("incorrect answer")
      this.question = this._service.question;
    }
  }

}
