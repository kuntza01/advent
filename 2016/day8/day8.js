let _ = require('lodash')
let vals = require('fs').readFileSync('input', 'utf-8').split('\n')
let r = new Array(6).fill(new Array(50).fill('.'))
vals.forEach((v) => {
    let p = /([a-z]*)\s([a-z]+)\s([a-z])=([0-9]+) by ([0-9]+)/.exec(v) || /([a-z]*)\s([0-9]+)x([0-9]+)/.exec(v)
    if (p[1] == 'rect') {
        for (let x = 0; x < p[2]; x++) {
            for (let y = 0; y < p[3]; y++) { r[y][x] = '#' }
        }
    } else {
        let slice
        if (p[2] == 'row') {
            slice = p[5] % 50
            r[p[4]] = r[p[4]].slice(-slice).concat(r[p[4]].slice(0, -slice))
        } else {
            r = _.unzip(r)
            slice = p[5] % 6
            r[p[4]] = r[p[4]].slice(-slice).concat(r[p[4]].slice(0, -slice))
            r = _.unzip(r)
        }
    }
})

console.log(r.map(row => row.join('')))
console.log(r.reduce((r, v) => v.filter(b => b == '#').length + r, 0))
