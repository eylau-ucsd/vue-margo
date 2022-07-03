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
    <el-card :header="data.name" style="margin-top: 16px; margin-bottom: 16px; max-width: 500px; ">
        <p><b>Category:</b> {{ data.category }}</p>
        <p><i>{{ data.description }}</i></p>
    </el-card>    
</template>