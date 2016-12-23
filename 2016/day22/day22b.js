let _ = require('lodash')
let input = require('fs').readFileSync('input', 'utf-8').split('\n').slice(2).map(v => {
    let [file, s, u, a, p] = v.split(' ').filter(i => i)
    let [aa,x,y] = file.split('-').map(val => val.substring(1))
    return [x, y, u.split('T')[0], a.split('T')[0], p.split('%')[0], s.split('T')[0]]
})

//console.log(input)

let files = new Array(25)
input.forEach(val => {
    if (!files[val[1]]) {
        files[val[1]] = []
    }
    let goal = val[1] == 0 && val[0] == 36
    files[val[1]][val[0]] = {x: +val[0], y: +val[1], avail: +val[3], used: +val[2], per: +val[4], size:+val[5], goal: goal}
})

console.log(
    files.map(v => {
        return v.map(val => {
            //console.log(val)
            if (val.per == 0) return ' _'
            if (val.x == 36 && val.y == 0) return ' G'
            if (val.size > 150) return ' #'
            return ` .`
        }).join``
    }).join('\n')
)

let zero = {}
let xfiles = files.map(v => {
    return v.map(val => {
        //console.log(val)
        if (val.per == 0) {
            zero = {x:val.x, y:val.y}
            return ' _'
        }
        if (val.x == 36 && val.y == 0) return ' G'
        if (val.size > 150) return ' #'
        return ` .`
    })
})
