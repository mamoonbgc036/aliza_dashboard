import Login from '../views/auth/Login.vue'
import Registration from '../views/auth/Registration.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import CreateProduct from '../views/dashboard/Products/CreateProduct.vue'
import ProductIndex from '../views/dashboard/Products/ProductIndex.vue'

const routes = [
    {
        path: '/user/product/index',
        component: ProductIndex,
        name: 'ProductIndex',
        meta: { requiresAuth: true }
    },
    {
        path: '/user/product/create',
        component: CreateProduct,
        name: 'CreateProduct',
        meta: { requiresAuth: true }
    },
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
