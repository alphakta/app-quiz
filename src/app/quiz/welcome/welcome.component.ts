import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
      <h1>Application Quizz Football</h1>
      <app-category></app-category>
    `,
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
