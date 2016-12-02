var fs = require('fs')
var wires = fs.readFileSync('input', 'utf8').split('\n').reduce((r, v)=> {
    var string = /([a-z0-9]*)\s?([A-Z]*)\s?(.*)\s->\s([a-z]+)/g.exec(v)
    var w1 = string[1]
    var func = string[2]
    var w2 = string[3]
    var result = string[4]
    r[result] = {i: [w1, w2], func: func}
    return r
}, {})

function getValue(v) {
    var node = wires[v] || parseInt(v)
    if (!node.i) {
        return node
    }
    if (!node.func) {
        wires[v] = getValue(node.i[0])
        return wires[v]
    } else {
        if (node.func === 'OR') {
            wires[v] = getValue(node.i[0]) | getValue(node.i[1])
            return wires[v]
        }
        else if (node.func === 'AND') {
            wires[v] = (getValue(node.i[0]) & getValue(node.i[1]))
            return wires[v]
        }
        else if (node.func === 'NOT') {
            wires[v] = getValue(node.i[1]) ^ 65535
            return wires[v]
        }
        else if (node.func === 'RSHIFT') {
            wires[v] = getValue(node.i[0]) >> getValue(node.i[1])
            return wires[v]
        }
        else if (node.func === 'LSHIFT') {
            wires[v] = getValue(node.i[0]) << getValue(node.i[1])
            return wires[v]
    }
    }
}

console.log(getValue('a'))