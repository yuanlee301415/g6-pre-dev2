const fs = require('fs')
const db = require('./db-bk.json')

class Gen {
    constructor(label) {
        if (!label) return console.error('Label 不存在！')
        const node = this.findNode(label)
        if (!node) return console.error('节点未找到！')
        const neighbors = this.genNeighbors(node)
        console.log('neighbors:\n', JSON.stringify(neighbors, null, 2))
        if (!neighbors) return console.error('邻居未找到！')
        this.write(neighbors)
        console.info('Done!', new Date())
    }

    findNode(label) {
        console.info('findNode>label:', label)
        return _dfs(db.cit)
        function _dfs(list) {
            for (const item of list) {
                if (item.displayName === label) return item
                if (item.children) {
                    const ret = _dfs(item.children)
                    if (ret) return ret;
                }
            }
        }
    }

    genNeighbors(node) {
        console.info('genNeighbors>node:', node)
        const nodes = [node, ...node.children].map(_ => ({ id: _.name, label: _.displayName }))
        const [source, ...targets] = nodes
        const edges = targets.map(_ => ({
            id: `${source.id}->${_.id}`,
            source: source.id,
            target: _.id,
            label: `${source.label}->${_.label}`
        }))
        return {
            id: source.id,
            __LABEL__: source.label,
            nodes,
            edges
        }
    }

    write(neighbors) {
        console.info('write>neighbors:', neighbors)
        const idx = db.neighbors.findIndex(_ => _.id === neighbors.id)
        if (idx !== -1) {
            console.log('write>update:', db.neighbors.splice(idx, 1))
        }
        db.neighbors.push(neighbors)
        fs.writeFileSync('db-bk.json', JSON.stringify(db, null, 2))
    }
}

new Gen(process.argv[2])
