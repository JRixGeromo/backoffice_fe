import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Overview from '@/pages/Overview.vue'
import Orders from '@/pages/Orders.vue'
import Products from '@/pages/Products.vue'
import Categories from '@/pages/Categories.vue'
import Customers from '@/pages/Customers.vue'
import CustomerDetails from '@/pages/CustomerDetails.vue'
import Revenue from '@/pages/Revenue.vue'

//import Home from '@/pages/Home.vue';
import Register from '@/pages/Register.vue'
import Wrapper from '@/pages/Wrapper.vue'
import Login from '@/pages/Login.vue'
import Logout from '@/pages/Logout.vue'
import Users from '@/pages/users/Users.vue'
import UserCreate from '@/pages/users/UserCreate.vue'
import UserEdit from '@/pages/users/UserEdit.vue'
import Roles from '@/pages/roles/Roles.vue'
import RoleCreate from '@/pages/roles/RoleCreate.vue'
import RoleEdit from '@/pages/roles/RoleEdit.vue'
import Profile from '@/pages/Profile.vue'
import OrderDetails from '@/pages/OrderDetails.vue'
import ChartTest from '@/pages/ChartTest.vue'

// import Test from '@/pages/Test.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  {
    path: '',
    component: Wrapper,
    children: [
      { path: '', component: Overview },
      { path: '/orders', component: Orders },
      { path: '/products', component: Products },
      { path: '/categories', component: Categories },
      { path: '/customers', component: Customers },
      { path: '/revenue', component: Revenue },
      { path: '/orderdetails/:orderNumber', component: OrderDetails, props:true },
      { path: '/customerdetails/:customerId', component: CustomerDetails, props:true },
      

      { path: '/profile', component: Profile },
      { path: '/logout', component: Logout },
      { path: '/users', component: Users },
      { path: '/users/create', component: UserCreate },
      { path: '/users/:id/edit', component: UserEdit },
      { path: '/roles', component: Roles },
      { path: '/roles/create', component: RoleCreate },
      { path: '/roles/:id/edit', component: RoleEdit },
      { path: '/chart-test', component: ChartTest },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
