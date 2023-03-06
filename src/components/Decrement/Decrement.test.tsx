import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '../../../config/jest/setupTests';

import { Decrement } from './Decrement';

describe('Decrement tests', () => {
  it('renders without crashing', () => {
    render(<Decrement />);
    expect(screen.getByText(/Click/i)).toBeInTheDocument();
  });

  it('renders by Role', () => {
    render(<Decrement />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('feature for render', () => {
    render(<Decrement />);
    expect(screen.queryByText(/decrement/i)).toBeNull();
  });

  it('feature has class', () => {
    render(<Decrement />);
    expect(screen.getByRole('button')).not.toHaveStyle({
      color: 'white',
    });
  });

  it('events in feature', () => {
    render(<Decrement />);
    fireEvent.click(screen.getByRole('button'), {
      target: {
        value: 'Decrement',
      },
    });
  });
});
