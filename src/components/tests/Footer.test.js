import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  test('should navigate to devpost project when link is clicked', () => {
    render(<Footer />);
    const projectLink = screen.getByRole('link', { name: 'Devpost' });
    expect(projectLink.getAttribute('href')).toBe(
      'https://devpost.com/software/rehydrate'
    );
  });
});
