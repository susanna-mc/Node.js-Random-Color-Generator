import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor'; // import the script

console.log(argv[2]);
const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

console.log(
  chalk.hex(color)(
    `################################
################################
################################
####                        ####
####        ${color}         ####
####                        ####
################################
################################
################################`,
  ),
);
