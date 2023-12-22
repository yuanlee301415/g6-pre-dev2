import G6 from "@antv/g6";
import { GraphData } from "@/G6/GraphData";
import { createConfig } from "@/G6/util";

export const NODE_TYPE = 'node'
export const EDGE_TYPE = 'edge'

export default class TopologyStore {
    constructor(config) {
        this.config = config
        this.graph = this._initGraph()
    }

    _initGraph() {
        const graph = new G6.Graph(createConfig(this.config))
        graph.addPlugin(this._initToolbar())
        graph.addPlugin(this._initMenu())
        return graph
    }

    _initMenu() {
        const menu = new G6.Menu({
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

    _initToolbar() {
        const toolbar = new G6.ToolBar({
            className: 'g6-custom-toolbar',
            getContent: () => {
                const outDiv = document.createElement('ul');
                outDiv.innerHTML = `
                    <li code="zoomOut"><button>ZoomOut</button></li>
                    <li code="zoomIn"><button>zoomIn</button></li>
                    <li code="realZoom"><button>1:1</button></li>
                    <li code="autoZoom"><button>Auto</button></li>
                    <li><input type="text" id="g6_keyword" style="width:100px;"></li>
                    <li code="search"><button>Search</button></li>`
                return outDiv
            },
            handleClick: (code) => {
                switch (code) {
                    case 'search':
                        this.search(document.getElementById('g6_keyword').value)
                        break
                    case 'zoomOut':
                        console.log('zoomOut')
                        toolbar.zoomOut()
                        break
                    case 'zoomIn':
                        toolbar.zoomIn()
                        break
                    case 'realZoom':
                        toolbar.realZoom()
                        break
                    case 'autoZoom':
                        toolbar.autoZoom()
                        break
                    default:
                        // 其他操作保持默认不变
                        toolbar.handleDefaultOperator(code)
                }
            },
        });
        return toolbar
    }

    search(keyword) {
        const nodes = this.graph.getNodes().map(_ => _.getModel())
        const edges = this.graph.getEdges().map(_ => _.getModel())
        keyword = keyword ? keyword.trim().toLowerCase() : ''
        nodes.forEach(_ => {
            this.graph.clearItemStates(_.id, 'selected')
            if (!keyword) return
            if (_.label.toLowerCase().includes(keyword)) {
                console.log('selected>node:', _)
                this.graph.setItemState(_.id, 'selected', true);
            }
        })
        edges.forEach(_ => {
            this.graph.clearItemStates(_.id, 'selected')
            if (!keyword) return
            if (_.label.toLowerCase().includes(keyword)) {
                console.log('selected>edge:', _)
                this.graph.setItemState(_.id, 'selected', true);
            }
        })
    }

    changeData(data) {
        this.data = data
        this.graph.changeData(data)
    }

    addItem(type, data) {
        if (![NODE_TYPE, EDGE_TYPE].includes(type)) return
        this.graph.addItem(type, data)
    }
}
