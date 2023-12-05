import { describe, expect, it } from 'vitest';
import { addEnding, capitalize, formatDate, setStarsLength } from './common';

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

describe('Function: setStarsLength', () => {
  it('should return 80%', () => {
    const result = setStarsLength(4.3);

    expect(result).toBe(80);
  });

  it('should return 0', () => {
    const result = setStarsLength(0);

    expect(result).toBe(0);
  });
});

describe('Function: formatDate', () => {
  it('should return April 2019', () => {
    const result = formatDate('2019-04-03');

    expect(result).toBe('April 2019');
  });

  it('should return May 1990', () => {
    const result = formatDate('1990-05-30');

    expect(result).toBe('May 1990');
  });
});

describe('Function: formatDate', () => {
  it('should return April 2019', () => {
    const result = formatDate('2019-04-03');

    expect(result).toBe('April 2019');
  });

  it('should return May 1990', () => {
    const result = formatDate('1990-05-30');

    expect(result).toBe('May 1990');
  });
});
