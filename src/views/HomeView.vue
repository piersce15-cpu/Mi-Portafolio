<template>
  <section class="hero-clean">
    <header class="header animate-fade-in">
      <span class="status-badge">Disponible para nuevos desafíos</span>

      <h1>Piera Cifuentes Espejo</h1>

      <h2>
        Ingeniera Comercial 
        <span>& Frontend Developer</span>
      </h2>

      <div class="cta">
        <router-link to="/proyectos" class="btn primary">Ver proyectos</router-link>
        <a href="https://github.com/piersce15-cpu" target="_blank" class="btn secondary">
          GitHub
        </a>
      </div>
    </header>

    <article class="bio-full animate-fade-in-delay">
      <p class="highlight">
        Ingeniera Comercial con sólida trayectoria en 
        <strong>análisis de datos, optimización de procesos y Business Intelligence</strong>, 
        ahora fusionando la visión de negocios con el desarrollo de productos digitales de alto impacto.
      </p>
      
      <p>
        He integrado mi perfil analítico con el desarrollo web moderno, liderando la creación de soluciones como 
        <strong>TechPiersce</strong>: un e-commerce robusto en <strong>Vue 3</strong> con gestión de estado mediante 
        <strong>Pinia</strong>, diseñado para maximizar la conversión y la eficiencia operativa.
      </p>
    </article>

    <footer class="skills-footer animate-fade-in-delay-2">
      <h3>Stack Tecnológico</h3>
      <div class="skills-wrapper">
        <span 
          v-for="skill in skills" 
          :key="skill" 
          class="pill"
        >
          {{ skill }}
        </span>
      </div>
    </footer>
  </section>
</template>

<script setup>
const skills = [
  'Vue.js', 'JavaScript ES6', 'Pinia', 'Vite', 
  'HTML5', 'CSS3', 'SASS', 'Git & GitHub', 
  'API REST', 'SQL', 'Power BI', 'Python', 'Bootstrap', 'Vuetify'
]
</script>

<style scoped>
.hero-clean {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px; 
}

/* HEADER */
.header { margin-bottom: 60px; }

.status-badge {
  color: #42b883;
  background: rgba(66, 184, 131, 0.1);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

h1 {
  font-size: clamp(2.5rem, 8vw, 3.5rem); /* Tamaño fluido */
  margin: 20px 0 10px;
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1;
}

h2 {
  font-size: 1.5rem;
  color: #94a3b8;
  font-weight: 400;
}

h2 span { color: #fff; border-bottom: 2px solid #42b883; }

/* BOTONES */
.cta { margin-top: 35px; display: flex; gap: 15px; }

.btn {
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn.primary { background: #42b883; color: #000; }
.btn.primary:hover { transform: scale(1.05); background: #369870; }

.btn.secondary { border: 1px solid rgba(255, 255, 255, 0.1); color: #fff; }
.btn.secondary:hover { background: rgba(255, 255, 255, 0.05); border-color: #42b883; }

/* BIO */
.bio-full p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #94a3b8;
  margin-bottom: 30px;
}

.bio-full .highlight {
  font-size: 1.3rem;
  color: #ffffff;
  font-weight: 400;
}

strong { color: #42b883; font-weight: 600; }

/* SKILLS */
.skills-footer h3 {
  font-size: 0.8rem;
  color: #42b883;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 25px;
}

.skills-wrapper { display: flex; flex-wrap: wrap; gap: 12px; }

.pill {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 0.85rem;
  color: #cbd5e1;
  transition: 0.3s;
}

.pill:hover {
  border-color: #42b883;
  color: #fff;
  background: rgba(66, 184, 131, 0.1);
  transform: translateY(-3px);
}
</style>