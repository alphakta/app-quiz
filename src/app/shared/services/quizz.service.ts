import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuestion } from './question.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private currentQuestionIndex = 0;
  private score = 0;
  private apiUrl = 'http://localhost:3000/questions';

  constructor(private http: HttpClient) {
  }

  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(this.apiUrl);
  }

  getQuestionsByCategory(categoryId: number): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(this.apiUrl + '?categoryId=' + categoryId);
  }

  getCurrentQuestionIndex(): number {
    return this.currentQuestionIndex;
  }

  checkAnswer(answer: string, questions: any[]): void {
    if (answer === questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }

  isLastQuestion(questions: any[]): boolean {
    return this.currentQuestionIndex === questions.length - 1;
  }

  resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  getScore(): number {
    return this.score;
  }

  getTotalQuestions(questions: any[]): number {
    return questions.length;
  }
}

