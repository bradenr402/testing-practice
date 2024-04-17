import analyzeArray from './analyze-array';

it('gets average', () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4));

it('gets minimum', () => expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1));

it('gets maximum', () => expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8));

it('gets length', () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6));
