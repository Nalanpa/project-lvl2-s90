import parse from './parse';

const compareKey = (obj1, obj2, key) => {
  if (obj1[key] && !obj2[key]) {
    return `  - ${key}: ${obj1[key]}\n`;
  } else if (!obj1[key] && obj2[key]) {
    return `  + ${key}: ${obj2[key]}\n`;
  } else if (!obj1[key] && !obj2[key]) {
    return '';
  } else if (obj1[key] !== obj2[key]) {
    return `  + ${key}: ${obj2[key]}\n  - ${key}: ${obj1[key]}\n`;
  }

  return `    ${key}: ${obj1[key]}\n`;
};


const compare = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1)
    .reduce((acc, key) => acc + compareKey(obj1, obj2, key), '');

  const obj2Keys = Object.keys(obj2)
    .filter(key => !obj1[key])
    .reduce((acc, key) => acc + compareKey(obj1, obj2, key), '');

  return `{\n${obj1Keys}${obj2Keys}}`;
};


export default (pathToFile1, pathToFile2) => {
  const file1 = parse(pathToFile1);
  const file2 = parse(pathToFile2);

  if (typeof file1 === 'string') {
    return file1;
  }

  if (typeof file2 === 'string') {
    return file2;
  }

  return compare(file1, file2);
};
