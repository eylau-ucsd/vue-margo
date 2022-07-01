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

<style>
.listing-card {
  border-color: black;
  border-style: solid;
  border-width: 3px;
  padding: 5px;
  margin-top: 8px;
  margin-bottom: 8px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

#search-bar {
    display: block;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}
</style>