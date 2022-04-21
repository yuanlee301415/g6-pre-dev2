import Layout from "@/layout";

import gettingStarted  from "./1.getting-started";
import tutorial  from "./2.tutorial";
import middle  from "./3.middle";

// 教程
const manual = {
    path: '/manual',
    name: 'Manual',
    meta: {title: '教程'},
    component: Layout,
    redirect: '/manual/1.getting-started',
    children: [
        // 快速上手
        gettingStarted,

        // 入门教程
        tutorial,

        // 核心概念
        middle
    ]
}

export default manual