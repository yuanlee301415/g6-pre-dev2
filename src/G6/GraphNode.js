export class GraphNode {
    id
    label
    constructor(_) {
        const { id, label } = { ..._ }
        this.id = id
        this.label = label
    }
}
