import fs from 'fs';
import path from 'path';
import parse from './parse';


export default (pathToFile) => {
  if (!fs.existsSync(pathToFile)) {
    return `ERROR: File "${pathToFile}" not exist!`;
  }

  const fileContent = String(fs.readFileSync(pathToFile, 'utf8'));
  const format = path.extname(pathToFile).slice(1);

  return parse(fileContent, format);
};
