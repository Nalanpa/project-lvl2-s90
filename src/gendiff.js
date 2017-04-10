import fs from 'fs';

const compare = (obj1, obj2, key) => {
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


export default (pathToFile1, pathToFile2) => {
  const file1 = JSON.parse(fs.readFileSync(pathToFile1));
  const file2 = JSON.parse(fs.readFileSync(pathToFile2));

  const file1Keys = Object.keys(file1)
    .reduce((acc, key) => acc + compare(file1, file2, key), '');

  const file2Keys = Object.keys(file2)
    .filter(key => !file1[key])
    .reduce((acc, key) => acc + compare(file1, file2, key), '');

  return `{\n${file1Keys}${file2Keys}}`;
};
