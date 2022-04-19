import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

const routes = [
    // Home
    {
        path: '/',
        name: 'Home',
        component: Layout,
        redirect: '/',
        children: [
            {
                path: '',
                meta: {
                    title: 'Home'
                },
                component: () => import('@/views/home')
            }
        ]
    },

    // 快速上手
    {
        path: '/1.getting-started',
        name: '1.快速上手',
        redirect: '/1.getting-started',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/1.getting-started')
            }
        ]
    },

    // 入门教程
    {
        path: '/2.tutorial',
        name: '2.入门教程',
        redirect: '/2.tutorial/1.example',
        component: Layout,
        children: [
            {
                path: '1.example',
                name: '1.绘制案例',
                component: () => import('@/views/2.tutorial/1.example')
            },
            {
                path: '2.elements',
                name: '2.元素及其配置',
                component: () => import('@/views/2.tutorial/2.elements')
            },
            {
                path: '3.1.layout/default',
                name: '3.1.使用图布局-默认布局',
                component: () => import('@/views/2.tutorial/3.layout/default')
            },
            {
                path: '3.2.layout/force',
                name: '3.1.使用图布局-力导向布局',
                component: () => import('@/views/2.tutorial/3.layout/force')
            },
            {
                path: '4.behavior',
                name: '4.图的交互',
                component: () => import('@/views/2.tutorial/4.behavior')
            },
            {
                path: '5.plugins',
                name: '5.插件与工具',
                component: () => import('@/views/2.tutorial/5.plugins')
            }
        ]
    },

    // 核心概念
    {
        path: '/3.middle',
        name: '3.核心概念',
        redirect: '/3.middle/1.defaultNode',
        component: Layout,
        children: [
            {
                path: '1.defaultNode',
                name: '1.节点总览',
                component: () => import('@/views/3.middle/1.defaultNode')
            },
            {
                path: '2.defaultEdge',
                name: '2.边总览',
                component: () => import('@/views/3.middle/2.defaultEdge')
            }
        ]
    },

    // Tree
    {
        path: '/tree',
        name: 'Tree',
        component: Layout,
        redirect: '/tree/my-tree',
        children: [
            {
                path: 'my-tree',
                name: 'MyTree',
                meta: {
                    title: 'MyTree'
                },
                component: () => import('@/views/tree/my-tree')
            },
            {
                path: 'vue-js-tree',
                name: 'VueJsTree',
                meta: {
                    title: 'VueJsTree'
                },
                component: () => import('@/views/tree/js-tree')
            }
        ]
    }
]

export {routes}
export default new Router({
    routes
})
