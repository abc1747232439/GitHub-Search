<template>
  <div id="app">
    <Search></Search>
    <List></List>
  </div>
</template>

<script setup>
import Search from './components/Search.vue'
import List from './components/List.vue'


</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>
