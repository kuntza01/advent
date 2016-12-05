let fs = require('fs')
let _ = require('lodash')
let f = fs.readFileSync('input', 'utf-8')

let cypher = {
    a: 'b',
    b: 'c',
    c: 'd',
    d: 'e',
    e: 'f',
    f: 'g',
    g: 'h',
    h: 'i',
    i: 'j',
    j: 'k',
    k: 'l',
    l: 'm',
    m: 'n',
    n: 'o',
    o: 'p',
    p: 'q',
    q: 'r',
    r: 's',
    s: 't',
    t: 'u',
    u: 'v',
    v: 'w',
    w: 'x',
    x: 'y',
    y: 'z',
    z: 'a'
}

let result = 0
f.split('\n').forEach(val => {
    let vs = val.match(/((([a-z]*)-)*)([0-9]*)\[(.*)\]/)
    let code = parseInt(vs[4])
    let chars = _.filter(vs[1].split(''), v => v != '-').map((v, i) => {
        let char = v
        for (let i = 0; i < code; i++) {
            char = cypher[char]
        }
        return char
    })
    if (chars.join('') == 'northpoleobjectstorage') {
        result = code
    }
})
console.log(result)