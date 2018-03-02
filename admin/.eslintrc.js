module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
  },
  // extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'react'
  ],
  // add your custom rules here
  'rules': {
    'radix': 0,
    'global-require': 0,
    'no-useless-constructor': 0

  },
  "env": {
      "browser": true
  },
  "globals": {
  },
}