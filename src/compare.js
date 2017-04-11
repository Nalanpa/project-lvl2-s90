import _ from 'lodash';

// const drawKey = (obj, key, level) => {
//   ${key}: ${obj1[key]}\n`
// };


const compareKey = (obj1, obj2, key, level) => {
  const intend = 2;
  const intend1 = ' '.repeat(intend * (1 + level));
  const intend2 = ' '.repeat(intend * 2 * (1 + level));

  if (obj1[key] && !obj2[key]) {
    return `${intend1}- ${key}: ${obj1[key]}\n`;
  } else if (!obj1[key] && obj2[key]) {
    return `${intend1}+ ${key}: ${obj2[key]}\n`;
  } else if (obj1[key] !== obj2[key]) {
    return `${intend1}+ ${key}: ${obj2[key]}\n` +
           `${intend1}- ${key}: ${obj1[key]}\n`;
  }

  return `${intend2}${key}: ${obj1[key]}\n`;
};


export default (obj1, obj2) => {
  const result = _.union(Object.keys(obj1), Object.keys(obj2))
    .reduce((acc, key) => acc + compareKey(obj1, obj2, key, 0), '');

  return `{\n${result}}`;
};
