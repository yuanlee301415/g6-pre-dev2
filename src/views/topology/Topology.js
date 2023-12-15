export const NODE_TYPE = 'node'
export const EDGE_TYPE = 'edge'

function init(G6, options) {
    const { container, width, height } = options
    const menu = new G6.Menu({
        // offsetX: container.offsetLeft * -1 + 15,
        // offsetY: container.offsetTop * -1 + 15,
        getContent() {
            return `<ul>
      <li id='show-node'>显示节点</li>
      <li id='hide-node'>隐藏节点</li>
    </ul>`;
        },
        handleMenuClick(target, item) {
            console.log({
                id: target.id,
                target,
                item
            })
        },
    });
    const graph = new G6.Graph({
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
                {
                    /**
                     * 当鼠标移到某节点时，突出显示该节点以及与其直接关联的节点和连线；
                     */
                    type: 'activate-relations',
                    trigger: 'click'
                }
            ]
        },
        plugins: [menu],
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
            }
        }
    })
    return graph
}

export default class Topology {
    constructor(G6, options) {
        this.graph = init(G6, options)
    }
    initData(data) {
        this.data = data
        this.graph.changeData(data)
    }
    addItem(type, data) {
        if (![NODE_TYPE, EDGE_TYPE].includes(type)) return

        // this.data[`${type}s`].push(data)
        // this.graph.read(this.data)
        this.graph.addItem(type, data)
    }
}
