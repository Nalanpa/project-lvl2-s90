// @flow

import gendiff from '../src/gendiff';

const jsonFile1 = '__tests__/before.json';
const jsonFile2 = '__tests__/after.json';
const ymlFile1 = '__tests__/before.yml';
const ymlFile2 = '__tests__/after.yml';
const wrongTypeFile = '__tests__/somefile.type';
const notExistenFile = 'not_existen_file';

const fileNotExistResult = `ERROR: File "${notExistenFile}" not exist!`;
const unknownFileTypeResult = `ERROR: Unknown file type: "${wrongTypeFile}"`;

const testResult = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;


test('File exist', () => {
  expect(gendiff(notExistenFile, jsonFile2)).toEqual(fileNotExistResult);
  expect(gendiff(jsonFile1, notExistenFile)).toEqual(fileNotExistResult);
});

test('Unknown file type', () => {
  expect(gendiff(wrongTypeFile, jsonFile2)).toEqual(unknownFileTypeResult);
  expect(gendiff(jsonFile1, wrongTypeFile)).toEqual(unknownFileTypeResult);
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
