import type {Theme, ThemeJson, SyntaxResolver} from '../../Theme';

export const render = ({syntax}: Theme): ThemeJson[] => {
  const result: ThemeJson[] = [];
  const scopesToExplore = Object.entries(syntax.childScopes).reverse();
  while (scopesToExplore.length) {
    const [scope, resolver] = scopesToExplore.pop() as [string, SyntaxResolver];
    result.push({scope, settings: (resolver as unknown) as ThemeJson});
    if (resolver.hasChildScopes) {
      scopesToExplore.push(
        ...Object.entries(resolver.childScopes)
          .map((v) => {
            v[0] = `${scope}.${v[0]}`;
            return v;
          })
          .reverse(),
      );
    }
  }
  return result;
};
