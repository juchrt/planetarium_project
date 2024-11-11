<script>
export default {
  name: 'HeaderComponent'
}
</script>

<template>
  <header class="navbar">
    <router-link to="/"><img id="navbar-logo" src="/planetarium-logo.svg"></router-link>
    <ul id="navbar-text">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/your-bodies">Your bodies</router-link></li>
      <li><router-link to="/concept">Concept</router-link></li>
    </ul>
  </header>
  
</template>
