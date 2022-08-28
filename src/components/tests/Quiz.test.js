import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quiz from '../Quiz/Quiz';

jest.mock('../Quiz/FinalMessage', () => () => (
  <div data-testid="quiz-end">Final Message</div>
));
jest.mock('../Quiz/Question', () => () => (
  <div data-testid="test-question">Test Question</div>
));
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

describe('Quiz component', () => {
  test("renders 'loading' correctly while fetching questions", async () => {
    render(<Quiz />);
    expect(screen.getAllByRole('heading')[1].textContent).toMatch(
      /loading \.\.\./i
    );
  });
  test('retrieves questions correctly', async () => {
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(mockQuestions),
    });
    const mockedFetch = jest
      .spyOn(window, 'fetch')
      .mockImplementationOnce(() => mockFetch);
    render(<Quiz />);
    await waitFor(() => {
      expect(mockedFetch).toHaveBeenCalledTimes(1);
    });
    expect(screen.getByTestId('test-question')).toBeInTheDocument();
    expect(screen.queryByTestId('quiz-end')).not.toBeInTheDocument();
    mockedFetch.mockRestore();
  });
  test('displays error message if unable to retrieve questions', async () => {
    const mockFetch = Promise.resolve({
      json: () => Promise.reject(),
    });
    const mockedFetch = jest
      .spyOn(window, 'fetch')
      .mockImplementationOnce(() => mockFetch);
    render(<Quiz />);
    await waitFor(() => {
      expect(mockedFetch).toHaveBeenCalledTimes(1);
    });
    expect(screen.getByText('An error has occured')).toBeInTheDocument();
    mockedFetch.mockRestore();
  });
});
