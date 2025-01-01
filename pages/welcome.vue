<template>
  <div
    class="bg-customBlue-200 flex min-h-screen flex-col items-center justify-center"
  >
    <!-- 로고 및 설명 -->
    <div class="mt-60 flex flex-col items-center justify-start text-white">
      <!-- SVG 아이콘 -->
      <img
        class="mb-2 h-16 w-16"
        src="/icons/calendar.svg"
        alt="Calendar Logo"
      />
      <h1 class="text-3xl font-bold">Momento</h1>
      <p class="text-sm font-medium">당신의 중요한 순간을 기록하세요.</p>
    </div>

    <div
      class="mt-auto w-full space-y-4 rounded-t-lg bg-white px-6 py-24 shadow-lg"
    >
      <NuxtLink
        class="bg-customBlue-400 hover:bg-customBlue-500 relative mx-auto flex w-full items-center justify-center rounded-full border border-gray-300 py-3 font-bold text-white transition"
        to="/login"
      >
        <img
          src="/icons/login.svg"
          alt="login Logo"
          class="absolute left-4 h-5 w-5"
        />
        <span>이메일로 로그인</span>
      </NuxtLink>

      <NuxtLink
        class="relative mx-auto flex w-full items-center justify-center rounded-full border border-gray-300 bg-white py-3 font-bold text-gray-700 transition hover:bg-gray-200"
        to="/signup"
      >
        <img
          class="absolute left-4 h-5 w-5"
          src="/icons/signup.svg"
          alt="signup Logo"
        />
        <span>회원가입</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
