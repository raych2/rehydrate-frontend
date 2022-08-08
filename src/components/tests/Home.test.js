import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Home from '../Home';

describe('Home component', () => {
  test('renders correctly', () => {
    const { container } = render(<Home />, { wrapper: MemoryRouter });
    expect(container).toMatchSnapshot();
  });
  test('navigates to About page after link is clicked', async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    );
    const user = userEvent.setup();
    await user.click(screen.getByRole('link', { name: 'Learn More!' }));
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/about',
        search: '',
      },
      undefined
    );
  });
});
