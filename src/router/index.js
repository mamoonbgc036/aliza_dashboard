import Login from '../views/auth/Login.vue'
import Registration from '../views/auth/Registration.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'

const routes = [
    {
        path: '/user/dashboard',
        component: Dashboard,
        name: 'Dashboard',
        meta: { requiresAuth: true }
    },
    {
        path: '/auth/register',
        component: Registration,
        name: 'Registration'
    },
    {
        path: '/',
        component: Login,
        name: 'Login'
    },
]


export default routes
