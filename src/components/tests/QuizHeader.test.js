import { render, screen } from '@testing-library/react';
import QuizHeader from '../Quiz/QuizHeader';

describe('Quiz Header component', () => {
  test('renders correctly', () => {
    render(<QuizHeader />);
    expect(screen.getByRole('heading').textContent).toMatch(/quiz/i);
  });
});
