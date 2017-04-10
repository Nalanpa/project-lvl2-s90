import fs from 'fs';
import path from 'path';
import parse from './parse';


export default (pathToFile) => {
  if (!fs.existsSync(pathToFile)) {
    return `ERROR: File "${pathToFile}" not exist!`;
  }

  const fileContent = fs.readFileSync(pathToFile);
  const ext = path.extname(pathToFile);

  return parse(fileContent, ext);
};
