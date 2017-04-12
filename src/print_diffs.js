import printTree from './print_diffs_tree';
import printPlain from './print_diffs_plain';

export default (tree, format) => {
  if (format === 'object') return printTree(tree);
  if (format === 'plain') return printPlain(tree);

  return `Unknown format: ${format}`;
};
