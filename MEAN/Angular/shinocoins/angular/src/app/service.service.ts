import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  shintoCoinsOwned = 0;
  shintoCoinValue = 1;
  questionsArray = ["Question 1", "Question 2", "Question 3"];
  answersArray = ["1", "2", "3"];
  randInt = this.randomNumber();
  question = this.questionsArray[this.randInt]
  id = 0;

  allTrans = [];

  randomNumber() {
    return Math.floor(Math.random() * Math.floor(this.questionsArray.length - 1));
  }

}
