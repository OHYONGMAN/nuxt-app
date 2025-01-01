<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center bg-blue-500"
  >
    <!-- 로고 및 설명 -->
    <div class="mb-10 text-center text-white">
      <div class="mx-auto mb-4 h-16 w-16"></div>
      <h1 class="text-3xl font-bold">CodeGram</h1>
      <p class="mt-2 text-sm">코드로 성장하는 개발자들의 공간</p>
    </div>

    <!-- 로그인 및 회원가입 -->
    <div class="mx-auto w-80 space-y-4 rounded-lg bg-white p-6 shadow-lg">
      <!-- 이메일로 로그인 링크 -->
      <NuxtLink
        to="/login"
        class="block w-full text-center font-bold text-blue-700 hover:underline"
      >
        이메일로 로그인
      </NuxtLink>

      <!-- 회원가입 버튼 -->
      <NuxtLink
        to="/signup"
        class="flex w-full items-center justify-center rounded-full border border-gray-300 py-3 font-bold text-gray-700 transition hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        회원가입
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
