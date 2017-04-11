import _ from 'lodash';

const isEqual = (obj1, obj2) =>
     (obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object') ||
     (obj1 === obj2);


const compare = (obj1, obj2, level) => {
  if (!obj1) return compare(obj2, obj2, level);
  if (!obj2) return compare(obj1, obj1, level);

  const compareKey = (o1, o2, key, lvl) => {
    const intend = '  '.repeat(1 + (2 * lvl));

    let sign;
    let value;
    let result = '';

    if (o2[key]) {
      sign = (isEqual(o1[key], o2[key])) ? '  ' : '+ ';
      value = (typeof o2[key] === 'object') ?
          compare(o1[key], o2[key], lvl + 1) :
          o2[key];
      result = `${intend}${sign}${key}: ${value}\n`;
    }

    if (o1[key] && !isEqual(o1[key], o2[key])) {
      sign = '- ';
      value = (typeof o1[key] === 'object') ?
          compare(o1[key], o2[key], lvl + 1) :
          o1[key];
      result += `${intend}${sign}${key}: ${value}\n`;
    }

    return result;
  };


  const result = _.union(Object.keys(obj1), Object.keys(obj2))
    .reduce((acc, key) => acc + compareKey(obj1, obj2, key, level), '');

  return `{\n${result}${'  '.repeat(2 * level)}}`;
};

export default compare;
