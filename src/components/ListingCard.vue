<script setup>
import { defineProps } from "vue"
defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="listing-card">
        <h3>{{ data.name }}</h3>
        <p><b>Category:</b> {{ data.category }}</p>
        <p><i>{{ data.description }}</i></p>
    </div>    
</template>