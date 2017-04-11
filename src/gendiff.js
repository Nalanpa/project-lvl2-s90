import readFile from './read_file';
import compare from './compare';


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
