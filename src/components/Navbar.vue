<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">Piera<span>.</span></div>
      <div class="links">
        <router-link to="/">Inicio</router-link>
        <router-link to="/proyectos">Proyectos</router-link>
        <router-link to="/contacto">Contacto</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: rgba(15, 17, 26, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  z-index: 1000;
}

.nav-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.logo { 
  font-weight: 800; 
  font-size: 1.5rem; 
}
.logo span { 
  color: var(--vue-green); 
}

.links { 
  display: flex; 
  gap: 30px; 
}

.links a {
  text-decoration: none;
  color: #94a3b8;
  font-weight: 600;
  transition: 0.3s;
}

.links a:hover, .links a.router-link-active {
  color: var(--vue-green);
}
</style>