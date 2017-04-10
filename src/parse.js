import yaml from 'js-yaml';
import ini from 'ini';

export default (content, type) => {
  switch (type) {
    case '.json':
      return JSON.parse(content);
    case '.yml':
      return yaml.safeLoad(content);
    case '.ini':
      return ini.parse(String(content));
    default:
      return `ERROR: Unknown file type: "${type}"`;
  }
};
