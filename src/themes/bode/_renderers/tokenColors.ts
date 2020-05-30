import type {Theme, ThemeJson} from '../Theme';

export const render = ({syntax}: Theme): ThemeJson => [
  {
    name: 'Comment',
    scope: 'comment',
    settings: syntax.comment,
  },
  {
    name: 'Single line comment',
    scope: 'comment.line',
    settings: syntax.comment.line,
  },
  {
    name: 'Single line comment (//)',
    scope: 'comment.line.double_slash',
    settings: syntax.comment.line.double_slash,
  },
  {
    name: 'Single line comment (--)',
    scope: 'comment.line.double_dash',
    settings: syntax.comment.line.double_dash,
  },
  {
    name: 'Single line comment (#)',
    scope: 'comment.line.number_sign',
    settings: syntax.comment.line.number_sign,
  },
  {
    name: 'Single line comment (%)',
    scope: 'comment.line.percentage',
    settings: syntax.comment.line.percentage,
  },
  {
    name: 'Single line comment character',
    scope: 'comment.line.character',
    settings: syntax.comment.line.character,
  },
  {
    name: 'Multi-line block comment',
    scope: 'comment.block',
    settings: syntax.comment.block,
  },
  {
    name: 'Documentation',
    scope: 'comment.block.documentation',
    settings: syntax.comment.block.documentation,
  },
  {
    name: 'Constant',
    scope: 'constant',
    settings: syntax.constant,
  },
  {
    name: 'Numeric constant',
    scope: 'constant.numeric',
    settings: syntax.constant.numeric,
  },
  {
    name: 'Numeric constant (integer)',
    scope: 'constant.numeric',
    settings: syntax.constant.numeric.integer,
  },
  {
    name: 'Numeric constant (float)',
    scope: 'constant.numeric',
    settings: syntax.constant.numeric.float,
  },
  {
    name: 'Numeric constant (hex)',
    scope: 'constant.numeric',
    settings: syntax.constant.numeric.hex,
  },
  {
    name: 'Numeric constant (octal)',
    scope: 'constant.numeric',
    settings: syntax.constant.numeric.octal,
  },
  {
    name: 'Character constant',
    scope: 'constant.character',
    settings: syntax.constant.character,
  },
  {
    name: 'Escape character',
    scope: 'constant.character.escape',
    settings: syntax.constant.character.escape,
  },
  {
    name: 'Language constant',
    scope: 'constant.language',
    settings: syntax.constant.language,
  },
  {
    name: 'Other constant',
    scope: 'constant.other',
    settings: syntax.constant.other,
  },
  {
    name: 'Regular Expression constant',
    scope: 'constant.other',
    settings: syntax.constant.regexp,
  },
  {
    name: 'RGB constant',
    scope: 'constant.other',
    settings: syntax.constant['rgb-value'],
  },
  {
    name: 'Emphasis',
    scope: 'emphasis',
    settings: syntax.emphasis,
  },
  {
    name: 'Entity',
    scope: 'entity',
    settings: syntax.entity,
  },
  {
    name: 'Entity name',
    scope: 'entity.name',
    settings: syntax.entity.name,
  },
  {
    name: 'Variable name',
    scope: ['entity.name.variable', 'variable'],
    settings: syntax.entity.name.variable,
  },
  {
    name: 'Function name',
    scope: 'entity.name.function',
    settings: syntax.entity.name.function,
  },
  {
    name: 'Method name',
    scope: 'entity.name.method',
    settings: syntax.entity.name.method,
  },
  {
    name: 'Section name',
    scope: 'entity.name.section',
    settings: syntax.entity.name.section,
  },
  {
    name: 'Selector name',
    scope: 'entity.name.selector',
    settings: syntax.entity.name.selector,
  },
  {
    name: 'Type name',
    scope: 'entity.name.type',
    settings: syntax.entity.name.type,
  },
  {
    name: 'Tag name',
    scope: 'entity.name.tag',
    settings: syntax.entity.name.tag,
  },
  {
    name: 'Other entity',
    scope: 'entity.other',
    settings: syntax.entity.other,
  },
  {
    name: 'Inherited class',
    scope: 'entity.other.inherited-class',
    settings: syntax.entity.other['inherited-class'],
  },
  {
    name: 'Attribute name',
    scope: 'entity.other.attribute-name',
    settings: syntax.entity.other['attribute-name'],
  },
  {
    name: 'CSS ID selectors',
    scope: 'entity.other.attribute-name.id',
    settings: syntax.entity.other['attribute-name'].id,
  },
  {
    name: 'CSS pseudo element',
    scope: ['entity.other.attribute-name.pseudo-element'],
    settings: syntax.entity.other['attribute-name']['pseudo-element'],
  },
  {
    name: 'CSS pseudo class',
    scope: ['entity.other.attribute-name.pseudo-class'],
    settings: syntax.entity.other['attribute-name']['pseudo-class'],
  },
  {
    name: 'Invalid',
    scope: 'invalid',
    settings: syntax.invalid,
  },
  {
    name: 'Illegal',
    scope: 'invalid.illegal',
    settings: syntax.invalid.illegal,
  },
  {
    name: 'Deprecated',
    scope: 'invalid.deprecated',
    settings: syntax.invalid.deprecated,
  },
  {
    name: 'Keyword',
    scope: ['keyword', 'storage', 'storage.type'],
    settings: syntax.keyword,
  },
  {
    name: 'Control keyword',
    scope: 'keyword.control',
    settings: syntax.keyword.control,
  },
  {
    name: 'Operator',
    scope: 'keyword.operator',
    settings: syntax.keyword.operator,
  },
  {
    name: 'New operator',
    scope: ['keyword.operator.new'],
    settings: syntax.keyword.operator.new,
  },
  {
    name: 'Assignment operator',
    scope: ['keyword.operator.assignment'],
    settings: syntax.keyword.operator.assignment,
  },
  {
    name: 'Arithmetic operator',
    scope: ['keyword.operator.arithmetic'],
    settings: syntax.keyword.operator.arithmetic,
  },
  {
    name: 'Expression operator',
    scope: ['keyword.operator.expression'],
    settings: syntax.keyword.operator.expression,
  },
  {
    name: 'Logical operator',
    scope: ['keyword.operator.logical'],
    settings: syntax.keyword.operator.logical,
  },
  {
    name: 'Delete operator',
    scope: ['keyword.operator.delete'],
    settings: syntax.keyword.operator.delete,
  },
  {
    name: 'Other Keyword',
    scope: 'keyword.other',
    settings: syntax.keyword.other,
  },
  {
    name: 'Unit',
    scope: 'keyword.other.unit',
    settings: syntax.keyword.other.unit,
  },
  {
    name: 'Markup',
    scope: 'markup',
    settings: syntax.markup,
  },
  {
    name: 'Changed',
    scope: 'markup.changed',
    settings: syntax.markup.changed,
  },
  {
    name: 'Deleted',
    scope: 'markup.deleted',
    settings: syntax.markup.deleted,
  },
  {
    name: 'Inserted',
    scope: 'markup.inserted',
    settings: syntax.markup.inserted,
  },
  {
    name: 'Underline',
    scope: 'markup.underline',
    settings: syntax.markup.underline,
  },
  {
    name: 'Link',
    scope: 'markup.underline.link',
    settings: syntax.markup.underline.link,
  },
  {
    name: 'Bold',
    scope: 'markup.bold',
    settings: syntax.markup.bold,
  },
  {
    name: 'Heading',
    scope: ['markup.heading', 'entity.name.section'],
    settings: syntax.markup.heading,
  },
  {
    name: 'Italic',
    scope: 'markup.italic',
    settings: syntax.markup.italic,
  },
  {
    name: 'List',
    scope: 'markup.list',
    settings: syntax.markup.list,
  },
  {
    name: 'Numbered list',
    scope: 'markup.list.numbered',
    settings: syntax.markup.list.numbered,
  },
  {
    name: 'Unumbered list',
    scope: 'markup.list.unumbered',
    settings: syntax.markup.list.unumbered,
  },
  {
    name: 'Quote',
    scope: 'markup.quote',
    settings: syntax.markup.quote,
  },
  {
    name: 'Inline code',
    scope: ['markup.inline.raw'],
    settings: syntax.markup.inline,
  },
  {
    name: 'Fenced code',
    scope: ['markup.fenced_code.block'],
    settings: syntax.markup.fenced_code,
  },
  {
    name: 'Raw',
    scope: 'markup.raw',
    settings: syntax.markup.raw,
  },
  {
    name: 'Other markup',
    scope: 'markup.other',
    settings: syntax.markup.other,
  },

  {
    name: 'Storage',
    scope: 'storage',
    settings: syntax.storage,
  },
  {
    name: 'Properties',
    scope: 'storage.properties',
    settings: syntax.storage.properties,
  },
  {
    name: 'Modifier',
    scope: 'storage.modifier',
    settings: syntax.storage.modifier,
  },
  {
    name: 'Type',
    scope: 'storage.type',
    settings: syntax.storage.type,
  },
  {
    name: 'String',
    scope: ['string', 'meta.embedded.assembly'],
    settings: syntax.string,
  },
  {
    name: 'Quoted string',
    scope: 'string.quoted',
    settings: syntax.string.quoted,
  },
  {
    name: 'Single quoted string',
    scope: 'string.quoted.single',
    settings: syntax.string.quoted.single,
  },
  {
    name: 'Double quoted string',
    scope: 'string.quoted.double',
    settings: syntax.string.quoted.double,
  },
  {
    name: 'Triple quoted string',
    scope: 'string.quoted.triple',
    settings: syntax.string.quoted.triple,
  },
  {
    name: 'Other quoted string',
    scope: 'string.quoted.other',
    settings: syntax.string.quoted.other,
  },
  {
    name: 'Unquoted string',
    scope: 'string.unquoted',
    settings: syntax.string.unquoted,
  },
  {
    name: 'Interpolated string',
    scope: 'string.interpolated',
    settings: syntax.string.interpolated,
  },
  {
    name: 'Regular expression',
    scope: 'string.regexp',
    settings: syntax.string.regexp,
  },
  {
    name: 'Other string',
    scope: 'string.other',
    settings: syntax.string.other,
  },
  {
    name: 'Markup link descriptions',
    scope: 'string.other.link',
    settings: syntax.string.other.link,
  },
  {
    name: 'Strong',
    scope: 'strong',
    settings: syntax.strong,
  },
  {
    name: 'Provided (support) value',
    scope: 'support',
    settings: syntax.support,
  },
  {
    name: 'Provided function',
    scope: 'support.function',
    settings: syntax.support.function,
  },
  {
    name: 'Provided class',
    scope: 'support.class',
    settings: syntax.support.class,
  },
  {
    name: 'Provided type',
    scope: 'support.type',
    settings: syntax.support.type,
  },
  {
    name: 'Object/JSON property names',
    scope: ['support.type.property-name', 'meta.object-literal.key'],
    settings: syntax.support.type['property-name'],
  },
  {
    name: 'CSS property names',
    scope: 'support.type.property-name.css',
    settings: syntax.support.type['property-name'].css,
  },
  {
    name: 'Provided constant',
    scope: 'support.constant',
    settings: syntax.support.constant,
  },
  {
    name: 'Provided variable',
    scope: 'support.variable',
    settings: syntax.support.variable,
  },
  {
    name: 'Provided other',
    scope: 'support.other',
    settings: syntax.support.other,
  },
  {
    name: 'Variable',
    scope: 'variable',
    settings: syntax.variable,
  },
  {
    name: 'Parameter',
    scope: 'variable.parameter',
    settings: syntax.variable.parameter,
  },
  {
    name: 'GraphQL Parameter',
    scope: 'variable.parameter.graphql',
    settings: syntax.variable.parameter.graphql,
  },
  {
    name: 'Language variable',
    scope: 'variable.language',
    settings: syntax.variable.language,
  },
  {
    name: 'Other variable',
    scope: 'variable.other',
    settings: syntax.variable.other,
  },
  {
    name: 'Embedded template punctuation',
    scope: 'string.template meta.embedded',
    settings: syntax.string.template,
  },
  {
    name: 'Tag brackets',
    scope: 'punctuation.definition.tag',
    settings: syntax.punctuation.definition.tag,
  },
  {
    name: 'Key/value separators',
    scope: 'punctuation.separator',
    settings: syntax.punctuation.separator,
  },
  {
    name: 'Template expressions',
    scope: 'punctuation.definition.template-expression',
    settings: syntax.punctuation.definition['template-expression'],
  },
  {
    name: 'Embedded section punctuation',
    scope: 'punctuation.section.embedded',
    settings: syntax.punctuation.section.embedded,
  },
  {
    name: 'Markup list punctuation',
    scope: 'punctuation.definition.list',
    settings: syntax.punctuation.definition.list,
  },
  {
    name: 'Type definition punctuation',
    scope: 'punctuation.definition.typeparameters',
    settings: syntax.punctuation.definition.typeparameters,
  },
];
