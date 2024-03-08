export class GraphEdge {
    source
    target
    label
    constructor(_) {
        const { source, target, label } = { ..._ }
        this.source = source
        this.target = target
        this.label = label
        this.description = `From: ${source} to ${target}`
    }
}
