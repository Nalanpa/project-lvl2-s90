// @flow

import gendiff from '../src';

const jsonFile1 = '__tests__/__fixtures__/before.tree.json';
const jsonFile2 = '__tests__/__fixtures__/after.tree.json';
const ymlFile1 = '__tests__/__fixtures__/before.tree.yml';
const ymlFile2 = '__tests__/__fixtures__/after.tree.yml';
const iniFile1 = '__tests__/__fixtures__/before.tree.ini';
const iniFile2 = '__tests__/__fixtures__/after.tree.ini';

const testResult =
`{
    common: {
        setting1: Value 1
      - setting2: 200
        setting3: true
      - setting6: {
            key: value
        }
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
    }
    group1: {
      + baz: bars
      - baz: bas
        foo: bar
    }
  - group2: {
        abc: 12345
    }
  + group3: {
        fee: 100500
    }
}`;


// test('Foo test', () => {
//   expect(1).toEqual(1);
// });

test('Compare tree JSONs', () => {
  expect(gendiff(jsonFile1, jsonFile2)).toEqual(testResult);
});
