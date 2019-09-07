import chokidar from 'chokidar';
import path from 'path';

import { make } from './resolve';

const watcher = chokidar.watch('.', {
  persistent: true, // 監視を続けている間プロセスを終了しない
  ignored: './swagger.yml', // 監視対象外
  ignoreInitial: true, // ファイルやフォルダの監視開始時にaddイベントやaddDirイベントを発生させない
  cwd: path.join(process.cwd(), 'src')
});

const updateSwaggerYml = async (filepath?: string) => {
  if (filepath) {
    console.log(`${filepath} changed. Update swagger.yml and copy it to viewer.`);
  }

  await make();
};

async function main() {
  console.log('run initial build...');
  await updateSwaggerYml();

  console.log('start watching...');
  watcher
    .on('add', updateSwaggerYml)
    .on('addDir', updateSwaggerYml)
    .on('unlink', updateSwaggerYml)
    .on('unlinkDir', updateSwaggerYml)
    .on('change', updateSwaggerYml);
}

main()
  .then(() => ({}))
  .catch(error => console.error(error));
