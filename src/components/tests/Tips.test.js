import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Tips from '../Tips';

describe('Tips component', () => {
  test('renders correctly', () => {
    const { container } = render(<Tips />, { wrapper: MemoryRouter });
    expect(container).toMatchSnapshot();
  });
  test('navigates to Quiz page after link is clicked', async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <Tips />
      </Router>
    );
    const user = userEvent.setup();
    await user.click(
      screen.getByRole('link', {
        name: /take a quiz/i,
      })
    );
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/quiz',
        search: '',
      },
      undefined
    );
  });
});
