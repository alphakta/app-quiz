export interface IQuestion {
    id: number;
    questionLabel: string;
    answers: string[];
    correctAnswer: string;
    categoryId: number;
}