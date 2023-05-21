module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'import/no-mutable-exports': 'off',
  },
};
