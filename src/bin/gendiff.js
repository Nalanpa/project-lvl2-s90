#!/usr/bin/env node
import program from 'commander';
import gendiff from '../';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<first_config> <second_config>')
  .action((firstConfig, secondConfig, options) => {
    console.log(gendiff(firstConfig, secondConfig, options.format));
  })
  .option('-f, --format [type]', 'Output format', 'object')
  .parse(process.argv);
