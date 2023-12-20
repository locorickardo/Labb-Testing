import isLowerCase from './isLowerCase';

describe('isLowerCase', () => {
  test('returns true since all letters are lowercase', () => {
    expect(isLowerCase('abcdefg')).toBe(true);
  });

  test('returns false since it contains numbers', () => {
    expect(isLowerCase('abc123')).toBe(false);
  });

  test('returns false since it contains uppercase', () => {
    expect(isLowerCase('Hello')).toBe(false);
  });

});
