import browserSync from 'browser-sync';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

setTimeout(() => {
  const bs = browserSync.create();

  // Start a Browsersync proxy
  bs.init({
    proxy: `http://localhost:${process.env.PORT_UI}`
  });

  bs.watch(path.join(process.cwd(), 'src', 'swagger.yml')).on('change', bs.reload);
}, 3000);
