module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['plugin:vue/vue3-strongly-recommended', '@prxmat/eslint-config-ts'],
  plugins: ['vue'],
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
  },
}
