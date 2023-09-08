import { Component, OnInit } from '@angular/core';
import { quizData } from './data';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  dataQuiz: any[] = quizData;

  currentQuestionIndex = 0;
  currentQuestion: any;

  ngOnInit(): void {
    this.loadQuestion(this.currentQuestionIndex);
  }

  loadQuestion(index: number): void {
    this.currentQuestion = this.dataQuiz[index];
  }

  checkAnswer(answer: string): void {
    if (answer === this.currentQuestion.correctAnswer) {
      console.log("Bonne réponse !");
    } else {
      console.log("Mauvaise réponse.");
    }

    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.dataQuiz.length) {
      this.loadQuestion(this.currentQuestionIndex);
    } else {
      console.log("Fin du quizz.");
    }
  }

}
