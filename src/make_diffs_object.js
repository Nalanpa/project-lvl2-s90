import _ from 'lodash';

const getType = value => (_.isPlainObject(value) ? 'object' : 'primitive');

const makeDiffsObject = (obj1, obj2) => (
  _.union(Object.keys(obj1), Object.keys(obj2))
    .map((key) => {
      const before = obj1[key];
      const after = obj2[key];

      if (before === after) {
        return { action: 'same', key, before, after, type: getType(before) };
      }
      if (before && after && _.isPlainObject(before) && _.isPlainObject(after)) {
        const children = makeDiffsObject(before, after);
        return { action: 'keeped object', key, children, type: getType(before) };
      }
      if (before && after && before !== after) {
        return { action: 'updated', key, before, after, type: getType(before) };
      }
      if (!after) {
        return { action: 'removed', key, before, type: getType(before) };
      }
      return { action: 'added', key, after, type: getType(after) };
    })
);

export default makeDiffsObject;
