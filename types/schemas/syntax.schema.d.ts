/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA
 */
export type SyntaxColor = string;
/**
 * "bold", "underline", "italic", or a combination. An empty string unsets an inherited style.
 */
export type SyntaxFontStyle =
  | "bold"
  | "bold italic"
  | "bold italic underline"
  | "bold underline"
  | "bold underline italic"
  | "italic"
  | "italic bold"
  | "italic bold underline"
  | "italic underline"
  | "italic underline bold"
  | "underline"
  | "underline bold"
  | "underline bold italic"
  | "underline italic"
  | "underline italic bold"
  | "";

export interface SyntaxSchema {
  /**
   * A single- or multi-line comment
   */
  comment:
    | SyntaxColor
    | {
        foreground?: SyntaxColor;
        fontStyle?: SyntaxFontStyle;
        /**
         * A single line comment
         */
        line?:
          | SyntaxColor
          | {
              foreground?: SyntaxColor;
              fontStyle?: SyntaxFontStyle;
              /**
               * // comment
               */
              double_slash?: SyntaxColor | SyntaxValue;
              /**
               * --comment
               */
              double_dash?: SyntaxColor | SyntaxValue;
              /**
               * # comment
               */
              number_sign?: SyntaxColor | SyntaxValue;
              /**
               * % comment
               */
              percentage?: SyntaxColor | SyntaxValue;
              /**
               * Other types of line comments
               */
              character?: SyntaxColor | SyntaxValue;
              [k: string]: (SyntaxColor | SyntaxValue) | undefined;
            };
        /**
         * Multi-line comment like /* … * / and <!-- … -->.
         */
        block?:
          | SyntaxColor
          | {
              foreground?: SyntaxColor;
              fontStyle?: SyntaxFontStyle;
              /**
               * Embedded documentation
               */
              documentation?: SyntaxColor | SyntaxValue;
              [k: string]: (SyntaxColor | SyntaxValue) | undefined;
            };
        [k: string]: (SyntaxColor | SyntaxValue) | undefined;
      };
  /**
   * Various forms of constants
   */
  constant:
    | SyntaxColor
    | {
        foreground?: SyntaxColor;
        fontStyle?: SyntaxFontStyle;
        /**
         * A numeric constant, e.g. 42, 1.3f, 0x4AB1U
         */
        numeric?: SyntaxColor | SyntaxValue;
        /**
         * A character constant, e.g. &lt;, \e, \031
         */
        character?:
          | SyntaxColor
          | {
              foreground?: SyntaxColor;
              fontStyle?: SyntaxFontStyle;
              /**
               * Escape sequence, e.g. \e
               */
              escape?: SyntaxColor | SyntaxValue;
              [k: string]: (SyntaxColor | SyntaxValue) | undefined;
            };
        /**
         * Constants provided by the language, like true, false, nil, YES, NO, etc.
         */
        language?: SyntaxColor | SyntaxValue;
        /**
         * Other constants, e.g. colors in CSS
         */
        other?: SyntaxColor | SyntaxValue;
        [k: string]: (SyntaxColor | SyntaxValue) | undefined;
      };
  /**
   * A document entity
   */
  entity:
    | SyntaxColor
    | {
        foreground?: SyntaxColor;
        fontStyle?: SyntaxFontStyle;
        /**
         * Entity name
         */
        name?:
          | SyntaxColor
          | {
              foreground?: SyntaxColor;
              fontStyle?: SyntaxFontStyle;
              /**
               * The name of a variable
               */
              variable?: SyntaxColor | SyntaxValue;
              /**
               * The name of a function
               */
              function?: SyntaxColor | SyntaxValue;
              /**
               * The name of a type declaration or class
               */
              type?: SyntaxColor | SyntaxValue;
              /**
               * A tag name
               */
              tag?: SyntaxColor | SyntaxValue;
              /**
               * A heading or name of a section
               */
              section?: SyntaxColor | SyntaxValue;
              [k: string]: (SyntaxColor | SyntaxValue) | undefined;
            };
        [k: string]: (SyntaxColor | SyntaxValue) | undefined;
      };
  /**
   * Stuff which is "invalid"
   */
  invalid:
    | SyntaxColor
    | {
        foreground?: SyntaxColor;
        fontStyle?: SyntaxFontStyle;
        /**
         * Illegal, e.g. an ampersand or lower-than character in HTML (which is not part of an entity/tag).
         */
        illegal?: SyntaxColor | SyntaxValue;
        /**
         * Deprecated, e.g. using an API function which is deprecated or using styling with strict HTML.
         */
        deprecated?: SyntaxColor | SyntaxValue;
        [k: string]: (SyntaxColor | SyntaxValue) | undefined;
      };
  /**
   * Keyword, (when these do not fall into the other groups).
   */
  keyword:
    | SyntaxColor
    | {
        foreground?: SyntaxColor;
        fontStyle?: SyntaxFontStyle;
        /**
         * Control, mainly related to flow control like continue, while, return, etc.
         */
        control?: SyntaxColor | SyntaxValue;
        /**
         * Operators can either be textual (e.g. or) or be characters
         */
        operator?:
          | SyntaxColor
          | {
              foreground?: SyntaxColor;
              fontStyle?: SyntaxFontStyle;
              /**
               * New operator, e.g. new Foo()
               */
              new?: SyntaxColor | SyntaxValue;
              /**
               * Operators used in expressions
               */
              expression?: SyntaxColor | SyntaxValue;
              /**
               * Logical operator, e.g. ! && ||
               */
              logical?: SyntaxColor | SyntaxValue;
              /**
               * Delete operator, e.g. delete foo.bar
               */
              delete?: SyntaxColor | SyntaxValue;
              [k: string]: (SyntaxColor | SyntaxValue) | undefined;
            };
        /**
         * Other keyword
         */
        other?:
          | SyntaxColor
          | {
              foreground?: SyntaxColor;
              fontStyle?: SyntaxFontStyle;
              /**
               * Unit, e.g. em, px, etc
               */
              unit?: SyntaxColor | SyntaxValue;
              [k: string]: (SyntaxColor | SyntaxValue) | undefined;
            };
        [k: string]: (SyntaxColor | SyntaxValue) | undefined;
      };
  /**
   * Markup
   */
  markup:
    | SyntaxColor
    | {
        foreground?: SyntaxColor;
        fontStyle?: SyntaxFontStyle;
        /**
         * Underlined text
         */
        underline?:
          | SyntaxColor
          | {
              foreground?: SyntaxColor;
              fontStyle?: SyntaxFontStyle;
              /**
               * Underlined link
               */
              link?: SyntaxColor | SyntaxValue;
              [k: string]: (SyntaxColor | SyntaxValue) | undefined;
            };
        /**
         * Bold text. Text which is strong and similar should preferably be derived from this name
         */
        bold?: SyntaxColor | SyntaxValue;
        /**
         * A section header. Optionally provide the heading level as the next element, for example markup.heading.2.html for <h2>…</h2> in HTML.
         */
        heading?: SyntaxColor | SyntaxValue;
        /**
         * Italic text. Text which is emphasized and similar should preferably be derived from this name
         */
        italic?: SyntaxColor | SyntaxValue;
        /**
         * List items
         */
        list?:
          | SyntaxColor
          | {
              foreground?: SyntaxColor;
              fontStyle?: SyntaxFontStyle;
              /**
               * Numbered list item
               */
              numbered?: SyntaxColor | SyntaxValue;
              /**
               * Unumbered list item
               */
              unumbered?: SyntaxColor | SyntaxValue;
              [k: string]: (SyntaxColor | SyntaxValue) | undefined;
            };
        /**
         * Quoted (sometimes block quoted) text
         */
        quote?: SyntaxColor | SyntaxValue;
        /**
         * Inline code
         */
        inline?: SyntaxColor | SyntaxValue;
        /**
         * Fenced code
         */
        fenced_code?: SyntaxColor | SyntaxValue;
        /**
         * Verbatim text
         */
        raw?: SyntaxColor | SyntaxValue;
        /**
         * Other markup constructs
         */
        other?: SyntaxColor | SyntaxValue;
        [k: string]: (SyntaxColor | SyntaxValue) | undefined;
      };
  /**
   * Punctuation
   */
  punctuation:
    | SyntaxColor
    | {
        foreground?: SyntaxColor;
        fontStyle?: SyntaxFontStyle;
        /**
         * punctuation characters denoting a definition
         */
        definition?:
          | SyntaxColor
          | {
              foreground?: SyntaxColor;
              fontStyle?: SyntaxFontStyle;
              /**
               * Tag brackets, e.g. <tag />
               */
              tag?: SyntaxColor | SyntaxValue;
              /**
               * Template expression punctuation, e.g. `template`
               */
              "template-expression"?: SyntaxColor | SyntaxValue;
              /**
               * Markup list punctuation, e.g. - item
               */
              list?: SyntaxColor | SyntaxValue;
              [k: string]: (SyntaxColor | SyntaxValue) | undefined;
            };
        /**
         * Key/value separators, e.g. key: value
         */
        separator?: SyntaxColor | SyntaxValue;
        /**
         * Punctuation characters denoting a section
         */
        section?:
          | SyntaxColor
          | {
              foreground?: SyntaxColor;
              fontStyle?: SyntaxFontStyle;
              /**
               * Embedded section punctuation
               */
              embedded?: SyntaxColor | SyntaxValue;
              [k: string]: (SyntaxColor | SyntaxValue) | undefined;
            };
        [k: string]: (SyntaxColor | SyntaxValue) | undefined;
      };
  /**
   * Value storage declarations, e.g. class, function, var
   */
  storage:
    | SyntaxColor
    | {
        foreground?: SyntaxColor;
        fontStyle?: SyntaxFontStyle;
        /**
         * The type of something, e.g. class, function, int, var, etc.
         */
        type?: SyntaxColor | SyntaxValue;
        /**
         * A storage modifier, e.g. static, final, abstract, etc.
         */
        modifier?: SyntaxColor | SyntaxValue;
        [k: string]: (SyntaxColor | SyntaxValue) | undefined;
      };
  /**
   * String
   */
  string:
    | SyntaxColor
    | {
        foreground?: SyntaxColor;
        fontStyle?: SyntaxFontStyle;
        /**
         * Quoted string
         */
        quoted?:
          | SyntaxColor
          | {
              foreground?: SyntaxColor;
              fontStyle?: SyntaxFontStyle;
              /**
               * Single quoted string, e.g. 'foo'
               */
              single?: SyntaxColor | SyntaxValue;
              /**
               * Double quoted string, e.g. "foo"
               */
              double?: SyntaxColor | SyntaxValue;
              /**
               * Triple quoted string, e.g. """Python"""
               */
              triple?: SyntaxColor | SyntaxValue;
              /**
               * Other types of quoting, e.g. $'shell', %s{...}.
               */
              other?: SyntaxColor | SyntaxValue;
              [k: string]: (SyntaxColor | SyntaxValue) | undefined;
            };
        /**
         * Unquoted string, for things like here-docs and here-strings.
         */
        unquoted?: SyntaxColor | SyntaxValue;
        /**
         * Interpolated string, Strings which are “evaluated”, e.g. `date`, $(pwd).
         */
        interpolated?: SyntaxColor | SyntaxValue;
        /**
         * Regular expression, e.g. /(\w+)/
         */
        regexp?: SyntaxColor | SyntaxValue;
        /**
         * Other types of string. Should rarely be used
         */
        other?:
          | SyntaxColor
          | {
              foreground?: SyntaxColor;
              fontStyle?: SyntaxFontStyle;
              /**
               * Markup link description
               */
              link?: SyntaxColor | SyntaxValue;
              [k: string]: (SyntaxColor | SyntaxValue) | undefined;
            };
        [k: string]: (SyntaxColor | SyntaxValue) | undefined;
      };
  /**
   * Things provided by a framework or library
   */
  support:
    | SyntaxColor
    | {
        foreground?: SyntaxColor;
        fontStyle?: SyntaxFontStyle;
        /**
         * Function provided by the framework/library, For example NSLog in Objective-C is support.function.
         */
        function?: SyntaxColor | SyntaxValue;
        /**
         * Class provided by the framework/library
         */
        class?: SyntaxColor | SyntaxValue;
        /**
         * Type provided by the framework/library, This is probably only used for languages derived from C, which has typedef (and struct). Most other languages would introduce new types as classes.
         */
        type?:
          | SyntaxColor
          | {
              foreground?: SyntaxColor;
              fontStyle?: SyntaxFontStyle;
              /**
               * Object/JSON property names
               */
              "property-name"?:
                | SyntaxColor
                | {
                    foreground?: SyntaxColor;
                    fontStyle?: SyntaxFontStyle;
                    /**
                     * CSS property name
                     */
                    css?: SyntaxColor | SyntaxValue;
                    [k: string]: (SyntaxColor | SyntaxValue) | undefined;
                  };
              [k: string]: (SyntaxColor | SyntaxValue) | undefined;
            };
        /**
         * Constants (magic values) provided by the framework/library
         */
        constant?: SyntaxColor | SyntaxValue;
        /**
         * Variables provided by the framework/library, e.g. NSApp in AppKit.
         */
        variable?: SyntaxColor | SyntaxValue;
        /**
         * Other constructs provided by the framework/library
         */
        other?: SyntaxColor | SyntaxValue;
        [k: string]: (SyntaxColor | SyntaxValue) | undefined;
      };
  /**
   * Variable
   */
  variable:
    | SyntaxColor
    | {
        foreground?: SyntaxColor;
        fontStyle?: SyntaxFontStyle;
        /**
         * Parameter
         */
        parameter?: SyntaxColor | SyntaxValue;
        /**
         * Reserved language variable, e.g. this, super, self, etc.
         */
        language?: SyntaxColor | SyntaxValue;
        /**
         * Other variables, e.g. $some_variables
         */
        other?: SyntaxColor | SyntaxValue;
        [k: string]: (SyntaxColor | SyntaxValue) | undefined;
      };
}
export interface SyntaxValue {
  foreground?: SyntaxColor;
  fontStyle?: SyntaxFontStyle;
  [k: string]: (SyntaxColor | SyntaxValue) | undefined;
}
