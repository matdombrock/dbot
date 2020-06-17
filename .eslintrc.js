module.exports = {
  'env': {
    'commonjs': true,
    'es2020': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 11,
  },
  'rules': {
    'require-jsdoc': 'off',
    'max-len': ['error', {'ignoreTemplateLiterals': true, 'ignoreStrings': true}],
    'prefer-template': 'error',
  },
};
