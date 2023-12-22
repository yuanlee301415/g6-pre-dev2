import {GraphNode} from "@/G6/GraphNode";
import {GraphEdge} from "@/G6/GraphEdge";

export class GraphData {
    nodes
    edges
    constructor(_) {
        const { nodes, edges } = { ..._ }
        this.nodes = nodes && nodes.map(_ => new GraphNode(_))
        this.edges = edges && edges.map(_ => new GraphEdge(_))
    }
}
