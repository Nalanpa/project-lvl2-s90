#!/usr/bin/env node
import program from 'commander';
import gendiff from '../';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<first_config> <second_config>')
  .action(function (first_config, second_config) {
    console.log(gendiff(first_config, second_config));
  })
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);
