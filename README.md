# LEOCODE's ESLint config

## Installation

1. Install all peer dependencies. You can use your favourite tool or just type:

```
For React:

yarn add --dev eslint@8 @typescript-eslint/eslint-plugin@5 @typescript-eslint/parser@5 eslint-plugin-react@7.27.0 eslint-plugin-react-hooks@4.3.0 typescript@4

For Node:

yarn add --dev eslint@8 @typescript-eslint/eslint-plugin@5 @typescript-eslint/parser@5 typescript@4
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

## License

MIT
