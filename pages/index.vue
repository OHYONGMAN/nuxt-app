<template>
  <div class="flex min-h-screen flex-col items-center py-2">
    <div class="mb-5 flex w-full max-w-md items-center justify-between px-4">
      <h1 class="text-xl font-bold">Momento</h1>
      <button>
        <svg
          class="h-6 w-6 fill-gray-400 hover:fill-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"
          />
        </svg>
      </button>
    </div>

    <!-- 캘린더 헤더 -->
    <div class="mb-5 flex w-full max-w-md items-center justify-between px-4">
      <button @click="prevMonth">
        <svg
          class="h-8 w-8 fill-customBlue-400 hover:fill-customBlue-500"
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-8.211-4.843c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591z"
            fill-rule="nonzero"
          />
        </svg>
      </button>
      <span class="text-lg font-semibold">
        {{ currentYear }}년 {{ currentMonth + 1 }}월
      </span>
      <button @click="nextMonth">
        <svg
          class="h-8 w-8 fill-customBlue-400 hover:fill-customBlue-500"
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z"
            fill-rule="nonzero"
          />
        </svg>
      </button>
    </div>

    <!-- 캘린더 날짜 -->
    <div class="mx-auto grid w-full max-w-md grid-cols-7 gap-2 px-4">
      <!-- 요일 헤더 -->
      <div v-for="day in weekdays" :key="day" class="text-center font-bold">
        {{ day }}
      </div>

      <!-- 공백 -->
      <div v-for="n in startDayOfWeek" :key="'blank-' + n" class="h-12"></div>

      <!-- 날짜 -->
      <div
        v-for="day in daysInMonth"
        :key="day"
        :class="[
          'flex h-12 items-center justify-center rounded',
          isToday(day)
            ? 'bg-red-400 font-bold text-white'
            : 'bg-blue-100 hover:bg-blue-200',
        ]"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

// 현재 날짜와 월을 관리하는 상태
const currentYear = ref(new Date().getFullYear());
const currentMonth = ref(new Date().getMonth());
const currentDay = ref(new Date().getDate());
const daysInMonth = ref<number[]>([]);
const startDayOfWeek = ref(0);
const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

// 현재 월의 날짜를 계산하는 함수
const generateCalendar = () => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1);
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0);

  startDayOfWeek.value = firstDay.getDay();
  daysInMonth.value = Array.from(
    { length: lastDay.getDate() },
    (_, i) => i + 1,
  );
};

// 오늘 날짜인지 확인하는 함수
const isToday = (day: number): boolean => {
  const today = new Date();
  return (
    currentYear.value === today.getFullYear() &&
    currentMonth.value === today.getMonth() &&
    day === today.getDate()
  );
};

// 다음 달로 이동
const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
  generateCalendar();
};

// 이전 달로 이동
const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
  generateCalendar();
};

// 캘린더 초기화
onMounted(() => {
  generateCalendar();
});
</script>

<style scoped></style>
