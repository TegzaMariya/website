// .eslintrc.js
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    // Стандартні рекомендовані правила
    'eslint:recommended',
    // Плагін для правил React
    'plugin:react/recommended',
    // Вимикає правила ESLint, що конфліктують з Prettier
    'plugin:prettier/recommended' 
  ],
  'parserOptions': {
    'ecmaFeatures': { 'jsx': true },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'prettier'
  ],
  'settings': {
    'react': { 'version': 'detect' }
  },
  'rules': {
    // Увімкнення помилок Prettier
    'prettier/prettier': 'error', 
    // Наприклад, вимкнути вимогу prop-types, якщо використовуєте TypeScript
    'react/prop-types': 'off' 
  }
};