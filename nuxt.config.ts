// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // TailwindCSS 설정 추가
  css: ['~/assets/css/tailwind.css', '@/assets/css/main.css'], // CSS 파일 추가

  postcss: {
    plugins: {
      tailwindcss: {}, // TailwindCSS 플러그인
      autoprefixer: {}, // 브라우저 호환성 플러그인
    },
  },
});
