import { describe, expect, it } from 'vitest';
import { addEnding, capitalize } from './common';

describe('Function: Capitalize', () => {
  it('should return Hello', () => {
    const result = capitalize('hello');

    expect(result).toBe('Hello');
  });

  it('should return Capitalize First Letter', () => {
    const result = capitalize('capitalize First Letter');

    expect(result).toBe('Capitalize First Letter');
  });
});

describe('Function: addEnding', () => {
  it('should return s', () => {
    const result = addEnding(4);

    expect(result).toBe('s');
  });

  it('should return nothing', () => {
    const result = addEnding(1);

    expect(result).toBe('');
  });
});
