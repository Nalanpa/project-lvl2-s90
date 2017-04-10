// @flow

import gendiff from '../src';

const jsonFile1 = '__tests__/__fixtures__/before.json';
const jsonFile2 = '__tests__/__fixtures__/after.json';
const ymlFile1 = '__tests__/__fixtures__/before.yml';
const ymlFile2 = '__tests__/__fixtures__/after.yml';
const iniFile1 = '__tests__/__fixtures__/before.ini';
const iniFile2 = '__tests__/__fixtures__/after.ini';
const wrongFile = '__tests__/__fixtures__/somefile.type';
const wrongType = '.type';
const notExistenFile = 'not_existen_file';

const fileNotExistResult = `ERROR: File "${notExistenFile}" not exist!`;
const unknownFileTypeResult = `ERROR: Unknown file type: "${wrongType}"`;

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
  expect(gendiff(wrongFile, jsonFile2)).toEqual(unknownFileTypeResult);
  expect(gendiff(jsonFile1, wrongFile)).toEqual(unknownFileTypeResult);
});

test('Compare JSONs', () => {
  expect(gendiff(jsonFile1, jsonFile2)).toEqual(testResult);
});

test('Compare YAMLs', () => {
  expect(gendiff(ymlFile1, ymlFile2)).toEqual(testResult);
});

test('Compare INIs', () => {
  expect(gendiff(iniFile1, iniFile2)).toEqual(testResult);
});

test('Compare JSON with YAML', () => {
  expect(gendiff(jsonFile1, ymlFile2)).toEqual(testResult);
  expect(gendiff(ymlFile1, jsonFile2)).toEqual(testResult);
});
