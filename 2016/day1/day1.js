let pos = {x: 0, y: 0}
let head = 'N'

let right = {
    'N': 'E',
    'E': 'S',
    'S': 'W',
    'W': 'N'
}

let left = {
    'N': 'W',
    'E': 'N',
    'S': 'E',
    'W': 'S'
}

let move = {
    'N': (v, d) => {
        return {x: v.x, y: v.y + d}
    },
    'S': (v, d) => {
        return {x: v.x, y: v.y - d}
    },
    'E': (v, d) => {
        return {x: v.x + d, y: v.y}
    },
    'W': (v, d) => {
        return {x: v.x - d, y: v.y}
    }
}

require('fs').readFileSync('input', 'utf-8').split(', ').forEach((v) => {
    let dir = v[0]
    let dist = v.slice(1)

    if (dir == 'R') {
        head = right[head]
    } else {
        head = left[head]
    }
    pos = move[head](pos, parseInt(dist))
})

console.log(Math.abs(pos.x) + Math.abs(pos.y))

//288