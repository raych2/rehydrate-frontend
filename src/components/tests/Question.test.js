import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Question from '../Quiz/Question';

const score = 0;
const mockQuestions = [
  {
    _id: '1',
    questionText: 'What is my favorite color?',
    answerOptions: [
      { answerText: 'green', isCorrect: true, _id: '01' },
      { answerText: 'blue', isCorrect: false, _id: '02' },
      { answerText: 'red', isCorrect: false, _id: '03' },
    ],
    infoUrl: 'https:&#x2F;&#x2F;www.google.com&#x2F;',
  },
];
const currentQuestionNumber = 0;
const selected = '';
const correctAnswer = '';
const disableButton = '';
const moreInfo = '';
const handleClick = jest.fn();
const handleNextQuestion = jest.fn();

describe('Question component', () => {
  test('renders headings correctly', () => {
    render(
      <Question
        score={score}
        questions={mockQuestions}
        currentQuestionNumber={currentQuestionNumber}
        selected={selected}
        correctAnswer={correctAnswer}
        disableButton={disableButton}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleNextQuestion={handleNextQuestion}
      />
    );
    expect(screen.getAllByRole('heading')).toHaveLength(3);
    expect(
      screen.getByRole('heading', {
        name: /score: 0\/5/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /please select the best answer\./i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /1\. what is my favorite color\?/i,
      })
    ).toBeInTheDocument();
  });
  test('renders answer buttons', () => {
    render(
      <Question
        score={score}
        questions={mockQuestions}
        currentQuestionNumber={currentQuestionNumber}
        selected={selected}
        correctAnswer={correctAnswer}
        disableButton={disableButton}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleNextQuestion={handleNextQuestion}
      />
    );
    expect(
      screen.getByRole('button', {
        name: /green/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /blue/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /red/i,
      })
    ).toBeInTheDocument();
  });
  test("renders 'next question' button", () => {
    render(
      <Question
        score={score}
        questions={mockQuestions}
        currentQuestionNumber={currentQuestionNumber}
        selected={selected}
        correctAnswer={correctAnswer}
        disableButton={disableButton}
        moreInfo={moreInfo}
        handleClick={handleClick}
        handleNextQuestion={handleNextQuestion}
      />
    );
    expect(
      screen.getByRole('button', {
        name: /next question/i,
      })
    ).toBeInTheDocument();
  });
});
