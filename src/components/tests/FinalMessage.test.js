import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FinalMessage from '../Quiz/FinalMessage';

const score = 5;
const retakeQuiz = jest.fn();
describe('FinalMessage component', () => {
  test('renders correctly', () => {
    render(<FinalMessage score={score} retakeQuiz={retakeQuiz} />);
    expect(screen.getByRole('heading').textContent).toMatch(
      'Your final score is 5/5.'
    );
    expect(screen.getByRole('button').textContent).toMatch('Retake quiz');
  });
  test('Retake Quiz button restarts quiz', async () => {
    render(<FinalMessage score={score} retakeQuiz={retakeQuiz} />);
    const retakeButton = screen.getByRole('button', {
      name: /retake quiz/i,
    });
    await userEvent.click(retakeButton);
    expect(retakeQuiz).toHaveBeenCalledTimes(1);
  });
});
