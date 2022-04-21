// 入门教程
const tutorial = {
    path: '2.tutorial',
    name: '2.Tutorial',
    meta: {title: '2.入门教程'},
    redirect: '/manual/2.tutorial/1.example',
    component: () => import('@/views/manual/2.tutorial'),
    children: [
        {
            path: '1.example',
            name: '1.Example',
            meta: {title: '1.绘制案例'},
            component: () => import('@/views/manual/2.tutorial/1.example')
        },
        {
            path: '2.elements',
            name: '2.Elements',
            meta: {title: '2.元素及其配置'},
            component: () => import('@/views/manual/2.tutorial/2.elements')
        },
        {
            path: '3.1.layout/default',
            name: '3.1.DefaultLayout',
            meta: {title: '3.1.使用图布局-默认布局'},
            component: () => import('@/views/manual/2.tutorial/3.layout/default')
        },
        {
            path: '3.2.layout/force',
            name: '3.2.ForceLayout',
            meta: {title: '3.2.使用图布局-力导向布局'},
            component: () => import('@/views/manual/2.tutorial/3.layout/force')
        },
        {
            path: '4.behavior',
            name: '4.Behavior',
            meta: {title: '4.图的交互'},
            component: () => import('@/views/manual/2.tutorial/4.behavior')
        },
        {
            path: '5.plugins',
            name: '5.Plugins',
            meta: {title: '5.插件与工具'},
            component: () => import('@/views/manual/2.tutorial/5.plugins')
        }
    ]
}

export default tutorial