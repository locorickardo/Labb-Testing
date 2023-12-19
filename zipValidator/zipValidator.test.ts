import validateZipCode from './zipValidator';

test('Valid zip code = true', () => {
  expect(validateZipCode("12345")).toBe(true);
});

test('Invalid zip code = false', () => {
  expect(validateZipCode("1234")).toBe(false);
});

test('Invalid zip code = false', () => {
  expect(validateZipCode("123456")).toBe(false);
});

test('Invalid zip code = false', () => {
  expect(validateZipCode("abcde")).toBe(false);
});
