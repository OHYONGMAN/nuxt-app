module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended', // 기본 eslint 규칙
    'plugin:vue/vue3-recommended', // Vue 3 추천 규칙
    'plugin:@typescript-eslint/recommended', // TypeScript 추천 규칙
    'prettier', // Prettier와 충돌하는 규칙을 비활성화
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }], // Prettier 규칙 적용
    'no-console': 'warn', // console 사용 시 경고
    'no-debugger': 'warn', // debugger 사용 시 경고
  },
}
