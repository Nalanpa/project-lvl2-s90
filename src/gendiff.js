import readFile from './read_file';
import makeDiffsObject from './make_diffs_object';
import printDiffs from './printers';


export default (pathToFile1, pathToFile2, format = 'object') => {
  const [data1, data2] = [pathToFile1, pathToFile2]
    .map(file => readFile(file));

  if (typeof data1 === 'string') {
    return data1;
  }

  if (typeof data2 === 'string') {
    return data2;
  }

  return printDiffs(makeDiffsObject(data1, data2), format);
};
