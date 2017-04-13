import object from './print_diffs_tree';
import plain from './print_diffs_plain';
import json from './print_diffs_json';

const printer = { object, plain, json };

export default (diffs, format) => (
  !printer[format.toLowerCase()] ?
    `Unknown format: ${format}` :
    printer[format.toLowerCase()](diffs)
);
