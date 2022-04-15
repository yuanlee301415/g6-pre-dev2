


let ITEM_ID = 0



















function ModelTree(item, textFieldName, valueFieldName, childrenName, collapse) {
    this.id = item.id || ITEM_ID++
    this.opened = item.opened || collapse
    this.selected = item.selected || false
    this.disabled = item.disabled || false
    this.loading = item.loading || false
    this[textFieldName] = item[textFieldName] || ''
    this[valueFieldName] = item[valueFieldName] || item[textFieldName]
    this[childrenName] = item[childrenName]





    this._id = `modelTree_${item.id ? ITEM_ID++ : this.id}`
}

export default ModelTree
