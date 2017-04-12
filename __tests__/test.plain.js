// @flow

import gendiff from '../src';

const jsonFile1 = '__tests__/__fixtures__/before.tree.json';
const jsonFile2 = '__tests__/__fixtures__/after.tree.json';
const ymlFile1 = '__tests__/__fixtures__/before.yml';
const ymlFile2 = '__tests__/__fixtures__/after.yml';


const testTreeResult =
`Property 'common.setting2' was removed
Property 'common.setting6' was removed
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with complex value
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
Property 'group3' was added with complex value`;

const testFlatResult =
`Property 'timeout' was updated. From '50' to '20'
Property 'proxy' was removed
Property 'verbose' was added with value: 'true'`;


test('Compare tree -- plain format', () => {
  expect(gendiff(jsonFile1, jsonFile2, 'plain')).toEqual(testTreeResult);
});


test('Compare flat -- plain format', () => {
  expect(gendiff(ymlFile1, ymlFile2, 'plain')).toEqual(testFlatResult);
});
