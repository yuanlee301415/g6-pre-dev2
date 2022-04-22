// API
import Layout from "@/layout";

const api = {
    path: '/api',
    name: 'API',
    meta: {title: 'API'},
    component: Layout,
    children: [
        {
            path: '1.graphFunc',
            name: '1.GraphFunc',
            meta: {title: '1.Graph 实例方法'},
            component: () => import('@/views/api/1.graphFunc'),
            children: [
                {
                    path: '1.data',
                    name: '1.1.Data',
                    meta: {title: '1.数据'},
                    component: () => import('@/views/api/1.graphFunc/1.data'),
                    children: [
                        {
                            path: '1.save',
                            name: '1.1-1.Save',
                            meta: {title: '1.保存数据'},
                            component: () => import('@/views/api/1.graphFunc/1.data/1.save'),
                        },
                        {
                            path: '2.read',
                            name: '1.1-2.Read',
                            meta: {title: '2.接收数据并重新渲染'},
                            component: () => import('@/views/api/1.graphFunc/1.data/2.read'),
                        },
                        {
                            path: '3.changeData',
                            name: '1.1-3.ChangeData',
                            meta: {title: '3.更新数据并重新渲染'},
                            component: () => import('@/views/api/1.graphFunc/1.data/3.changeData'),
                        }
                    ]
                },

                {
                    path: '2.render',
                    name: '1.2.Render',
                    meta: {title: '2.渲染与更新'},
                    component: () => import('@/views/api/1.graphFunc/2.render'),
                    children: [
                        {
                            path: '1.refresh',
                            name: '1.2-1.Refresh',
                            meta: {title: '1.刷新视图'},
                            component: () => import('@/views/api/1.graphFunc/2.render/1.refresh'),
                        }
                    ]
                },

                {
                    path: '3.get_set',
                    name: '1.3.Get_set',
                    meta: {title: '3.获取/设置'},
                    component: () => import('@/views/api/1.graphFunc/3.get_set')
                },

                {
                    path: '4.transform',
                    name: '1.4.Transform',
                    meta: {title: '4.视口操作'},
                    component: () => import('@/views/api/1.graphFunc/4.transform')
                },

                {
                    path: '5.item',
                    name: '1.5.Item',
                    meta: {title: '5.元素操作'},
                    component: () => import('@/views/api/1.graphFunc/5.item'),
                    children: [
                        {
                            path: '1.addItem',
                            name: '1.5-1.AddItem',
                            meta: {title: '1.新增元素'},
                            component: () => import('@/views/api/1.graphFunc/5.item/1.addItem'),
                        },
                        {
                            path: '2.removeItem',
                            name: '1.5-2.RemoveItem',
                            meta: {title: '2.删除元素'},
                            component: () => import('@/views/api/1.graphFunc/5.item/2.removeItem'),
                        },
                        {
                            path: '3.updateItem',
                            name: '1.5-3.UpdateItem',
                            meta: {title: '3.更新元素'},
                            component: () => import('@/views/api/1.graphFunc/5.item/3.updateItem'),
                        },
                        {
                            path: '4.node',
                            name: '1.5-4.Node',
                            meta: {title: '4.Node'},
                            component: () => import('@/views/api/1.graphFunc/5.item/4.node'),
                        },
                        {
                            path: '5.edge',
                            name: '1.5-5.Edge',
                            meta: {title: '5.edge'},
                            component: () => import('@/views/api/1.graphFunc/5.item/5.edge'),
                        },
                        {
                            path: '6.show_hide_Item',
                            name: '1.5-6.ShowHideItem',
                            meta: {title: '6.ShowHideItem'},
                            component: () => import('@/views/api/1.graphFunc/5.item/6.show_hide_Item'),
                        }
                    ]
                },

                {
                    path: '6.find',
                    name: '1.6.Find',
                    meta: {title: '6.查找元素'},
                    component: () => import('@/views/api/1.graphFunc/6.find')
                },

                {
                    path: '7.state',
                    name: '1.7.State',
                    meta: {title: '7.元素状态'},
                    component: () => import('@/views/api/1.graphFunc/7.state')
                },

                {
                    path: '8.on_off',
                    name: '1.8.On_off',
                    meta: {title: '8.事件绑定&解绑'},
                    component: () => import('@/views/api/1.graphFunc/8.on_off')
                },

                {
                    path: '9.calculation',
                    name: '1.9.Calculation',
                    meta: {title: '9.calculation'},
                    component: () => import('@/views/api/1.graphFunc/9.calculation')
                },

                {
                    path: '10.download',
                    name: '10.Download',
                    meta: {title: '10.导出图片'},
                    component: () => import('@/views/api/1.graphFunc/10.download')
                },
            ]
        }
    ]
}

export default api
