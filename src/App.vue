<script setup>
import { ref } from 'vue'
import { search } from '@/components/Search'
import ListingCard from '@/components/ListingCard'
import SearchBar from '@/components/SearchBar.vue'

const searchResults = ref()

function displayResults(query) {
  searchResults.value = search(query)
}
</script>

<template>
  <SearchBar @submitQuery="displayResults"/> 
  <ListingCard :key="listing.id" v-for="listing in searchResults" :data="listing" />
</template>