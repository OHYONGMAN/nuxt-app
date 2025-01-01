/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './icons/**/*.svg',
  ],
  theme: {
    extend: {
      fill: {
        blue: '#3b82f6',
      },
      colors: {
        customBlue: {
          50: '#ebf8ff', // 밝고 부드러운 파란색 (아주 연한)
          100: '#d1e7ff', // 연한 파란색
          200: '#a6d4ff', // 부드러운 스카이블루
          300: '#6fb9ff', // 밝은 하늘색
          400: '#369aff', // 기본 파란색
          500: '#007aff', // 중간 톤 파란색
          600: '#005fcc', // 진한 블루
          700: '#004499', // 어두운 블루
          800: '#002966', // 더 깊은 블루
          900: '#001633', // 아주 어두운 블루
        },
      },

      maxWidth: {
        'screen-mobile': '375px',
      },
    },
  },
  plugins: [],
};
