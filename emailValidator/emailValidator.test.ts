import validateEmail from './emailValidator';

test('Valid email returns true', () => {
  expect(validateEmail('alex@gmail.com')).toBe(true);
});

test('Invalid email returns false', () => {
  expect(validateEmail('alex@gmail')).toBe(false);
});

test('Invalid email returns false', () => {
  expect(validateEmail('alex.com')).toBe(false);
});
