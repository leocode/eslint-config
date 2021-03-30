module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'indent': [
      'error',
      2,
      {SwitchCase: 1},
    ],
    'keyword-spacing': [
      'error',
      {before: true, after: true},
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
    'max-params': [
      'warn',
      5,
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
    'no-nested-ternary': [
      'error',
    ],
    'no-trailing-spaces': [
      'error',
    ],
    'quote-props': [
      'error',
      'consistent-as-needed',
    ],
    'space-before-function-paren': [
      'error',
      {anonymous: 'always', named: 'never', asyncArrow: 'always'},
    ],
    'space-in-parens': [
      'error',
    ],
    'object-curly-spacing': [
      'error',
      'always',
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
    'unicode-bom': [
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
    ],
    'symbol-description': [
      'error',
    ],
    'yield-star-spacing': [
      'error',
    ],
  },
};
