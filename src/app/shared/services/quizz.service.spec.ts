import { TestBed } from '@angular/core/testing';

import { QuizService } from './quizz.service';

describe('QuizzService', () => {
  let service: QuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
