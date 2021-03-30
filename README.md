# LEOCODE's ESLint config

## Installation

1. Install all peer dependencies. You can use your favourite tool or just type:

```
yarn add --dev eslint@7 @typescript-eslint/eslint-plugin@4 @typescript-eslint/parser@4 eslint-plugin-react@7 eslint-plugin-react-hooks@4 typescript@4
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
