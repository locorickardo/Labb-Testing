import roundPrice from './roundPrice';

describe('Round Price', () => {
  test('rounds decimals with specified currency (SEK / kr) after price', () => {
    expect(roundPrice(232.10542, '%PRICE% kr')).toBe('232.11 kr');
  });

  test('rounds decimals with specified currency ($ / USD) before price', () => {
    expect(roundPrice(14, '$%PRICE%')).toBe('$14.00');
  });

  test('rounds decimals with specified currency (only USD) before price', () => {
    expect(roundPrice(1024.2048, 'USD %PRICE% SEK')).toBe('USD 1024.20 SEK');
  });

});
