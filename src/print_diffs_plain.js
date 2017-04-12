const printUpdatedValue = (before, after) =>
  ((typeof before !== 'object') ? `. From '${before}' to '${after}'` : ' with complex value');

const printAddedValue = value =>
  ((typeof value !== 'object') ? `value: '${value}'` : 'complex value');


const printPlain = (diffs, path = '') => {
  const rows = diffs
    .map((item) => {
      switch (item.status) {
        case 'same':
          return undefined;
        case 'keeped object':
          return printPlain(item.object, `${item.key}.`);
        case 'added':
          return `Property '${path}${item.key}' was added with ${printAddedValue(item.after)}`;
        case 'removed':
          return `Property '${path}${item.key}' was removed`;
        case 'updated':
          return `Property '${path}${item.key}' was updated${printUpdatedValue(item.before, item.after)}`;
        default:
          return '--- Unknown status ---';
      }
    })
    .filter(item => !!item);

  const content = rows.join('\n');
  return `${content}`;
};

export default printPlain;
