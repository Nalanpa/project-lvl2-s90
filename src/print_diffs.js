import printJson from './print_diffs_json';
import printPlain from './print_diffs_plain';

export default (tree, format) => {
  if (format === 'object') return printJson(tree);
  if (format === 'plain') return printPlain(tree);

  return `Unknown format: ${format}`;
};
