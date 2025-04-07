<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="about">
    <h1>这是关于页面</h1>
    <button @click="count++">点击</button>
    <p>{{ count }}</p>
  </div>
</template>

<style>
.about {
}

.about > * {
  margin-right: 20px;
}
</style>
