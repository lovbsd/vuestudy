<template>
  <div id="app" class="container">
    <router-link to="/homes">home</router-link>
    <router-link to="/about">about</router-link>
    <h1 class="text-center">Todo app</h1>
    <input type="text" class="w-100 p-2" placeholder="Type todo">
      <div class="div">
      <input type="checkbox">
      <span class="text-muted">buy zza car</span>
  </div>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'App',

 
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
