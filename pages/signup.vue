<template>
  <div class="flex min-h-screen flex-col">
    <h2 class="my-10 text-center text-2xl font-bold">회원가입</h2>
    <form @submit.prevent>
      <div class="mb-10 px-4">
        <label for="email" class="block text-sm font-medium text-gray-500">
          이메일
        </label>
        <input
          type="text"
          id="email"
          class="mt-2 block w-full border-0 border-b-2 border-gray-200 bg-transparent focus:border-blue-400 focus:outline-none focus:ring-0"
        />
      </div>

      <div class="mb-10 px-4">
        <label for="password" class="block text-sm font-medium text-gray-500">
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          class="mt-2 block w-full border-0 border-b-2 border-gray-200 bg-transparent focus:border-blue-400 focus:outline-none focus:ring-0"
        />
      </div>
      <div class="mb-10 px-4">
        <label for="username" class="block text-sm font-medium text-gray-500">
          닉네임
        </label>
        <input
          type="text"
          id="username"
          class="mt-2 block w-full border-0 border-b-2 border-gray-200 bg-transparent focus:border-blue-400 focus:outline-none focus:ring-0"
        />
      </div>
      <div>
        <button
          class="relative mx-auto flex w-4/5 items-center justify-center rounded-full border border-gray-300 bg-customBlue-400 py-3 font-bold text-white transition hover:bg-customBlue-500"
        >
          시작하기
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
