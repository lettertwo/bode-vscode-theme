import {promises as fs} from 'fs';
import path from 'path';
import * as Theme from './Theme';
import {render as renderDefault} from './render';

const themesDir = path.resolve(__dirname, '../themes');
const buildDir = path.resolve(__dirname, '../build');
const readdirOptions = {withFileTypes: true} as const;

export default async function build(): Promise<void> {
  try {
    await fs.access(buildDir);
  } catch {
    await fs.mkdir(buildDir);
  }

  for (const themeDir of await fs.readdir(themesDir, readdirOptions)) {
    if (themeDir.isDirectory()) {
      const themePath = path.resolve(themesDir, themeDir.name);
      const themeValues: Theme.ThemeConfig = {
        name: path.basename(themeDir.name),
        ansi: (await import(path.resolve(themePath, 'ansi.json'))).default,
        syntax: (await import(path.resolve(themePath, 'syntax.json'))).default,
        ui: (await import(path.resolve(themePath, 'ui.json'))).default,
      };

      Theme.validate(themeValues);

      let render = renderDefault;
      try {
        let customRender = await import(path.resolve(themePath, 'render'));
        if ('render' in customRender) customRender = customRender.render;
        else if ('default' in customRender) customRender = customRender.default;
        else customRender = null;
        if (customRender) render = customRender;
      } catch {
        /* boop! */
      }

      const theme = Theme.create(themeValues);
      // TODO: validate rendered theme?
      const result = JSON.stringify(render(theme), null, 2);

      const out = path.join(buildDir, `${themeValues.name}-color-theme.json`);
      await fs.writeFile(out, result);
      console.log(`rendered ${themeDir.name} to ${out}`);
    }
  }
}

if (typeof require !== 'undefined' && require.main === module) {
  build().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
