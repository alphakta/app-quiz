import { Component, OnInit } from '@angular/core';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  template: `
      <h1>Application Quizz Football</h1>
      <p>Viens testez tes connaissances sur le football en répondant à toutes nos questions les plus passionnantes et insolites...</p>
      <app-category></app-category>
    `,
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  faFutbol = faFutbol;
  constructor() { }
  ngOnInit(): void {
  }

}
