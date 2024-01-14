# LEOCODE's ESLint config

## Installation

1. Install all peer dependencies. You can use your favourite tool or just type:

```
For React:

yarn add --dev eslint@8 @typescript-eslint/eslint-plugin@6 @typescript-eslint/parser@6 eslint-plugin-react@7.27.0 eslint-plugin-react-hooks@4.3.0 typescript@5

For Node:

yarn add --dev eslint@8 @typescript-eslint/eslint-plugin@6 @typescript-eslint/parser@6 typescript@5
```

2. Install package with configuration:

```
yarn add --dev @leocode/eslint-config
```

## Usage

For node put this in `.eslintrc.js` file:

```js
module.exports = {
  extends: ['@leocode/eslint-config/node'],
};
```

For React put this in `.eslintrc.js` file:

```js
module.exports = {
  extends: ['@leocode/eslint-config/react'],
};
```

## Known issues

If ESLint doesn't work by default in your editor (it cannot find `tsconfig.json` file), you may need to specify in `.eslintrc.js`:

```js
module.exports = {
  extends: ['@leocode/eslint-config/node'],
  parserOptions: {
    tsconfigRootDir: __dirname, // or any other directory relative to `.eslintrc.js` file
  },
};
```

## License

MIT
