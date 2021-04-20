import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Editor from '../views/Editor.vue';
import TemplateDetail from '../views/TemplateDetail.vue';

const router = createRouter({
    // history: createWebHistory(), 这句话的背后原理还不懂
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/editor', name: 'editor', component: Editor },
        { path: '/template/:id', name: 'templateDetail', component: TemplateDetail },
    ]
});

export default router;