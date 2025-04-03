import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export interface Tab {
  name: string
  componentName: string
  label: string
  path: string
  type: 'success' | 'warning' | 'error' | 'info'
}

export const tab = defineStore('tab', () => {
  const tabs = reactive<Map<string, Tab>>(new Map())

  /** 添加 tab */
  const addTab = (tab: Tab) => {
    if (tabs.has(tab.name)) return
    tabs.set(tab.name, tab)
  }

  /** 移除 tab */
  const removeTab = (tab: Tab) => {
    tabs.delete(tab.name)
  }

  const tabList = computed(() => Array.from(tabs.values()))

  return { tabs, addTab, removeTab, tabList }
})
