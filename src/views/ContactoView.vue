<template>
  <section class="contacto">
    <div class="contact-header">
      <h1>¿Hablamos?<span>.</span></h1>
      <p>Actualmente busco oportunidades donde pueda combinar mi experiencia comercial con el desarrollo frontend.</p>
    </div>

    <div class="contact-grid">
      <a href="mailto:pieracifuentesespejo@gmail.com" class="contact-item">
        <span class="icon">📧</span>
        <div class="info">
          <label>Email</label>
          <p>pieracifuentesespejo@gmail.com</p>
        </div>
      </a>

      <a href="https://linkedin.com/in/piera-cifuentes-espejo-90b349169/" target="_blank" class="contact-item">
        <span class="icon">🔗</span>
        <div class="info">
          <label>LinkedIn</label>
          <p>Piera Cifuentes Espejo</p>
        </div>
      </a>
    </div>

    <div class="cv-section">
      <a href="https://drive.google.com/file/d/1HcAK0-pinrIvz9Aa8rwUsi44n-yiSWEK/view?usp=sharing" target="_blank" class="download-btn">
        Ver mi Curriculum Vitae (PDF)
      </a>
    </div>
  </section>
</template>

<style scoped>
.contacto { 
  text-align: center; 
  max-width: 600px; 
  margin: 0 auto; 
}

h1 span { 
  color: #42b883; 
}

.contact-header p { 
  color: #94a3b8; 
  margin: 20px 0 40px; 
}

.contact-grid { 
  display: grid; 
  gap: 20px; 
  margin-bottom: 50px; 
}

.contact-item {
  display: flex;
  align-items: center;
  background: #1a1d29;
  padding: 20px;
  border-radius: 15px;
  text-decoration: none;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: 0.3s;
}

.contact-item:hover { 
  border-color: #42b883; 
  background: #212533; 
}
.icon { 
  font-size: 1.5rem; 
  margin-right: 20px; 
}
.info { 
  text-align: left; 
}
.info label { 
  display: block; 
  font-size: 0.75rem; 
  color: #42b883; 
  font-weight: 700; 
  text-transform: uppercase; }

.download-btn {
  display: inline-block; 
  background: #42b883;
  color: #0f111a;
  text-decoration: none; 
  padding: 15px 40px;
  border-radius: 12px;
  font-weight: 800;
  cursor: pointer;
  transition: 0.3s;
  border: none;
}

.download-btn:hover { 
  transform: scale(1.05); 
  background: #3aa876; 
  }
</style>