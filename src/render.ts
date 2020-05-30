import {render as colors} from './renderers/colors';
import {render as tokenColors} from './renderers/tokenColors';

import type {Theme, ThemeJson} from './Theme';

export const render = (theme: Theme): ThemeJson => ({
  name: theme.name,
  type: 'dark',
  semanticHighlighting: true,
  colors: colors(theme),
  tokenColors: tokenColors(theme),
});
