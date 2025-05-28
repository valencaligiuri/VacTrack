import {createWebHistory, createRouter} from 'vue-router'
import homeView from '../views/homeView.vue'
import calendarView from "../views/calendarView.vue";
import settingsView from "../views/settingsView.vue";

const routes = [
    {
        path: '/',
        component: homeView
    },
  {
    path: '/calendar',
    component: calendarView
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