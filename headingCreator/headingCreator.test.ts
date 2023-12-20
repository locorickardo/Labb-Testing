import makeHeading from './headingCreator';

test('Creates an h1 heading', () => {
  expect(makeHeading("Hello", 1)).toBe('<h1>Hello</h1>');
});

test('Creates an h2 heading', () => {
  expect(makeHeading("Next level", 2)).toBe('<h2>Next level</h2>');
});