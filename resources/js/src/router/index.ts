import { 
    createWebHistory, 
    createRouter,
    RouteRecordRaw
  } from "vue-router";
import HomeComponent from '../pages/Home.vue';
import SearchComponent from '../pages/Search.vue';

const routes: RouteRecordRaw[] = [
    {
        path: "/home",
        name: 'home',
        component: HomeComponent,
    },
    {
        path: "/search",
        name: 'search',
        component: SearchComponent,
    }
];
  
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;