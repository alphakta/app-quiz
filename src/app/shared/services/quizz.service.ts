// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { quizData } from 'src/app/quiz/data';

// @Injectable({
//   providedIn: 'root'
// })
// export class QuizService {
//   private dataQuiz = quizData;

//   private currentQuestionIndex = 0;
//   private score = 0;
//   private apiUrl = 'http://localhost:3000/questions';

//   constructor(private http: HttpClient) {
//   }

//   getQuestions(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   getCurrentQuestion(): any {
//     return this.dataQuiz[this.currentQuestionIndex];
//   }

//   checkAnswer(answer: string): void {
//     if (answer === this.getCurrentQuestion().correctAnswer) {
//       this.score++;
//     }
//     this.currentQuestionIndex++;
//   }

//   isLastQuestion(): boolean {
//     return this.currentQuestionIndex === this.dataQuiz.length - 1;
//   }

//   resetQuiz(): void {
//     this.currentQuestionIndex = 0;
//     this.score = 0;
//   }

//   getScore(): number {
//     return this.score;
//   }

//   getTotalQuestions(): number {
//     return this.dataQuiz.length;
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private currentQuestionIndex = 0;
  private score = 0;
  private apiUrl = 'http://localhost:3000/questions';

  constructor(private http: HttpClient) {
  }

  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
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

