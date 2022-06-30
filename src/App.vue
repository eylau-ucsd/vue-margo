<script setup>
import ListingCard from '@/components/ListingCard'
import { ref, computed } from 'vue'
import { search } from '@/components/Search'

const searchQuery = ref("")

const searchResults = computed(() => search(searchQuery.value))
</script>

<template>
    <input id="search-bar" v-model="searchQuery"> <!-- TODO: Refactor and extract this input element into its own component -->
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