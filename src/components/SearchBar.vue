<script setup>
import { ref, defineEmits, watchEffect } from 'vue'
const emit = defineEmits(['submitQuery'])
const searchQuery = ref("")
var singleTimeout = null

watchEffect(() => {
    // Vue is very annoying, watchers won't work directly with setTimeout (something to do with scope)
    // have to resort to this anonymous lambda workaround where I pass in searchQuery.value
    // so Vue knows to watch the value searchQuery
    ((query) => {
        if (singleTimeout !== null) {
            // if there's already a timer set (rebounce set in motion already)
            // reset the timer
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