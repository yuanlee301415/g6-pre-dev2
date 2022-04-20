// Tree
import Layout from "@/layout";

const tree = {
    path: '/tree',
    name: 'Tree',
    meta: {title: 'Tree'},
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

export default tree