import { render } from '@testing-library/react';
import About from '../About';

describe('About component', () => {
  test('renders correctly', () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});
