import printTree from './print_diffs_tree';
import printPlain from './print_diffs_plain';
import printJson from './print_diffs_json';

export default (diffs, format) => {
  if (format.toLowerCase() === 'object') return printTree(diffs);
  if (format.toLowerCase() === 'plain') return printPlain(diffs);
  if (format.toLowerCase() === 'json') return printJson(diffs);

  return `Unknown format: ${format}`;
};
