import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { quizData } from './data';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { QuizService } from '../shared/services/quizz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  dataQuiz: any[] = [];

  currentQuestionIndex = 0;
  currentQuestion: any;
  score = 0;
  faFutbol = faFutbol;

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe((data: any) => {
      console.log(data)
      this.dataQuiz = data;
      this.loadQuestion(this.currentQuestionIndex);
    });
  };

  loadQuestion(index: number): void {
    console.log(this.dataQuiz[index])
    this.currentQuestion = this.dataQuiz[index];
  };

  checkAnswer(answer: string): void {
    this.currentQuestionIndex++;
    if (answer === this.currentQuestion.correctAnswer) {
      this.score++;
    }
    if (this.currentQuestionIndex < this.dataQuiz.length) {
      this.loadQuestion(this.currentQuestionIndex);
    }
  };

  get isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.dataQuiz?.length - 1;
  };
}
