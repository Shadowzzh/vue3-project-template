<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="project">
    <h1>这是项目页面</h1>
    <button @click="count++">点击</button>
    <p>{{ count }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .project {
    display: flex;
    align-items: center;
  }

  .project > * {
    margin-right: 20px;
  }
}
</style>
