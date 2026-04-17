import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProyectosView from '../views/ProyectosView.vue'
import ContactoView from '../views/ContactoView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/proyectos', component: ProyectosView },
    { path: '/contacto', component: ContactoView }
  ]
})

export default router