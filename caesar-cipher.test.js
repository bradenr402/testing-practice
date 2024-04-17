import caesarCipher from './caesar-cipher';

it('forward shifts a one-word string by 1', () =>
  expect(caesarCipher('hello', 1)).toBe('ifmmp'));

it('forward shifts a one-word string by more than 1', () => {
  expect(caesarCipher('hello', 2)).toBe('jgnnq');
  expect(caesarCipher('hello', 3)).toBe('khoor');
});

it('forward shifts a one-word string, wrapping', () => {
  expect(caesarCipher('xyz', 1)).toBe('yza');
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

it('forward shifts a multi-word string, wrapping', () =>
  expect(caesarCipher('hello world', 1)).toBe('ifmmp xpsme'));

it('reverse shifts a one-word string by 1', () =>
  expect(caesarCipher('hello', -1)).toBe('gdkkn'));

it('reverse shifts a one-word string by more than 1', () => {
  expect(caesarCipher('hello', -2)).toBe('fcjjm');
  expect(caesarCipher('hello', -3)).toBe('ebiil');
});

it('reverse shifts a one-word string, wrapping', () => {
  expect(caesarCipher('abc', -1)).toBe('zab');
  expect(caesarCipher('abc', -3)).toBe('xyz');
});

it('reverse shifts a multi-word string, wrapping', () =>
  expect(caesarCipher('hello world', -1)).toBe('gdkkn vnqkc'));

it('preserves case', () => {
  expect(caesarCipher('xyzXYZ', 1)).toBe('yzaYZA');
  expect(caesarCipher('abcABC', -1)).toBe('zabZAB');
});

it('preserves non-alphabetic characters', () => {
  expect(caesarCipher('Hello, World! ?.,@#$%^&*(){}[]:;\'"/\\<>`~', 1)).toBe(
    'Ifmmp, Xpsme! ?.,@#$%^&*(){}[]:;\'"/\\<>`~',
  );
  expect(caesarCipher('Hello, Zigzag! ?.,@#$%^&*(){}[]:;\'"/\\<>`~', 1)).toBe(
    'Ifmmp, Ajhabh! ?.,@#$%^&*(){}[]:;\'"/\\<>`~',
  );
});
