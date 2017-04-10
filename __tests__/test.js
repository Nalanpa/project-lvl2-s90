// @flow

import gendiff from '../src/gendiff';

const testFile1 = '__tests__/before.json';
const testFile2 = '__tests__/after.json';
const testResult = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;


test('gendiff', () => {
  expect(gendiff(testFile1, testFile2)).toEqual(testResult);
});
