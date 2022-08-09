import { render } from '@testing-library/react';
import Stats from '../Stats';

describe('Stats component', () => {
  test('renders correctly', () => {
    const { container } = render(<Stats />);
    expect(container).toMatchSnapshot();
  });
});
