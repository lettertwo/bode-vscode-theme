import type {Theme, ThemeJson, SyntaxResolver} from '../../Theme';

export const render = ({syntax}: Theme): ThemeJson[] => {
  const result: ThemeJson[] = [];

  const getResolver = (v: string): SyntaxResolver | undefined => {
    let r: SyntaxResolver = syntax;
    for (const s of v.split('.').reverse()) {
      if (s in r) {
        r = r[s];
      } else {
        return undefined;
      }
    }
    return r;
  };

  const addDefault = (defaultValue: {
    name: string;
    scope: string | string[];
    settings: SyntaxResolver;
  }): void => {
    // Only include default scopes that have not been explicitly overriden.
    const scope = (Array.isArray(defaultValue.scope)
      ? defaultValue.scope
      : [defaultValue.scope]
    ).filter((k) => {
      const v = getResolver(k);
      return !v || !v.visited;
    });

    if (!scope.length) return;
    result.push(defaultValue as ThemeJson);
  };
  addDefault({name: 'Comment', scope: 'comment', settings: syntax.comment});
  addDefault({name: 'Constant', scope: 'constant', settings: syntax.constant});
  addDefault({name: 'Entity', scope: 'entity', settings: syntax.entity});
  addDefault({name: 'Invalid', scope: 'invalid', settings: syntax.invalid});
  addDefault({name: 'Keyword', scope: 'keyword', settings: syntax.keyword});
  addDefault({name: 'Markup', scope: 'markup', settings: syntax.markup});
  addDefault({
    name: 'Punctuation',
    scope: 'punctuation',
    settings: syntax.punctuation,
  });
  addDefault({name: 'Storage', scope: 'storage', settings: syntax.storage});
  addDefault({name: 'String', scope: 'string', settings: syntax.string});
  addDefault({name: 'Support', scope: 'support', settings: syntax.support});
  addDefault({name: 'Variable', scope: 'variable', settings: syntax.variable});

  return result;
};
