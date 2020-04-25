import fs from 'fs';
import path from 'path';
import mustache from 'mustache';

import * as globals from './globals';
import * as theme from './theme';

const templatePath = path.resolve(__dirname, 'template.json');
const themePath = path.resolve(__dirname, '../themes/bode.json');

export default async function build(): Promise<void> {
  const template = await fs.promises.readFile(templatePath, 'utf8');
  const built = mustache.render(template, {...theme, ...globals});
  await fs.promises.writeFile(themePath, built);
}

if (typeof require !== 'undefined' && require.main === module) {
  build();
}
