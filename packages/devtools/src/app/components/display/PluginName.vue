<script setup lang="ts">
import { h } from 'vue'
import { getPluginColor } from '~/utils/color'

const props = defineProps<{
  name: string
  compact?: boolean
  colored?: boolean
  hide?: boolean
}>()

const startsGeneric = [
  '__load__',
  'vite-plugin-',
  'vite-',
  'rollup-plugin-',
  'rollup-',
  'unplugin-',
]

const startCompact = [
  ...startsGeneric,
  'vite:',
]

function render() {
  const starts = props.compact ? startCompact : startsGeneric

  for (const s of starts) {
    if (props.name.startsWith(s)) {
      if (props.compact)
        return h('span', props.name.slice(s.length))
      return h('span', [
        h('span', { class: 'op50' }, s),
        h('span', props.name.slice(s.length)),
      ])
    }
  }

  const parts = props.name.split(':')
  if (parts.length > 1) {
    return h('span', [
      h('span', { style: { color: getPluginColor(parts[0]) } }, `${parts[0]}:`),
      h('span', parts.slice(1).join(':')),
    ])
  }
  return h('span', props.name)
}
</script>

<template>
  <component :is="render" />
</template>
