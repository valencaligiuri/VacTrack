import {createWebHistory, createRouter} from 'vue-router'
import homeView from '../views/homeView.vue'
import appendView from "../views/appendView.vue";
import settingsView from "../views/settingsView.vue";

const routes = [
    {
        path: '/',
        component: homeView
    },
  {
    path: '/append',
    component: appendView
  },
    {
        path: '/settings',
        component: settingsView
    }
]


const router= createRouter({
  history: createWebHistory(),
  routes,
})
export default router;