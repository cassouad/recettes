module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react'
  ],
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['webpack.config.js', 'dist', 'docs'],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'error',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    camelcase: 'error',
    indent: ['error', 2],
    'no-var': 'error',
    'prefer-const': 'error',
    eqeqeq: 'error',
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ]
}
