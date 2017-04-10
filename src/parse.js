import fs from 'fs';
import yaml from 'js-yaml';


export default (pathToFile) => {
  if (!fs.existsSync(pathToFile)) {
    return `ERROR: File "${pathToFile}" not exist!`;
  }

  const fileContent = fs.readFileSync(pathToFile);

  if (pathToFile.substr(-5) === '.json') {
    return JSON.parse(fileContent);
  } else if (pathToFile.substr(-4) === '.yml') {
    return yaml.safeLoad(fileContent);
  }

  return 'ERROR: Unknown file type';
};
