import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';

vi.mock('../hooks/useMortgageProducts', () => ({
  useMortgageProducts: () => ({
    isLoading: false,
    error: null,
    bestFixedProduct: { id: 1, type: 'FIXED', family: 'STANDARD', name: 'Mock Fixed', bestRate: 2.55 },
    bestVariableProduct: { id: 2, type: 'VARIABLE', family: 'VALUE_FLEX', name: 'Mock Variable', bestRate: 1.99 },
  }),
}));

vi.mock('../services/api', () => ({
  createApplication: vi.fn().mockResolvedValue({ id: 'new-app-id-123' }),
}));


describe('<HomePage /> - Integration Test', () => {
  it('should create an application and navigate when a product is selected', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/application/:id" element={<div>Application Form Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    const selectButtons = await screen.findAllByRole('button', { name: /select this product/i });
    
    await user.click(selectButtons[0]);

    await waitFor(() => {
      expect(screen.getByText('Application Form Page')).toBeInTheDocument();
    });
  });
});