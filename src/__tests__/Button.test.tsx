import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../app/components/Button';

describe('Button component', () => {
  it('renders an anchor when href is provided', () => {
    render(<Button href="/test">Link</Button>);
    const link = screen.getByRole('link', { name: 'Link' });
    expect(link).toHaveAttribute('href', '/test');
  });

  it('renders a button when no href is provided', () => {
    render(<Button>Press</Button>);
    const button = screen.getByRole('button', { name: 'Press' });
    expect(button).toHaveClass('inline-block');
  });
});
