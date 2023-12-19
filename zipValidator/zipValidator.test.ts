import validateZip from './zipValidator';

test('Valid zip code = true', () => {
  expect(validateZip("12345")).toBe(true);
});

test('Invalid zip code = false', () => {
  expect(validateZip("1234")).toBe(false);
});

test('Invalid zip code = false', () => {
  expect(validateZip("123456")).toBe(false);
});

test('Invalid zip code = false', () => {
  expect(validateZip("abcde")).toBe(false);
});
