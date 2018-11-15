import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  trivia: any;
  answers = [];
  result: string;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.loadTrivia();
  }

  loadTrivia() {
    let observable = this._httpService.getTrivia()
    observable.subscribe(data => {
      this.answers = [];
      this.trivia = data;
      this.answers.push(this.trivia.results[0].correct_answer);
      for (var idx of this.trivia.results[0].incorrect_answers) {
        this.answers.push(idx)
      }
      this.shuffle(this.answers);  
    })
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  triviaAnswer(answer) {
    if (answer == this.trivia.results[0].correct_answer) {
      this._httpService.yourCoins += 1;
      this._httpService.coinValue += 1;
      this._httpService.coinTrans('Mined', 1)
      this.result = "Answer was correct! 1 ShintoCoin mined!"
      this.loadTrivia();
    }
    else {
      this.result = "Answer was incorrect!"
      this.loadTrivia();
    }
  }
}
