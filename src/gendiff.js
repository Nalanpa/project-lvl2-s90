import _ from 'lodash';
import readFile from './read_file';


const compareKey = (obj1, obj2, key) => {
  const intend1 = ' '.repeat(2);
  const intend2 = ' '.repeat(4);

  if (obj1[key] && !obj2[key]) {
    return `${intend1}- ${key}: ${obj1[key]}\n`;
  } else if (!obj1[key] && obj2[key]) {
    return `${intend1}+ ${key}: ${obj2[key]}\n`;
  } else if (!obj1[key] && !obj2[key]) {
    return '';
  } else if (obj1[key] !== obj2[key]) {
    return `${intend1}+ ${key}: ${obj2[key]}\n  - ${key}: ${obj1[key]}\n`;
  }

  return `${intend2}${key}: ${obj1[key]}\n`;
};


const compare = (obj1, obj2) => {
  const result = _.union(Object.keys(obj1), Object.keys(obj2))
    .reduce((acc, key) => acc + compareKey(obj1, obj2, key), '');

  return `{\n${result}}`;
};


export default (pathToFile1, pathToFile2) => {
  const [file1, file2] = [pathToFile1, pathToFile2]
    .map(file => readFile(file));

  if (typeof file1 === 'string') {
    return file1;
  }

  if (typeof file2 === 'string') {
    return file2;
  }

  return compare(file1, file2);
};
