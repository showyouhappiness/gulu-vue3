import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: () => import('./components/test.vue'),
        },
        {
            path: '/test2',
            component: () => import('./components/test2.vue'),
        },
    ],
})

createApp(App).use(router).mount('#app')
