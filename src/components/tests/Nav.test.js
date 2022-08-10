import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';

describe('Nav component', () => {
  test('renders correctly', () => {
    const { container } = render(<Nav />, { wrapper: MemoryRouter });
    expect(container).toMatchSnapshot();
  });
  test('should have correct href for each page', () => {
    render(<Nav />, { wrapper: MemoryRouter });
    const homeLink = screen.getByRole('link', {
      name: 'rehydrate logo Rehydrate',
    });
    expect(homeLink.getAttribute('href')).toBe('/');
    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink.getAttribute('href')).toBe('/about');
    const tipsLink = screen.getByRole('link', { name: 'Tips' });
    expect(tipsLink.getAttribute('href')).toBe('/tips');
    const statsLink = screen.getByRole('link', { name: 'Stats' });
    expect(statsLink.getAttribute('href')).toBe('/stats');
    const quizLink = screen.getByRole('link', { name: 'Quiz' });
    expect(quizLink.getAttribute('href')).toBe('/quiz');
  });
});
