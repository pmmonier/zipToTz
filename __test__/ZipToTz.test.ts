import { ZipToTz } from '../src/ZipToTz';

test('should return full timezone America/New_York for zip 33487', () => {
  expect(new ZipToTz().full('33487')).toBe('America/New_York');
});

test('should return short timezone EDT for zip 33487', () => {
  expect(new ZipToTz().short('33487')).toBe('EDT');
});

test('should throw an error if called with zip with length > 5', () => {
  expect(() => new ZipToTz().short('qwerty')).toThrow('Invalid format or zipCode length');
});

test('should throw an error if called with zip with string', () => {
  expect(() => new ZipToTz().short('qwerty')).toThrow('Invalid format or zipCode length');
});

test('should throw an error if called with incorrect zip', () => {
  expect(() => new ZipToTz().short('00000')).toThrow('Not found');
});