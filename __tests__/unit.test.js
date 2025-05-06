// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('isPhoneNumber valid country code', () => {
  expect(isPhoneNumber('1-921-127-1280')).toBe(true);
});

test('isPhoneNumber invalid number asdfasdf', () => {
  expect(isPhoneNumber('asdfasdf')).toBe(false);
});

test('isPhoneNumber valid number', () => {
  expect(isPhoneNumber('610-627-1271')).toBe(true);
});

test('isPhoneNumber invalid number 555', () => {
  expect(isPhoneNumber('555')).toBe(false);
});

test('isEmail valid email', () => {
  expect(isEmail('tlh005@ucsd.edu')).toBe(true);
});

test('isEmail no @ invalid', () => {
  expect(isEmail('tlh005ucsd.edu')).toBe(false);
});

test('isEmail valid email', () => {
  expect(isEmail('tylerhoang456123@gmail.com')).toBe(true);
});

test('isEmail bad domain', () => {
  expect(isEmail('tylerhoang@ucsd.edeasdu')).toBe(false);
});

test('isStrongPassword 1', () => {
  expect(isStrongPassword('theGood')).toBe(true);
});

test('isStrongPassword invalid char', () => {
  expect(isStrongPassword('今日')).toBe(false);
});

test('isStrongPassword 2', () => {
  expect(isStrongPassword('test571182')).toBe(true);
});

test('isStrongPassword tooshort', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

test('isDate valid date', () => {
  expect(isDate('5/5/2025')).toBe(true);
});

test('isDate bad year', () => {
  expect(isDate('5/5/25')).toBe(false);
});

test('isDate valid date 2', () => {
  expect(isDate('06/7/2019')).toBe(true);
});

test('isDate missing month', () => {
  expect(isDate('/5/2017')).toBe(false);
});

test('isHexColor good color', () => {
  expect(isHexColor('a57')).toBe(true);
});

test('isHexColor wrong length', () => {
  expect(isHexColor('ab712')).toBe(false);
});

test('isHexColor good color', () => {
  expect(isHexColor('a7ba31')).toBe(true);
});

test('isHexColor invalid char', () => {
  expect(isHexColor('nbvmnz')).toBe(false);
});