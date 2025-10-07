import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Card } from './Card';
import type { CardProps } from './Card';

describe('<Card />', () => {
  const mockProps: CardProps = {
    id: 123,
    title: 'Best fixed',
    type: 'VALUE_FLEX',
    productName: 'MCAP Value-Flex Fixed Special',
    rate: '2.04%',
    onSelectProduct: vi.fn(),
  };

  it('should render all props correctly', () => {
    render(<Card {...mockProps} />);

    expect(screen.getByRole('heading', { name: /best fixed/i })).toBeInTheDocument();
    expect(screen.getByText('Value Flex')).toBeInTheDocument();
    expect(screen.getByText('MCAP Value-Flex Fixed Special')).toBeInTheDocument();
    expect(screen.getByText('2.04%')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /select this product/i })).toBeInTheDocument();
  });

  it('should call onSelectProduct with the correct id when button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnSelectProduct = vi.fn();
    const testId = 12345;

    const mockProps: CardProps = {
      id: testId,
      title: 'Test Product',
      type: 'FIXED',
      productName: 'Test Name',
      rate: '1.00%',
      onSelectProduct: mockOnSelectProduct,
    };

    render(<Card {...mockProps} />);

    const buttonElement = screen.getByRole('button', { name: /select this product/i });

    await user.click(buttonElement);

    expect(mockOnSelectProduct).toHaveBeenCalledTimes(1);
    expect(mockOnSelectProduct).toHaveBeenCalledWith(testId);
  });
});