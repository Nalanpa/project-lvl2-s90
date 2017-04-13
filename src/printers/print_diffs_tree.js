
const printObject = (obj, level) => {
  const indent = '  '.repeat(2 + (2 * level));
  const content = Object.keys(obj)
    .map(key => `${indent}${key}: ${obj[key]}`).join('\n');
  return `{\n${content}\n${'  '.repeat(2 * level)}}`;
};

const printValue = (value, level) =>
  ((typeof value !== 'object') ? value : printObject(value, level));

const printTree = (diffs, level = 0) => {
  const indent = '  '.repeat(1 + (2 * level));
  const rows = diffs
    .map((item) => {
      switch (item.action) {
        case 'same':
          return `${indent}  ${item.key}: ${printValue(item.before, level + 1)}`;
        case 'keeped object':
          return `${indent}  ${item.key}: ${printTree(item.children, level + 1)}`;
        case 'added':
          return `${indent}+ ${item.key}: ${printValue(item.after, level + 1)}`;
        case 'removed':
          return `${indent}- ${item.key}: ${printValue(item.before, level + 1)}`;
        case 'updated':
          return `${indent}+ ${item.key}: ${printValue(item.after, level + 1)}\n` +
                 `${indent}- ${item.key}: ${printValue(item.before, level + 1)}`;
        default:
          return '--- Unknown status ---';
      }
    });

  const content = rows.join('\n');

  return `{\n${content}\n${'  '.repeat(2 * level)}}`;
};

export default printTree;
