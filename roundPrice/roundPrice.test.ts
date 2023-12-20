import roundPrice from './roundPrice';

  test('rounds a decimal number to two decimal places with SEK symbol', () => {
    expect(roundPrice(232.10542)).toBe('232.11 SEK');
    expect(roundPrice(14)).toBe('14.00 SEK');
    expect(roundPrice(1024.2048)).toBe('1024.20 SEK');
  });
