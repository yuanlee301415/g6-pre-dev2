import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

const routes = [
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
    {
        path: '/manual',
        name: 'Manual',
        meta: { title: '教程' },
        component: Layout,
        redirect: '/manual/1.getting-started',
        children: [
            // 快速上手
            {
                path: '/1.getting-started',
                redirect: '/1.getting-started',
                component: () => import('@/views/manual'),
                children: [
                    {
                        path: '',
                        name: 'GettingStarted',
                        meta: { title: '1.快速上手' },
                        component: () => import('@/views/manual/1.getting-started')
                    }
                ]
            },

            // 入门教程
            {
                path: '/2.tutorial',
                name: '2.Tutorial',
                meta: { title: '2.入门教程' },
                redirect: '/2.tutorial/1.example',
                component: () => import('@/views/manual/2.tutorial'),
                children: [
                    {
                        path: '1.example',
                        name: '1.Example',
                        meta: { title: '1.绘制案例' },
                        component: () => import('@/views/manual/2.tutorial/1.example')
                    },
                    {
                        path: '2.elements',
                        name: '2.Elements',
                        meta: { title: '2.元素及其配置' },
                        component: () => import('@/views/manual/2.tutorial/2.elements')
                    },
                    {
                        path: '3.1.layout/default',
                        name: '3.1.DefaultLayout',
                        meta: { title: '3.1.使用图布局-默认布局' },
                        component: () => import('@/views/manual/2.tutorial/3.layout/default')
                    },
                    {
                        path: '3.2.layout/force',
                        name: '3.2.ForceLayout',
                        meta: { title: '3.2.使用图布局-力导向布局' },
                        component: () => import('@/views/manual/2.tutorial/3.layout/force')
                    },
                    {
                        path: '4.behavior',
                        name: '4.Behavior',
                        meta: { title: '4.图的交互' },
                        component: () => import('@/views/manual/2.tutorial/4.behavior')
                    },
                    {
                        path: '5.plugins',
                        name: '5.Plugins',
                        meta: { title: '5.插件与工具' },
                        component: () => import('@/views/manual/2.tutorial/5.plugins')
                    }
                ]
            },


            // 核心概念
            {
                path: '/3.middle',
                name: '3.Middle',
                meta: { title: '3.核心概念' },
                redirect: '/3.middle/1.defaultNode',
                component: () => import('@/views/manual/3.middle'),
                children: [
                    {
                        path: '1.defaultNode',
                        name: '1.defaultNode',
                        meta: { title: '1.节点总览' },
                        component: () => import('@/views/manual/3.middle/1.defaultNode')
                    },
                    {
                        path: '2.defaultEdge',
                        name: '2.defaultEdge',
                        meta: { title: '2.边总览' },
                        component: () => import('@/views/manual/3.middle/2.defaultEdge')
                    },
                    {
                        path: '3.arrow',
                        name: '3.arrow',
                        meta: { title: '2.箭头' },
                        component: () => import('@/views/manual/3.middle/3.arrow')
                    },
                    {
                        path: '4.updateElement',
                        name: '4.updateElement',
                        meta: { title: '4.更新节点或边的样式' },
                        component: () => import('@/views/manual/3.middle/4.updateElement')
                    }
                ]
            }
        ]
    },

    // Tree
    {
        path: '/tree',
        name: 'Tree',
        meta: { title: 'Tree' },
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
