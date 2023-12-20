import isGenetive from './isGenetive';

describe('isGenetive', () => {
  test('returns the genitive form of the name', () => {
    expect(isGenetive('Jonatan')).toBe("Jonatans");
    expect(isGenetive('Anna')).toBe("Annas");
    expect(isGenetive('Johanna')).toBe("Johannas");
  });
});
