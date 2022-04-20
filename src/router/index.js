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
                        name: '1.DefaultNode',
                        meta: { title: '1.节点总览' },
                        component: () => import('@/views/manual/3.middle/1.defaultNode')
                    },
                    {
                        path: '2.defaultEdge',
                        name: '2.DefaultEdge',
                        meta: { title: '2.边总览' },
                        component: () => import('@/views/manual/3.middle/2.defaultEdge')
                    },
                    {
                        path: '3.arrow',
                        name: '3.Arrow',
                        meta: { title: '3.箭头' },
                        component: () => import('@/views/manual/3.middle/3.arrow')
                    },
                    {
                        path: '4.updateElement',
                        name: '4.UpdateElement',
                        meta: { title: '4.更新节点或边的样式' },
                        component: () => import('@/views/manual/3.middle/4.updateElement')
                    },
                    {
                        path: '5.visible',
                        name: '5.Visible',
                        meta: { title: '5.显示与隐藏' },
                        component: () => import('@/views/manual/3.middle/5.visible')
                    },
                    {
                        path: '6.1.multi-line',
                        name: '6.1.MultiLine',
                        meta: { title: '6.1.多条边-贝塞尔曲线' },
                        component: () => import('@/views/manual/3.middle/6.1.multi-line')
                    },
                    {
                        path: '6.2.multi-line',
                        name: '6.2.MultiLine',
                        meta: { title: '6.2.多条边-processParallelEdges' },
                        component: () => import('@/views/manual/3.middle/6.2.multi-line')
                    },
                    {
                        path: '7.layout',
                        name: '7.Layout',
                        meta: { title: '7.图布局' },
                        component: () => import('@/views/manual/3.middle/7.layout'),
                        redirect: '/3.middle/7.layout/7.1.graph-layout/random',
                        children: [
                            {
                                path: '7.1.graph-layout/random',
                                name: '7.1-1.Random',
                                meta: { title: '7.1-1.随机布局' },
                                component: () => import('@/views/manual/3.middle/7.layout/7.1.graph-layout/1.random'),
                            },
                            {
                                path: '7.1.graph-layout/gForce',
                                name: '7.1-2.GForce',
                                meta: { title: '7.1-2.V4.0的经典力导向布局' },
                                component: () => import('@/views/manual/3.middle/7.layout/7.1.graph-layout/2.gForce'),
                            },
                            {
                                path: '7.1.graph-layout/force',
                                name: '7.1-3.Force',
                                meta: { title: '7.1-3.经典力导向布局' },
                                component: () => import('@/views/manual/3.middle/7.layout/7.1.graph-layout/3.force'),
                            },
                            {
                                path: '7.1.graph-layout/fruchterman',
                                name: '7.1-4.Fruchterman',
                                meta: { title: '7.1-4.力导向的一种布局' },
                                component: () => import('@/views/manual/3.middle/7.layout/7.1.graph-layout/4.fruchterman'),
                            },
                            {
                                path: '7.1.graph-layout/circular',
                                name: '7.1-5.Circular',
                                meta: { title: '7.1-5.环形布局' },
                                component: () => import('@/views/manual/3.middle/7.layout/7.1.graph-layout/5.circular'),
                            },
                            {
                                path: '7.1.graph-layout/radial',
                                name: '7.1-6.Radial',
                                meta: { title: '7.1-6.辐射状布局' },
                                component: () => import('@/views/manual/3.middle/7.layout/7.1.graph-layout/6.radial'),
                            },
                            {
                                path: '7.1.graph-layout/MDS',
                                name: '7.1-7.MDS',
                                meta: { title: '7.1-7.高维数据降维算法布局' },
                                component: () => import('@/views/manual/3.middle/7.layout/7.1.graph-layout/7.mds'),
                            },
                            {
                                path: '7.1.graph-layout/concentric',
                                name: '7.1-8.Concentric',
                                meta: { title: '7.1-8.同心圆布局' },
                                component: () => import('@/views/manual/3.middle/7.layout/7.1.graph-layout/8.concentric'),
                            },
                            {
                                path: '7.1.graph-layout/grid',
                                name: '7.1-9.Grid',
                                meta: { title: '7.1-9.网络布局' },
                                component: () => import('@/views/manual/3.middle/7.layout/7.1.graph-layout/9.grid'),
                            },
                            {
                                path: '7.1.graph-layout/comboForce',
                                name: '7.1-10.ComboForce',
                                meta: { title: '7.1-10.Combo的图的布局' },
                                component: () => import('@/views/manual/3.middle/7.layout/7.1.graph-layout/10.comboForce'),
                            },
                            {
                                path: '7.2.layout-mechanism',
                                name: '7.2.LayoutMechanism',
                                meta: { title: '7.2.布局的切换机制' },
                                component: () => import('@/views/manual/3.middle/7.layout/7.2.layout-mechanism'),
                            }
                        ]
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
