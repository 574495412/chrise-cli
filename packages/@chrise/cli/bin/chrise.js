#!/usr/bin/env node
/**
 *  as a startup file
 */
const program = require('commander');
const pkg = require('../package.json');
const chalk = require('chalk');

program
  .version(`@chrise/cli ${pkg.version}`, '-v -version')
  .description('chrise')
  .usage('<command> [options]');

program
  .command('create <app-name>')
  .description('create a new project')
  .option('-f, --force', 'Overwrite target directory if it exists')
  .option('-c, --clone', 'Use git clone when fetching remote preset')
  .action((name) => {
    require('../lib/create.js')(name);
  });

program
  .command('update')
  .description('@chrise/cli update')
  .action(() => {
    require('../lib/update.js')();
  });

program.arguments('<command>').action((cmd) => {
  program.outputHelp();
  console.log();
  console.log(`    ${chalk.red(`Unknown command ${chalk.yellow(cmd)}.`)}`);
  console.log();
});

program.program.parse(process.argv);
