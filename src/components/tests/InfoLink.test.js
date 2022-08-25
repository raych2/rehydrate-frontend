import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InfoLink from '../Quiz/InfoLink';

const mockQuestion = {
  _id: '1',
  questionText: 'What is my favorite color?',
  answerOptions: [
    { answerText: 'green', isCorrect: true, _id: '620b09fc0de25d5f5b46ecf1' },
    { answerText: 'blue', isCorrect: false, _id: '620b09fc0de25d5f5b46ecf2' },
    { answerText: 'red', isCorrect: false, _id: '620b09fc0de25d5f5b46ecf3' },
  ],
  infoUrl: 'https:&#x2F;&#x2F;www.google.com&#x2F;',
};
const parseEntities = jest.fn();

describe('InfoLink component', () => {
  test('renders correctly', () => {
    render(<InfoLink question={mockQuestion} parseEntities={parseEntities} />);
    expect(screen.getByText(/more info/i)).toBeInTheDocument();
  });
  test('infoUrl is parsed with parseEntities', () => {
    render(<InfoLink question={mockQuestion} parseEntities={parseEntities} />);
    expect(parseEntities).toHaveBeenCalledWith(mockQuestion.infoUrl);
    expect(parseEntities).toHaveBeenCalledTimes(2);
  });
});
