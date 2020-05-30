import type {Theme, ThemeJson} from '../../Theme';
import {render as base} from './base';
import {render as overrides} from './overrides';

export const render = (theme: Theme): ThemeJson[] => {
  // Render overrides first, so that when we render base,
  // we can skip selectors that have already been visited.
  let result = overrides(theme);
  // Prepend the base theme to the rendered overrides.
  result = [...base(theme), ...result];
  return result;
};
