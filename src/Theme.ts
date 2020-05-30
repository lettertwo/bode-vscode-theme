import Ajv from 'ajv';
import ansiSchema from '../schemas/ansi.schema.json';
import syntaxSchema from '../schemas/syntax.schema.json';
import uiSchema from '../schemas/ui.schema.json';
import type {AnsiSchema} from '../types/schemas/ansi.schema';
import type {UiSchema} from '../types/schemas/ui.schema';
import type {
  SyntaxSchema,
  SyntaxValue,
  SyntaxColor,
  SyntaxFontStyle,
} from '../types/schemas/syntax.schema';

const validator = new Ajv({
  unknownFormats: ['color-hex'],
  schemas: {ansiSchema, syntaxSchema, uiSchema},
});

type SyntaxResolverSource =
  | SyntaxColor
  | SyntaxValue
  | SyntaxSchema
  | undefined;

type SyntaxChildScopeResolvers = {
  [K in keyof Record<string, SyntaxResolverSource>]: SyntaxResolver;
};

export type SyntaxResolver = SyntaxChildScopeResolvers & {
  foreground: SyntaxColor;
  fontStyle: SyntaxFontStyle;
  visited: boolean;
  hasChildScopes: boolean;
  childScopes: SyntaxChildScopeResolvers;
};

function createResolver(value: SyntaxResolverSource): SyntaxResolver {
  if (typeof value === 'string') {
    return createResolver({foreground: value});
  }

  const {foreground, fontStyle, ...childScopes} = value as SyntaxValue;
  const proxiedValue = {foreground, fontStyle};
  Object.defineProperty(proxiedValue, 'visited', {
    enumerable: false,
    writable: true,
    value: false,
  });
  const hasChildScopes = Boolean(Object.keys(childScopes).length);
  const childScopeResolvers: Record<string, SyntaxResolver> = {};

  return new Proxy(proxiedValue, {
    get(
      target,
      prop,
      receiver,
    ): boolean | string | SyntaxResolver | SyntaxChildScopeResolvers {
      if (typeof prop === 'string') {
        switch (prop) {
          case 'visited':
          case 'foreground':
          case 'fontStyle': {
            return Reflect.get(target, prop, receiver);
          }
          case 'hasChildScopes': {
            return hasChildScopes;
          }
          case 'childScopes': {
            return hasChildScopes
              ? Object.entries(childScopes).reduce(
                  (result: SyntaxChildScopeResolvers, [key, value]) => {
                    if (value) result[key] = Reflect.get(receiver, key);
                    return result;
                  },
                  {},
                )
              : {};
          }
          default: {
            if (
              typeof value === 'object' &&
              typeof value[prop] !== 'undefined'
            ) {
              if (prop in childScopeResolvers) {
                childScopeResolvers[prop].visited = true;
                return childScopeResolvers[prop];
              } else {
                return (childScopeResolvers[prop] = createResolver(
                  value[prop],
                ));
              }
            }
          }
        }
      }
      return Reflect.get(target, prop, receiver);
    },
  }) as SyntaxResolver;
}

export interface ThemeConfig {
  name: string;
  ansi: AnsiSchema;
  syntax: SyntaxSchema;
  ui: UiSchema;
}

export interface Theme {
  name: string;
  ansi: AnsiSchema;
  syntax: SyntaxResolver;
  ui: UiSchema;
}

export type ThemeJson =
  | null
  | boolean
  | number
  | string
  | ThemeJson[]
  | {[prop: string]: ThemeJson};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isThemeConfig(value: any): value is ThemeConfig {
  return (
    value &&
    Boolean(validator.validate('ansiSchema', value.ansi)) &&
    Boolean(validator.validate('syntaxSchema', value.syntax)) &&
    Boolean(validator.validate('uiSchema', value.ui))
  );
}

class ValidationError extends Error {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(name: string, value: any) {
    console.info(value);
    super(
      `Invalid ${name} schema: ${value}.\n` +
        `Original error: ${validator.errorsText()} `,
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validate(value: any): asserts value is ThemeConfig {
  if (!validator.validate('ansiSchema', value.ansi))
    throw new ValidationError('ansi', value.ansi);
  if (!validator.validate('syntaxSchema', value.syntax))
    throw new ValidationError('syntax', value.syntax);
  if (!validator.validate('uiSchema', value.ui))
    throw new ValidationError('ui', value.ui);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export function validateRendered(value: any): asserts value is ThemeJson {
  /**
   * TODO: Figure out how to validate against vscode schema.
   * See https://github.com/microsoft/vscode/blob/master/src/vs/workbench/services/themes/common/colorThemeSchema.ts
   */
  // if (!validator.validate('vscodeThemeSchema', value))
  //   throw new ValidationError('vscode theme', value);
}

export function create(theme: ThemeConfig): Theme {
  return {
    name: theme.name,
    ui: theme.ui,
    syntax: createResolver(theme.syntax),
    ansi: theme.ansi,
  };
}
