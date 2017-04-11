import readFile from './read_file';
import compare from './compare';


export default (pathToFile1, pathToFile2) => {
  const [data1, data2] = [pathToFile1, pathToFile2]
    .map(file => readFile(file));

  if (typeof data1 === 'string') {
    return data1;
  }

  if (typeof data2 === 'string') {
    return data2;
  }

  return compare(data1, data2, 0);
};
