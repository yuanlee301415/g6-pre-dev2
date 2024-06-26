import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

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

    {
        path: '/topology',
        component: Layout,
        children: [
            {
                path: '',
                name: 'TopologyView',
                meta: {title: '模型拓扑'},
                component: () => import('@/views/topology')
            }
        ]
    }
]

Vue.use(Router)

export default new Router({
    routes
})
