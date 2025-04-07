<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import router from './router'
import PageTabs from './components/PageTabs/PageTabs.vue'
import { tab } from './stores/tab'
import { computed } from 'vue'
import './assets/base.css'

const route = useRoute()

const tabStore = tab()
const keepAliveTab = computed(() => tabStore.tabList.map((tab) => tab.componentName))
</script>

<template>
  <n-config-provider class="app">
    <header>
      <nav>
        <RouterLink
          class="nav-item"
          :style="{
            color: route.path === item.path ? '#333' : '#999',
            fontWeight: route.path === item.path ? '600' : '400',
            textDecoration: route.path === item.path ? 'underline' : 'none',
          }"
          v-for="item in router.options.routes"
          :key="item.name"
          :to="item.path"
        >
          {{ item.meta?.label }}
        </RouterLink>
      </nav>

      <PageTabs />
    </header>

    <main class="main">
      <div class="main-content">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" appear>
            <KeepAlive class="keep-alive-tab" :key="route.path" :include="keepAliveTab">
              <component :is="Component" />
            </KeepAlive>
          </Transition>
        </RouterView>
      </div>
    </main>
  </n-config-provider>
</template>

<style scoped>
.keep-alive-tab {
  position: absolute;
  top: 0;
  left: 0;
}

.app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

header {
  max-width: 500px;
  padding: 20px;
  width: 100%;
}

header nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin-bottom: 24px;
}

.nav-item {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  padding-right: 12px;
}

main {
  padding: 0 20px;
  max-width: 500px;
  width: 100%;
}

main .main-content {
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
}
</style>
