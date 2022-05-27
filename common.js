module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {'vars': 'all', 'ignoreRestSiblings': true}
    ],
    'no-return-await': [
      'off',
    ],
    'yield-star-spacing': [
      'error',
    ],
    'symbol-description': [
      'error',
    ],
    'no-this-before-super': [
      'error',
    ],
    'no-var': [
      'error',
    ],
    'object-shorthand': [
      'error',
    ],
    'prefer-arrow-callback': [
      'error',
    ],
    'prefer-const': [
      'error',
    ],
    'rest-spread-spacing': [
      'error',
    ], 'unicode-bom': [
      'error',
    ],
    'arrow-spacing': [
      'error',
    ],
    'constructor-super': [
      'error',
    ],
    'generator-star-spacing': [
      'error',
      'after',
    ],
    'no-confusing-arrow': [
      'error',
    ],
    'space-infix-ops': [
      'error',
    ],
    'space-unary-ops': [
      'error',
    ],
    'spaced-comment': [
      'error',
    ],
    'switch-colon-spacing': [
      'error',
    ],
    'space-in-parens': [
      'error',
    ],
    'space-before-function-paren': [
      'error',
      {anonymous: 'always', named: 'never', asyncArrow: 'always'},
    ],
    'quote-props': [
      'error',
      'consistent-as-needed',
    ],
    'no-trailing-spaces': [
      'error',
    ],
    'no-nested-ternary': [
      'error',
    ],
    'max-params': [
      'warn',
      3,
    ],
    'new-parens': [
      'error',
    ],
    'no-bitwise': [
      'error',
    ],
    'no-mixed-spaces-and-tabs': [
      'error',
    ],
    'no-multiple-empty-lines': [
      'error',
    ],
    'comma-spacing': [
      'error',
    ],
    'func-call-spacing': [
      'error',
    ],
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
    'key-spacing': [
      'error',
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {exceptAfterSingleLine: true},
    ],
    'no-useless-return': [
      'error',
    ],
    'radix': [
      'error',
      'always',
    ],
    'require-await': [
      'warn',
    ],
    'require-yield': [
      'warn',
    ],
    'wrap-iife': [
      'error',
      'inside',
    ],
    'array-bracket-newline': [
      'error',
      'consistent',
    ],
    'array-bracket-spacing': [
      'error',
    ],
    'block-spacing': [
      'error',
    ],
    'brace-style': [
      'error',
      '1tbs',
      {allowSingleLine: true},
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'no-dupe-keys': [
      'error',
    ],
    'no-extra-semi': [
      'error',
    ],
    'no-invalid-regexp': [
      'error',
    ],
    'no-sparse-arrays': [
      'warn',
    ],
    'no-template-curly-in-string': [
      'warn',
    ],
    'no-unreachable': [
      'warn',
    ],
    'no-unsafe-finally': [
      'warn',
    ],
    'require-atomic-updates': [
      'warn',
    ],
    'use-isnan': [
      'warn',
    ],
    'valid-typeof': [
      'warn',
    ],
    'eqeqeq': [
      'error',
      'always',
    ],
    'no-multi-spaces': [
      'error',
    ],
    'no-octal': [
      'error',
    ],
    'no-throw-literal': [
      'error',
    ],
    'no-useless-catch': [
      'error',
    ],
    'indent': [
      'error',
      2,
      {SwitchCase: 1},
    ],
    'keyword-spacing': [
      'error',
      {before: true, after: true},
    ],
    'eol-last': [
      'error',
      'always'
    ],
  }
}
