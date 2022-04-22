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
                }
            ]
        }
    ]
}

export default api
