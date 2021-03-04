import { getDay, round } from './format';

describe('Format test', () => {
  test('verifies that round should return the expected number', () => {
    const number = 2.2;
    const expected = 2;
    const received = round(number);

    expect(received).toBe(expected);
  });

  test('verifies that getDay should return the expected day', () => {
    const date = '2021-03-08';
    const expected = 'Monday';
    const received = getDay(date);

    expect(received).toBe(expected);
  });
});
