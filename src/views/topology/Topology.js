export const NODE_TYPE = 'node'
export const EDGE_TYPE = 'edge'


export default class Topology {
    constructor(G6, config) {
        this.G6 = G6
        this.config = config
        this.graph = this.init()
    }

    init() {
        const { container, width, height } = this.config
        const graph = new this.G6.Graph({
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
                        path: this.G6.Arrow.vee(5, 6, 3),
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
                default: ['drag-canvas', 'zoom-canvas', 'drag-node', 'click-select',
                    {
                        /**
                         * 当鼠标移到某节点时，突出显示该节点以及与其直接关联的节点和连线；
                         */
                        type: 'activate-relations',
                        trigger: 'click'
                    }
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
            },
            plugins: [this.initMenu(), this.initToolbar()],
        })
        return graph
    }

    initMenu() {
        const menu = new this.G6.Menu({
            getContent() {
                return `<ul>
                  <li id='show-node'>显示节点</li>
                  <li id='hide-node'>隐藏节点</li>
                </ul>`;
            },
            handleMenuClick(target, item) {
                console.log('handleMenuClick', {
                    id: target.id,
                    target,
                    item
                })
            },
        });
        return menu
    }

    initToolbar() {
        const toolbar = new this.G6.ToolBar({
            getContent: () => {
                const outDiv = document.createElement('div');
                outDiv.style.width = '280px';
                outDiv.innerHTML = `<ul class="g6_custom_toolbar">
                    <li code="zoomOut"><button>ZoomOut</button></li>
                    <li code="zoomInt"><button>zoomInt</button></li>
                    <li><input type="text" id="g6_keyword" style="width:50px;"></li>
                    <li code="search">           
                        <button>Search</button>
                    </li>
                  </ul>`
                return outDiv
            },
            handleClick: (code) => {
                switch (code) {
                    case 'search':
                        this.search()
                        break
                    case 'zoomOut':
                        break
                    case 'zoomIn':
                        break
                }
            },
        });
        return toolbar
    }

    search() {
        const keyword = document.getElementById('g6_keyword').value.trim()
        const nodes = this.graph.getNodes().map(_ => _.getModel())
        const edges = this.graph.getEdges().map(_ => _.getModel())
        nodes.forEach(_ => {
            this.graph.clearItemStates(_.id, 'selected')
            if (!keyword) return
            if (_.label.includes(keyword)) {
                console.log('selected>node:', _)
                this.graph.setItemState(_.id, 'selected', true);
            }
        })
        edges.forEach(_ => {
            this.graph.clearItemStates(_.id, 'selected')
            if (!keyword) return
            if (_.label.includes(keyword)) {
                console.log('selected>edge:', _)
                this.graph.setItemState(_.id, 'selected', true);
            }
        })
    }

    initData(data) {
        this.data = data
        this.graph.changeData(data)
    }

    addItem(type, data) {
        if (![NODE_TYPE, EDGE_TYPE].includes(type)) return
        this.graph.addItem(type, data)
    }
}
