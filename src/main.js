import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { firebaseApp } from '/src/firebase.js'
import { VueFire, VueFireAuth } from 'vuefire'

import contenido from './components/contenido.vue'
import mujer from './components/mujer.vue'
import hombre from './components/hombre.vue'
import joyeria from './components/joyeria.vue'
import productos from './components/productos.vue'
import login from './components/login.vue'
import registro from './components/registro.vue'
import carrito from './components/carrito.vue'
import administrar from './components/administrar.vue'
import productoUnico from './components/productoUnico.vue'

import App from './App.vue'

import './assets/style.css'

const routes = [
    {
        path: '/',
        component: contenido
    },
    {
        path: '/mujer',
        component: mujer
    },
    {
        path: '/hombre',
        component: hombre
    },
    {
        path: '/joyeria',
        component: joyeria
    },
    {
        path: '/productos',
        component: productos
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/registro',
        component: registro
    },
    {
        path: '/carrito',
        component: carrito
    },
    {
        path: '/administrar',
        component: administrar
    },
    {
        path: '/producto/:id?',
        component: productoUnico
    },
]


const app = createApp(App)
app
    .use(VueFire, {
        firebaseApp,
        modules: [
            VueFireAuth(),
        ],
    })

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app')
export default router