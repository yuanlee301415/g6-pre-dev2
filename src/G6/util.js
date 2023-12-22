import G6 from "@antv/g6";

export function createConfig({ container, width, height }) {
    return {
        container,
        width,
        height,
        fitView: true,
        layout: {
            type: 'gForce'
        },
        defaultNode: {
            style: {
                fill: '#10b981',
                lineWidth: 0
            },
            labelCfg: {
                position: 'bottom',
                style: {
                    fill: '#333',
                    fontSize: 7
                }
            }
        },
        defaultEdge: {
            type: 'quadratic',
            style: {
                stroke: '#10b981',
                lineWidth: 1,
                endArrow: {
                    path: G6.Arrow.vee(5, 6, 3),
                    d: 3
                }
            },
            labelCfg: {
                style: {
                    fill: '#999',
                    fontSize: 6
                },
            }
        },
        modes: {
            default: ['drag-canvas', 'zoom-canvas', 'drag-node',
                'activate-relations', // 当鼠标移到某节点时，突出显示该节点以及与其直接关联的节点和连线
            ]
        },
        nodeStateStyles: {
            active: {
                fill: '#10b981',
                lineWidth: 0,
                'text-shape': {
                    fill: '#10b981'
                }
            },
            inactive: {
                opacity: 0.8,
                'text-shape': {
                    opacity: 0.8
                }
            },
            hit: {
                lineWidth: 0,
                fill: '#f59e0b',
                'text-shape': {
                    fill: '#f59e0b'
                }
            }
        },
        edgeStateStyles: {
            active: {
                stroke: '#10b981',
                'text-shape': {
                    fill: '#10b981'
                }
            },
            inactive: {
                opacity: 0.8,
                'text-shape': {
                    opacity: 0.8
                }
            },
            hit: {
                lineWidth: 1,
                stroke: '#f59e0b',
                'text-shape': {
                    fill: '#f59e0b'
                }
            }
        },
    }
}
