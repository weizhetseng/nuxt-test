<script setup lang="ts">
const vFocus = {
  mounted(el: HTMLElement) {
    el.focus()
  },
}
</script>

<template>
  
  <input type="text" v-focus />
  
  <p v-copy>請透過點擊複製這一段文字</p>
</template>
