let input = require('fs').readFileSync('input', 'utf-8')
let _ = require('lodash')

let cur = input.split('')
let prev = []
let safe = _.filter(cur, v => v == '.').length

let trap = (left, center, right) => {
    if (right != '^' && center === '^' && left == '^') {
        return '^'
    } else if (right === '^' && center === '^' && left !== '^') {
        return '^'
    } else if (right === '^' && center !== '^' && left !== '^') {
        return '^'
    } else if (right !== '^' && center !== '^' && left === '^') {
        return '^'
    }
    return '.'

}

for (let i = 0; i < 400000-1; i++) {
    prev = _.clone(cur)
    for (let n = 0; n < cur.length; n++) {
        cur[n] = trap(prev[n - 1], prev[n], prev[n + 1])
    }
    safe += _.filter(cur, v => v == '.').length
}
console.log(safe)
