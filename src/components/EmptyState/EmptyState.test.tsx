import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { EmptyState } from './EmptyState';

describe('<EmptyState />', () => {
  it('should render the main title, text, and image correctly', () => {
    // Arrange: Renderizamos el componente.
    // Como usa un <Link>, necesitamos envolverlo en un MemoryRouter, igual que en Storybook.
    render(
      <MemoryRouter>
        <EmptyState />
      </MemoryRouter>
    );

    // Act & Assert: Buscamos los elementos en la "pantalla" y afirmamos que existen.

    // Busca el título principal (un h2) por su texto.
    const titleElement = screen.getByRole('heading', { name: /you have no applications yet/i });
    expect(titleElement).toBeInTheDocument();

    // Busca parte del texto del párrafo.
    const textElement = screen.getByText(/find the best rate for you/i);
    expect(textElement).toBeInTheDocument();

    // Busca la imagen por su texto alternativo (alt text).
    const imageElement = screen.getByAltText(/a sad house because there are no applications/i);
    expect(imageElement).toBeInTheDocument();
  });
});