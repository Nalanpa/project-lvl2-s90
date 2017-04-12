import _ from 'lodash';

const getType = value => (_.isPlainObject(value) ? 'object' : 'primitive');

const makeDiffsObject = (obj1, obj2) => (
  _.union(Object.keys(obj1), Object.keys(obj2))
    .map((key) => {
      const before = obj1[key];
      const after = obj2[key];

      if (before === after) {
        return { status: 'same', key, before, after, type: getType(before) };
      }
      if (before && after && _.isPlainObject(before) && _.isPlainObject(after)) {
        const object = makeDiffsObject(before, after);
        return { status: 'keeped object', key, object, type: getType(before) };
      }
      if (before && after && before !== after) {
        return { status: 'updated', key, before, after, type: getType(before) };
      }
      if (!after) {
        return { status: 'removed', key, before, type: getType(before) };
      }
      return { status: 'added', key, after, type: getType(after) };
    })
);

export default makeDiffsObject;
