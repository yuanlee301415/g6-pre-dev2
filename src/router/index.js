import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

import tree from './modules/tree'

import manual from './modules/manual/index'
import api from './modules/api/index'

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

    // API
    api,

    // Tree
    tree
]

Vue.use(Router)

export default new Router({
    routes
})
