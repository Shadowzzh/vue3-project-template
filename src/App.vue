<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import router from './router'
import PageTabs from './components/PageTabs/PageTabs.vue'
import { tab } from './stores/tab'
import { computed } from 'vue'

const route = useRoute()

const tabStore = tab()
const keepAliveTab = computed(() => tabStore.tabList.map((tab) => tab.componentName))
</script>

<template>
  <n-config-provider class="app">
    <header>
      <nav>
        <RouterLink v-for="route in router.options.routes" :key="route.name" :to="route.path">
          {{ route.meta?.label }}
        </RouterLink>
      </nav>

      <PageTabs />
    </header>

    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="fade" appear>
          <KeepAlive class="keep-alive-tab" :key="route.path" :include="keepAliveTab">
            <component :is="Component" />
          </KeepAlive>
        </Transition>
      </RouterView>
    </main>
  </n-config-provider>
</template>

<style scoped>
.keep-alive-tab {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

main {
  position: relative;
}
</style>
