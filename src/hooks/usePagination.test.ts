import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { usePagination } from './usePagination';

describe('usePagination', () => {
  it('should initialize correctly and paginate data', () => {
    // Arrange
    const mockData = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);
    
    // Act
    const { result } = renderHook(() => usePagination(mockData, 5));

    // Assert
    expect(result.current.totalPages).toBe(3);
    expect(result.current.currentPage).toBe(1);
    expect(result.current.currentData).toHaveLength(5);
    expect(result.current.currentData[0]).toBe('Item 1');
  });

  it('should navigate to the next and previous pages correctly', () => {
    const mockData = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);
    const { result } = renderHook(() => usePagination(mockData, 5));

    // Act
    act(() => {
      result.current.nextPage();
    });
    
    // Assert
    expect(result.current.currentPage).toBe(2);
    expect(result.current.currentData).toHaveLength(5);
    expect(result.current.currentData[0]).toBe('Item 6');

    // Act
    act(() => {
      result.current.prevPage();
    });

    // Assert
    expect(result.current.currentPage).toBe(1);
    expect(result.current.currentData[0]).toBe('Item 1');
  });
});