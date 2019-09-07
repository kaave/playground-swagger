import { format } from 'date-fns';
import chalk from 'chalk';

export function log(argv: any, ...args: any) {
  const date = chalk.bgBlack(format(new Date(), 'HH:mm:ss'));
  console.log(date, argv, ...args);
}

export function error(argv: any, ...args: any) {
  const date = chalk.red(format(new Date(), 'HH:mm:ss'));
  console.error(date, argv, ...args);
}
