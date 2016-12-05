let fs = require('fs')
let _ = require('lodash')
let f = fs.readFileSync('input', 'utf-8')

let count = 0
f.split('\n').forEach(val => {
    let vs = val.match(/((([a-z]*)-)*)([0-9]*)\[(.*)\]/)
    let map = {}

    map = _.countBy(vs[1], v => v)
    map['-'] = 0

    let mapvals = Object.keys(map).map((v,i) => map[v])

    let keys = vs[5].split('')
    let code = vs[4]

    let keycount = 0
    keys.forEach(key => {
        if(map[key] == _.max(mapvals)){
            keycount++
            mapvals[mapvals.indexOf(_.max(mapvals))] = 0
        }
    })

    if(keycount == 5){
        count += parseInt(code)
    }

})

console.log(count)