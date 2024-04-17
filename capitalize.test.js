import capitalize from './capitalize';

it('capitalizes the first letter of the first word', () => {
  expect(capitalize('this is a test')).toBe('This is a test');
});
