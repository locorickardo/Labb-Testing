import validateEmail from './emailValidator';

describe('Email Validation', () => {
  it('should validate a valid email address', () => {
    const validEmail: string = 'alex@gmail.com';
    expect(validateEmail(validEmail)).toBe(true);
  });

  it('should not validate an invalid email address', () => {
    const invalidEmails: string[] = ['alex@gmail', 'alex.com', 'invalid@.com', 'invalid.email'];
    invalidEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(false);
    });
  });
});
