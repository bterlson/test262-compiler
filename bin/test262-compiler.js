#!/usr/bin/env node
const compile = require('../');
const yargs = require('yargs');
const Path = require('path');
const fs = require('fs');

const yargv = yargs
  .usage('Usage: test262-compiler [options] <input-file>')
  .describe('test262Dir', 'test262 root directory')
  .describe('includesDir', 'directory where helper files are found')
  .help('help')
  .example('test262-compiler path/to/test.js')

const argv = yargv.argv;
const file = argv._[0];
const contents = fs.readFileSync(file, 'utf-8');

let test262Dir;

if (argv.test262Dir) {
  test262Dir = argv.test262Dir;
} else if (!argv.includesDir) {
  test262Dir = findTest262Root(Path.dirname(file));
}

if (!test262Dir && !argv.includesDir) {
  console.error("Couldn't find test262 helpers - try passing --test262Dir or --includesDir");
  process.exit(1);
}

console.log(compile(contents, { test262Dir: test262Dir, includesDir: argv.includesDir }).contents);

function findTest262Root(path) {
  const contents = fs.readdirSync(path)
  if (contents.indexOf('README.md') > -1) {
    return path;
  }

  const parent = Path.resolve(path, '../');

  if (parent === path) {
    return null;
  }

  return findTest262Root(parent);
}
