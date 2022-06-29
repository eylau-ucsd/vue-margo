<script setup>
import ListingCard from './components/ListingCard'
import { reactive } from 'vue'

const listings = reactive([
    {
        name: 'Your Lessons Now',
        category: 'Vocal Training',
        description: 'Your Lessons Now (formerly TruVoice Lessons) offers trans voice lessons for those seeking a feminine, masculine, or androgynous voice! '
        + 'Your Lessons Now is a trans-owned business with mostly trans staff members.'
    },
    {
        name: 'Brave Space LLC',
        category: 'Counseling',
        description: 'Information, referrals, and mental health services for transgender children, youth, adults, and their families.'
    }
])
</script>

<template>
    <div :key="listing.id" v-for="listing in listings">
        <ListingCard data="listing" />
    </div>
</template>