module.exports = {
  parser: 'babel-eslint',
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
  },
  ignorePatterns: ['webpack.config.js', 'dist', 'docs'],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'error'
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
