import yaml from 'js-yaml';
import ini from 'ini';

const parser = {
  yml: content => yaml.safeLoad(content),
  json: content => JSON.parse(content),
  ini: content => ini.parse(content),
};

export default (content, format) => {
  if (parser[format] === undefined) {
    return `ERROR: Unknown file type: "${format}"`;
  }

  return parser[format](content);
};
