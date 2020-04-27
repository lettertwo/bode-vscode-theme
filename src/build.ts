import {promises as fs} from 'fs';
import path from 'path';
import mustache from 'mustache';

const templatePath = path.resolve(__dirname, 'template.json');
const themesDir = path.resolve(__dirname, 'themes');
const buildDir = path.resolve(__dirname, '../themes');
const themeFileRegex = /\.(?:json$)|(?:[jt]s$)/;
const readdirOptions = {withFileTypes: true} as const;

export default async function build(): Promise<void> {
  const template = await fs.readFile(templatePath, 'utf8');
  for (const themeDir of await fs.readdir(themesDir, readdirOptions)) {
    if (themeDir.isDirectory()) {
      // TODO: narrow this type?
      const themeValues: Record<string, unknown> = {};
      const themePath = path.resolve(themesDir, themeDir.name);
      for (const themeFile of await fs.readdir(themePath, readdirOptions)) {
        if (
          themeFile.isFile() &&
          themeFileRegex.test(path.extname(themeFile.name))
        ) {
          Object.assign(
            themeValues,
            await import(path.resolve(themePath, themeFile.name)),
          );
        }
      }
      themeValues.name = path.basename(themeDir.name);
      const result = mustache.render(template, themeValues);
      const out = path.join(buildDir, `${themeValues.name}-color-theme.json`);
      await fs.writeFile(out, result);
      console.log(`rendered ${themeDir.name} to ${out}`);
    }
  }
}

if (typeof require !== 'undefined' && require.main === module) {
  build();
}
