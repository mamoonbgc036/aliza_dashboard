import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router/index.js';
import './assets/vendors/core/core.css'
import './assets/vendors/flatpickr/flatpickr.min.css'
import './assets/fonts/feather-font/css/iconfont.css'
import './assets/vendors/flag-icon-css/css/flag-icon.min.css'
import './assets/css/demo2/style.css'
import './assets/vendors/core/core.js'
import './assets/vendors/feather-icons/feather.min.js'
import './assets/js/template.js'

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('authToken') // Check if token exists
    
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/auth/login') // Redirect to login if authentication is required but user is not logged in
    } else {
      next() // Continue to the requested route
    }
})

const app = createApp(App)

app.use(router)

app.mount('#app')




