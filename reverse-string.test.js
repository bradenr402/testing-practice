import reverseString from './reverse-string';

it('reverses a one word string', () =>
  expect(reverseString('hello!')).toBe('!olleh'));

it('reverses a multiple word string', () =>
  expect(reverseString('hello world!')).toBe('!dlrow olleh'));
