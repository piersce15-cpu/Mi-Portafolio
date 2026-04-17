<template>
  <section class="projects-section">
    <h1 class="title">Productos Digitales<span>.</span></h1>
    <p class="subtitle">Una selección de mis trabajos más recientes en desarrollo y datos que puedes visualizar en GitHub.</p>

    <div class="projects-grid">
      <div class="project-card featured">
        <div class="card-content">
          <span class="category">Fintech</span>
          <h3>Alke Wallet</h3>
          <p>Aplicación de billetera virtual con gestión de transacciones y persistencia de datos. Enfocado en la experiencia de usuario financiera.</p>
          <div class="tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
          <a href="https://piersce15-cpu.github.io/Alke-Wallet/" target="_blank" class="project-link">Explorar Código →</a>
        </div>
      </div>

      <div class="project-card">
        <div class="card-content">
          <span class="category">Editorial: Catalogo de Libros</span>
          <h3>Editorial Nova</h3>
          <p>Gestionar un catálogo de libros de manera interactiva. La aplicación permite al usuario visualizar, agregar, editar, eliminar y consultar el detalle de libros.</p>
          <div class="tags">
            <span>Vue</span>
            <span>HTML</span>
          </div>
          <a href="https://piersce15-cpu.github.io/Editorial---Catalogo-de-libros/" target="_blank" class="project-link">Explorar Código →</a>
        </div>
      </div>

      <div class="project-card">
        <div class="card-content">
          <span class="category">E-commerce</span>
          <h3>TechPiersce</h3>
          <p>Catálogo de productos dinámico desarrollado en Vue 3 con gestión de estado mediante Pinia.</p>
          <div class="tags">
            <span>Vue 3</span>
            <span>Pinia</span>
            <span>Vite</span>
            <span>Vuetify</span>
          </div>
          <a href="https://piersce15-cpu.github.io/TechPiersce-Vue/" target="_blank" class="project-link">Explorar Código →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding-bottom: 50px;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.title span {
  color: #42b883;
}

.subtitle {
  color: #94a3b8;
  margin-bottom: 40px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.project-card {
  background: #1a1d29;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
  overflow: hidden;
  position: relative;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: #42b883;
  box-shadow: 0 10px 30px rgba(66, 184, 131, 0.1);
}

.card-content {
  padding: 30px;
}

.category {
  color: #42b883;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

h3 {
  font-size: 1.5rem;
  margin: 10px 0;
}

p {
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 20px;
 }

.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.tags span {
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  color: #cbd5e1;
}

.project-link {
  color: #42b883;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}
</style>
