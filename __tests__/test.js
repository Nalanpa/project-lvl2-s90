// @flow

import gendiff from '../src/gendiff';

const testFile1 = '__tests__/before.json';
const testFile2 = '__tests__/after.json';
const wrongFile = 'wrong_file';
const wrongFileResult = `File "${wrongFile}" not exist!`;

const testResult = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;


test('gendiff', () => {
  expect(gendiff(wrongFile, testFile2)).toEqual(wrongFileResult);
  expect(gendiff(testFile1, wrongFile)).toEqual(wrongFileResult);
  expect(gendiff(testFile1, testFile2)).toEqual(testResult);
});
