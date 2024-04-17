import { calculator } from './calculator';

it('adds two numbers', () => expect(calculator.add(1, 2)).toBe(3));

it('adds two floating point numbers', () =>
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3));

it('subtracts two numbers', () => expect(calculator.subtract(2, 1)).toBe(1));

it('subtracts two floating point numbers', () =>
  expect(calculator.subtract(0.2, 0.1)).toBeCloseTo(0.1));

it('divides two numbers', () => expect(calculator.divide(4, 2)).toBe(2));

it('multiplies two numbers', () => expect(calculator.multiple(2, 3)).toBe(6));
