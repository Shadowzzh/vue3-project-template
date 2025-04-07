<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { NTag, NSpace } from 'naive-ui'
import { computed, watch } from 'vue'
import { tab, type Tab } from '@/stores/tab'

const route = useRoute()
const router = useRouter()

const tabStore = tab()

const currentTab = computed(() => ({
  name: route.name as string,
  label: route.meta?.label as string,
  path: route.path,
  type: route.meta?.type as 'success' | 'warning' | 'error' | 'info',
  componentName: route.meta?.name as string,
}))

// 监听标签列表变化，保存到本地存储
watch(route, () => {
  tabStore.addTab(currentTab.value)
})

/** 关闭 tab */
const onClose = (tab: Tab) => {
  tabStore.removeTab(tab)

  // 如果关闭的是当前标签，则跳转到剩余标签中的第一个
  if (tab.path === route.path && tabStore.tabList.length > 0) {
    router.push(tabStore.tabList[tabStore.tabList.length - 1].path)
  }
  // 如果没有标签了，跳转到首页
  else if (tabStore.tabList.length === 0) {
    router.push('/')
  }
}

/** 点击标签切换路由 */
const onClickTab = (tab: Tab) => {
  router.push(tab.path)
}

const getTabType = (path: string) => {
  if (path === currentTab.value.path) {
    return 'success'
  } else {
    return 'default'
  }
}
</script>

<template>
  <n-space>
    <n-tag
      v-for="tab in tabStore.tabList"
      :bordered="route.path !== tab.path"
      :key="tab.name"
      :type="getTabType(tab.path)"
      closable
      @close.stop="onClose(tab)"
      @click="onClickTab(tab)"
      style="cursor: pointer"
    >
      {{ tab.label }}
    </n-tag>
  </n-space>
</template>

<style scoped></style>
