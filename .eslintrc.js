module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  extends: ['react-app', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  settings: {
    react: {
      version: '999.999.999',
    },
  },
};
