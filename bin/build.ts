import { make } from './resolve';
import * as Logger from './logger';

async function main() {
  Logger.log('run build...');
  await make();
}

main()
  .then(() => ({}))
  .catch(error => Logger.error(error));
