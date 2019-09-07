import { resolveRefs as resolve, JsonRefsOptions } from 'json-refs';
import yaml from 'js-yaml';
import fs from 'fs-extra';
import path from 'path';

const rootYamlPath = path.join(process.cwd(), 'src', 'index.yml');
const exportYamlPath = path.join(process.cwd(), 'src', 'swagger.yml');

const options: JsonRefsOptions = {
  filter: ['relative', 'remote'], // relativeとremoteのrefを対象とする
  loaderOptions: {
    processContent: (res: { text: string }, callback: Function) => {
      // responseの内容を利用するcallbackを定義
      callback(null, yaml.load(res.text));
    }
  }
};

async function getMergedYamlSource(): Promise<string> {
  const rootSource = await fs.readFile(rootYamlPath);
  const root = yaml.load(rootSource.toString()); // ./index.ymlをロード
  const results = await resolve(root, options);
  return yaml.dump(results.resolved);
}

export async function make() {
  const yamlSource = await getMergedYamlSource();
  await fs.writeFile(exportYamlPath, yamlSource);
}
