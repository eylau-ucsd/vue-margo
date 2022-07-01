<script setup>
import { ref, defineEmits, watchEffect } from 'vue'
const emit = defineEmits(['submitQuery'])
const searchQuery = ref("")
var singleTimeout = null

watchEffect(() => {
    // Vue is very annoying, watchers won't work directly with setTimeout
    // have to resort to this anonymous lambda workaround
    ((query) => {
        if (singleTimeout !== null) {
            clearTimeout(singleTimeout)
        }
        singleTimeout = setTimeout(() => {
            emit('submitQuery', query)
        }, 300) // 300ms debounce
    }) (searchQuery.value)
})
</script>

<template>
    <input id="search-bar" v-model="searchQuery">
</template>