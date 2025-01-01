<template>
  <div class="flex min-h-screen flex-col">
    <form class="mt-10" @submit.prevent>
      <h2 class="mb-8 text-center text-2xl font-bold">로그인</h2>

      <!-- 이메일 입력 -->
      <div class="mb-8 px-4">
        <label for="email" class="block text-sm font-medium text-gray-500">
          이메일
        </label>
        <input
          type="text"
          id="email"
          class="mt-2 block w-full border-0 border-b-2 border-gray-200 bg-transparent focus:border-blue-400 focus:outline-none focus:ring-0"
        />
      </div>

      <div class="mb-8 px-4">
        <label for="password" class="block text-sm font-medium text-gray-500">
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          class="mt-2 block w-full border-0 border-b-2 border-gray-200 bg-transparent focus:border-blue-400 focus:outline-none focus:ring-0"
        />
      </div>
      <div>
        <button
          class="bg-customBlue-400 hover:bg-customBlue-500 relative mx-auto flex w-4/5 items-center justify-center rounded-full border border-gray-300 py-3 font-bold text-white transition"
        >
          로그인
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
