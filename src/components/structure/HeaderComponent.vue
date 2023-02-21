<script>
export default {
  name: 'HeaderComponent'
}
</script>

<template>
  <header>
    <div class="bloc">
    <ul>
      <li><router-link to="/">Home</router-link></li>
    </ul>
  </div>
  </header>
  
</template>

<style>
  .bloc{
    display: block;
  }
</style>