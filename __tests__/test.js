// @flow

import gendiff from '../src/gendiff';

const jsonFile1 = '__tests__/before.json';
const jsonFile2 = '__tests__/after.json';
const ymlFile1 = '__tests__/before.yml';
const ymlFile2 = '__tests__/after.yml';

const wrongFile = 'wrong_file';
const wrongFileResult = `ERROR: File "${wrongFile}" not exist!`;

const testResult = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;


test('File exist', () => {
  expect(gendiff(wrongFile, jsonFile2)).toEqual(wrongFileResult);
  expect(gendiff(jsonFile1, wrongFile)).toEqual(wrongFileResult);
});

test('Compare JSONs', () => {
  expect(gendiff(jsonFile1, jsonFile2)).toEqual(testResult);
});

test('Compare YAMLs', () => {
  expect(gendiff(ymlFile1, ymlFile2)).toEqual(testResult);
});

test('Compare JSON with YAML', () => {
  expect(gendiff(jsonFile1, ymlFile2)).toEqual(testResult);
  expect(gendiff(ymlFile1, jsonFile2)).toEqual(testResult);
});
