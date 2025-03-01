<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const taskComponent = ref(null);

watchEffect(async () => {
  try {
    taskComponent.value = (await import(`../views/Task${route.params.id}.vue`)).default;
  } catch (e) {
    taskComponent.value = null; // Если файла нет, показываем заглушку
  }
});
</script>

<template>
  <component :is="taskComponent || 'div'">Задача не найдена</component>
</template>
