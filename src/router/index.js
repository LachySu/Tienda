import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductosPage from '@/views/productos/ProductosPage.vue'
import CategoriasPage from '@/views/categorias/CategoriasPage.vue'
import ProductoPorCategoriaPage from '@/views/productos/ProductoPorCategoriaPage.vue'
import ProductosDetailPage from '@/views/productos/ProductosDetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductosPage
  },
  {
    path: '/categorias',
    component: CategoriasPage,
    children: [
      {
        path: ':category',
        name: 'categorias',
        component: ProductoPorCategoriaPage
      },
      {
        path: '/categorias/detalle-producto/:id',
        name: 'detalle-producto',
        component: ProductosDetailPage
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
