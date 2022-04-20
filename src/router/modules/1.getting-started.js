// 快速上手
const gettingStarted = {
    path: '/1.getting-started',
        redirect: '/1.getting-started',
    component: () => import('@/views/manual'),
    children: [
    {
        path: '',
        name: 'GettingStarted',
        meta: {title: '1.快速上手'},
        component: () => import('@/views/manual/1.getting-started')
    }
]
}

export default gettingStarted
