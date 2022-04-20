import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

import manual from './modules/manual'
import tree from './modules/tree'

export const routes = [
    // Home
    {
        path: '/',
        component: Layout,
        redirect: '/',
        children: [
            {
                path: '',
                name: 'Home',
                meta: {
                    title: 'Home'
                },
                component: () => import('@/views/home')
            }
        ]
    },

    // 教程
    manual,

    // Tree
    tree
]

Vue.use(Router)

export default new Router({
    routes
})
