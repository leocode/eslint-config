module.exports = {
  extends: ['./common.js'],
  env: {
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
    ],
    '@typescript-eslint/return-await': [
      'error',
      'always',
    ],
  },
};
