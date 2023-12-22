import G6 from "@antv/g6";

export function createConfig({ container, width, height }) {
    return {
        container,
        width,
        height,
        fitView: true,
        layout: {
            type: 'gForce',
            animate: true,
            maxIteration: 100,
        },
        defaultNode: {
            style: {
                lineWidth: 0,
                fill: '#10b981'
            },
            labelCfg: {
                style: {
                    fill: '#333',
                    fontSize: 7
                },
                position: 'bottom'
            }
        },
        defaultEdge: {
            type: 'line',
            style: {
                stroke: '#1d4ed8',
                lineWidth: 0.5,
                opacity: 0.5,
                endArrow: {
                    path: G6.Arrow.vee(3, 2, 1),
                    d: 1
                }
            },
            labelCfg: {
                style: {
                    fill: '#999',
                    fontSize: 6
                },
            }
        },
        nodeStateStyles: {
            active: {
                fill: '#10b981',
                lineWidth: 0,
                'text-shape': {
                    fill: '#111'
                }
            },
            inactive: {
                opacity: 0.6,
                'text-shape': {
                    opacity: 0.6
                }
            },
            hit: {
                fill: '#f59e0b'
            }
        },
        edgeStateStyles: {
            active: {
                stroke: '#1d4ed8',
                lineWidth: 0.5,
                'text-shape': {
                    fill: '#333'
                }
            },
            inactive: {
                opacity: 0.6,
                'text-shape': {
                    opacity: 0.6
                }
            },
            hit: {
                stroke: '#f59e0b',
                lineWidth: 1,
                'text-shape': {
                    fill: '#f59e0b'
                }
            }
        },
        modes: {
            default: ['drag-canvas', 'zoom-canvas', 'drag-node',
                'activate-relations', // 当鼠标移到某节点时，突出显示该节点以及与其直接关联的节点和连线
            ]
        },
    }
}
