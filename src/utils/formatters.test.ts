import { describe, it, expect } from 'vitest';
import { formatProductFamily } from './formatters';

describe('formatProductFamily', () => {
  it('should format VALUE_FLEX to "Value Flex"', () => {
    // 1. Arrange
    const input = 'VALUE_FLEX';
    const expectedOutput = 'Value Flex';

    // 2. Act
    const result = formatProductFamily(input);

    // 3. Assert
    expect(result).toBe(expectedOutput);
  });

  it('should format STANDARD to "Standard"', () => {
    // 1. Arrange
    const input = 'STANDARD';
    const expectedOutput = 'Standard';

    // 2. Act
    const result = formatProductFamily(input);

    // 3. Assert
    expect(result).toBe(expectedOutput);
  });

  it('should handle an unknown value gracefully', () => {
    // 1. Arrange
    const input = 'NEW_UNEXPECTED_VALUE';
    const expectedOutput = 'New unexpected value';
    // 2. Act
    const result = formatProductFamily(input);
    // 3. Assert
    expect(result).toBe(expectedOutput);
  });
});
