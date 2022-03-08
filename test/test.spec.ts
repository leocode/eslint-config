import { test } from 'uvu';
import { ESLint } from 'eslint';
import expect from 'expect';

const eslint = new ESLint({
  useEslintrc: false,
  overrideConfigFile: 'node.js',
  overrideConfig: {
    parserOptions: {
      project: 'test/fixtures/tsconfig.json',
    }
  }
});

test('should show errors in invalid file', async () => {
  const [results] = await eslint.lintFiles(['test/fixtures/invalid.ts']);

  expect(results.messages).toHaveLength(3);
});

test('should not show errors in valid file', async () => {
  const [results] = await eslint.lintFiles(['test/fixtures/valid.ts']);

  expect(results.messages).toHaveLength(0);
});

test.run();
