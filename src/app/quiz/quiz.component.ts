import { Component, OnInit } from '@angular/core';
import { quizData } from './data';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  dataQuiz: any[] = quizData;

  currentQuestionIndex = 0;
  currentQuestion: any;
  score = 0;
  faFutbol = faFutbol;


  ngOnInit(): void {
    this.loadQuestion(this.currentQuestionIndex);
  }

  loadQuestion(index: number): void {
    this.currentQuestion = this.dataQuiz[index];
  }

  checkAnswer(answer: string): void {
    this.currentQuestionIndex++;
    if (answer === this.currentQuestion.correctAnswer) {
      this.score++;
    }
    if (this.currentQuestionIndex < this.dataQuiz.length) {
      this.loadQuestion(this.currentQuestionIndex);
    }
  }

  // reloadQuiz(): void {
  //   this.currentQuestionIndex = 0;
  //   this.score = 0;
  //   console.log(this.currentQuestionIndex)
  //   this.loadQuestion(this.currentQuestionIndex);
  // }

  get isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.dataQuiz.length - 1;
  }
}
