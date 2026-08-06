import globals from 'globals'
export default {
  ignores: ['cypress/**'],
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    globals: { ...globals.browser, ...globals.node },
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
  },
}