<template>
  <div id="app-wrapper">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');

:root {
  --bg-dark: #0f111a;
  --card-bg: #1a1d29;
  --vue-green: #42b883;
  --text-primary: #ffffff;
  --text-secondary: #94a3b8;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 1.6;
}

.main-content {
  padding-top: 100px; 
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>