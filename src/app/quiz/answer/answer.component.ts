import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() answers: any;
  @Output() answer: EventEmitter<string> = new EventEmitter();

  constructor() { }

  handlerButton(answer: string) {
    this.answer.emit(answer);
  }

  ngOnInit(): void {
    console.log(this.answers)
  }

}
