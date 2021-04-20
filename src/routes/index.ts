import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import Editor from './views/Editor.vue';
import TemplateDetail from './views/TemplateDetail.vue';

const router = createRouter({
    // history: createWebHashHistory(), 这句话的背后原理还不懂
    history: createWebHashHistory(),
    routes: [
        {path:'/',name:'home',component:Home},
        {path:'/editor',name:'editor',component:Editor},
        {path:'/template/:id',name:'templateDetail',component:TemplateDetail},
    ]
})

export default router