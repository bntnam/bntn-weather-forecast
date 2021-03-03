import { validate } from './validate';

describe('Validate test', () => {
  test('verifies that input is required', () => {
    const input = '';
    const expected = 'Input is required';
    const received = validate(input);

    expect(received).toBe(expected);
  });

  test('verifies that input is invalid', () => {
    const input = '!@#';
    const expected = 'Input is invalid';
    const received = validate(input);

    expect(received).toBe(expected);
  });

  test('verifies that input is valid', () => {
    const input = 'valid input';
    const expected = '';
    const received = validate(input);

    expect(received).toBe(expected);
  });
});
