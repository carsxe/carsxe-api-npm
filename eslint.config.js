// eslint.config.cjs
const tsParser       = require('@typescript-eslint/parser');
const tsPlugin       = require('@typescript-eslint/eslint-plugin');
const prettierConfig = require('eslint-config-prettier');

/** @type {import('eslint').ESLint.ConfigData[]} */
module.exports = [
  // Files / folders to ignore
  {
    ignores: ['lib/**/*', 'node_modules', 'src/__tests__/**/*']
  },

  // TypeScript source files
  {
    files: ['src/**/*.{ts,tsx}', '!src/__tests__/**/*'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      // project-specific rulings
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn'
    }
  },

  // Prettier turns off style rules that might clash
  prettierConfig
];
