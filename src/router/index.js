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
        path: '/getting-started',
        name: 'GettingStarted',
        redirect: '/getting-started',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/getting-started')
            }
        ]
    },

    // Tutorial
    {
        path: '/tutorial',
        name: 'Tutorial',
        redirect: '/tutorial/elements',
        component: Layout,
        children: [
            {
                path: 'elements',
                name: 'Elements',
                component: () => import('@/views/tutorial/elements')
            },
            {
                path: 'layout/default',
                name: 'LayoutDefault',
                component: () => import('@/views/tutorial/layout/default')
            },
            {
                path: 'layout/force',
                name: 'LayoutForce',
                component: () => import('@/views/tutorial/layout/force')
            },
            {
                path: 'behavior',
                name: 'Behavior',
                component: () => import('@/views/tutorial/behavior')
            },
            {
                path: 'plugins',
                name: 'Plugins',
                component: () => import('@/views/tutorial/plugins')
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
