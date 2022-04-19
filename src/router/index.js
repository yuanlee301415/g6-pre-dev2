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

    // GettingStarted
    {
        path: '/1.getting-started',
        name: '1.GettingStarted',
        redirect: '/1.getting-started',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/1.getting-started')
            }
        ]
    },

    // Tutorial
    {
        path: '/2.tutorial',
        name: '2.Tutorial',
        redirect: '/2.tutorial/1.example',
        component: Layout,
        children: [
            {
                path: '1.example',
                name: '1.Example',
                component: () => import('@/views/2.tutorial/1.example')
            },
            {
                path: '2.elements',
                name: '2.Elements',
                component: () => import('@/views/2.tutorial/2.elements')
            },
            {
                path: '3.1.layout/default',
                name: '3.1.LayoutDefault',
                component: () => import('@/views/2.tutorial/3.layout/default')
            },
            {
                path: '3.2.layout/force',
                name: '3.2.LayoutForce',
                component: () => import('@/views/2.tutorial/3.layout/force')
            },
            {
                path: '4.behavior',
                name: '4.Behavior',
                component: () => import('@/views/2.tutorial/4.behavior')
            },
            {
                path: '5.plugins',
                name: '5.Plugins',
                component: () => import('@/views/2.tutorial/5.plugins')
            }
        ]
    },

    // Middle
    {
        path: '/3.middle',
        name: '3.Middle',
        redirect: '/3.middle/1.defaultNode',
        component: Layout,
        children: [
            {
                path: '1.defaultNode',
                name: '1.DefaultNode',
                component: () => import('@/views/3.middle/1.defaultNode')
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
