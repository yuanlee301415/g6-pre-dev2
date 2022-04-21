// 核心概念
const middle = {
    path: '3.middle',
    name: '3.Middle',
    meta: {title: '3.核心概念'},
    redirect: '/manual/3.middle/1.elements/1.defaultNode',
    component: () => import('@/views/manual/3.middle/1.elements'),
    children: [
        {
            path: '1.elements',
            name: '1.Elements',
            meta: {title: '1.图布局'},
            component: () => import('@/views/manual/3.middle/1.elements'),
            redirect: '/manual/3.middle/1.elements/1.defaultNode',
            children: [
                {
                    path: '1.defaultNode',
                    name: '1.DefaultNode',
                    meta: {title: '1.节点总览'},
                    component: () => import('@/views/manual/3.middle/1.elements/1.defaultNode')
                },
                {
                    path: '2.defaultEdge',
                    name: '2.DefaultEdge',
                    meta: {title: '2.边总览'},
                    component: () => import('@/views/manual/3.middle/1.elements/2.defaultEdge')
                },
                {
                    path: '3.arrow',
                    name: '3.Arrow',
                    meta: {title: '3.箭头'},
                    component: () => import('@/views/manual/3.middle/1.elements/3.arrow')
                },
                {
                    path: '4.updateElement',
                    name: '4.UpdateElement',
                    meta: {title: '4.更新节点或边的样式'},
                    component: () => import('@/views/manual/3.middle/1.elements/4.updateElement')
                },
                {
                    path: '5.visible',
                    name: '5.Visible',
                    meta: {title: '5.显示与隐藏'},
                    component: () => import('@/views/manual/3.middle/1.elements/5.visible')
                },
                {
                    path: '6.1.multi-line',
                    name: '6.1.MultiLine',
                    meta: {title: '6.1.多条边-贝塞尔曲线'},
                    component: () => import('@/views/manual/3.middle/1.elements/6.1.multi-line')
                },
                {
                    path: '6.2.multi-line',
                    name: '6.2.MultiLine',
                    meta: {title: '6.2.多条边-processParallelEdges'},
                    component: () => import('@/views/manual/3.middle/1.elements/6.2.multi-line')
                }
            ]
        },
        {
            path: '2.layout',
            name: '2.Layout',
            meta: {title: '2.图布局'},
            component: () => import('@/views/manual/3.middle/2.layout'),
            redirect: '/manual/3.middle/2.layout/2.1.graph-layout/random',
            children: [
                {
                    path: '2.1.graph-layout/random',
                    name: '2.1-1.Random',
                    meta: {title: '2.1-1.随机布局'},
                    component: () => import('@/views/manual/3.middle/2.layout/1.graph-layout/1.random'),
                },
                {
                    path: '2.1.graph-layout/gForce',
                    name: '2.1-2.GForce',
                    meta: {title: '2.1-2.V4.0的经典力导向布局'},
                    component: () => import('@/views/manual/3.middle/2.layout/1.graph-layout/2.gForce'),
                },
                {
                    path: '2.1.graph-layout/force',
                    name: '2.1-3.Force',
                    meta: {title: '2.1-3.经典力导向布局'},
                    component: () => import('@/views/manual/3.middle/2.layout/1.graph-layout/3.force'),
                },
                {
                    path: '2.1.graph-layout/fruchterman',
                    name: '2.1-4.Fruchterman',
                    meta: {title: '2.1-4.力导向的一种布局'},
                    component: () => import('@/views/manual/3.middle/2.layout/1.graph-layout/4.fruchterman'),
                },
                {
                    path: '2.1.graph-layout/circular',
                    name: '2.1-5.Circular',
                    meta: {title: '2.1-5.环形布局'},
                    component: () => import('@/views/manual/3.middle/2.layout/1.graph-layout/5.circular'),
                },
                {
                    path: '2.1.graph-layout/radial',
                    name: '2.1-6.Radial',
                    meta: {title: '2.1-6.辐射状布局'},
                    component: () => import('@/views/manual/3.middle/2.layout/1.graph-layout/6.radial'),
                },
                {
                    path: '2.1.graph-layout/MDS',
                    name: '2.1-7.MDS',
                    meta: {title: '2.1-7.高维数据降维算法布局'},
                    component: () => import('@/views/manual/3.middle/2.layout/1.graph-layout/7.mds'),
                },
                {
                    path: '2.1.graph-layout/concentric',
                    name: '2.1-8.Concentric',
                    meta: {title: '2.1-8.同心圆布局'},
                    component: () => import('@/views/manual/3.middle/2.layout/1.graph-layout/8.concentric'),
                },
                {
                    path: '2.1.graph-layout/grid',
                    name: '2.1-9.Grid',
                    meta: {title: '2.1-9.网格布局'},
                    component: () => import('@/views/manual/3.middle/2.layout/1.graph-layout/9.grid'),
                },
                {
                    path: '2.1.graph-layout/comboForce',
                    name: '2.1-10.ComboForce',
                    meta: {title: '2.1-10.Combo的图的布局'},
                    component: () => import('@/views/manual/3.middle/2.layout/1.graph-layout/10.comboForce'),
                },
                {
                    path: '2.2.layout-mechanism',
                    name: '2.2.LayoutMechanism',
                    meta: {title: '2.2.布局的切换机制'},
                    component: () => import('@/views/manual/3.middle/2.layout/2.layout-mechanism'),
                }
            ]
        },
        {
            path: '3.states',
            name: '3.States',
            meta: {title: '3.交互与事件'},
            component: () => import('@/views/manual/3.middle/3.states'),
            redirect: '/manual/3.middle/3.states/1.default-behavior/1.drag-canvas',
            children: [
                {
                    path: '1.default-behavior',
                    name: '1.DefaultBehavior',
                    meta: {title: '1.内置的 Behavior'},
                    component: () => import('@/views/manual/3.middle/3.states/1.defaultBehavior'),
                    redirect: '/3.middle/3.states/1.default-behavior/1.drag-canvas',
                    children: [
                        {
                            path: '1.drag-canvas',
                            name: '3.1-1.DragCanvas',
                            meta: {title: '1.拖拽画布'},
                            component: () => import('@/views/manual/3.middle/3.states/1.defaultBehavior/1.drag-canvas'),
                        },
                        {
                            path: '2.zoom-canvas',
                            name: '3.1-2.ZoomCanvas',
                            meta: {title: '2.缩放画布'},
                            component: () => import('@/views/manual/3.middle/3.states/1.defaultBehavior/2.zoom-canvas'),
                        },
                        {
                            path: '3.drag-node',
                            name: '3.1-3.DragNode',
                            meta: {title: '3.拖拽节点'},
                            component: () => import('@/views/manual/3.middle/3.states/1.defaultBehavior/3.drag-node'),
                        },
                        {
                            path: '4.click-select',
                            name: '3.1-4.ClickSelect',
                            meta: {title: '4.选中节点'},
                            component: () => import('@/views/manual/3.middle/3.states/1.defaultBehavior/4.click-select'),
                        },
                        {
                            path: '5.tooltip',
                            name: '3.1-5.Tooltip',
                            meta: {title: '5.Tooltip'},
                            component: () => import('@/views/manual/3.middle/3.states/1.defaultBehavior/5.tooltip'),
                        },
                        {
                            path: '6.edge-tooltip',
                            name: '3.1-6.EdgeTooltip',
                            meta: {title: '6.EdgeTooltip'},
                            component: () => import('@/views/manual/3.middle/3.states/1.defaultBehavior/6.edge-tooltip'),
                        },
                        {
                            path: '7.activate-relations',
                            name: '3.1-7.ActivateRelations',
                            meta: {title: '7.突出显示该节点的关系'},
                            component: () => import('@/views/manual/3.middle/3.states/1.defaultBehavior/7.activate-relations'),
                        },
                        {
                            path: '8.brush-select',
                            name: '3.1-8.BrushSelect',
                            meta: {title: '8.框选节点'},
                            component: () => import('@/views/manual/3.middle/3.states/1.defaultBehavior/8.brush-select'),
                        },
                        {
                            path: '9.create-edge',
                            name: '3.1-9.CreateEdge',
                            meta: {title: '9.创建边'},
                            component: () => import('@/views/manual/3.middle/3.states/1.defaultBehavior/9.create-edge'),
                        }
                    ]
                },
                {
                    path: '2.custom-behavior',
                    name: '2.CustomBehavior',
                    meta: {title: '2.自定义交互 Behavior'},
                    component: () => import('@/views/manual/3.middle/3.states/2.custom-behavior'),
                },
                {
                    path: '3.mode',
                    name: '3.Mode',
                    meta: {title: '3.交互模式'},
                    component: () => import('@/views/manual/3.middle/3.states/3.mode'),
                }
            ]
        }
    ]
}

export default middle