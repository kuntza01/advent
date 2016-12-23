let _ = require('lodash')
let input = require('fs').readFileSync('input', 'utf-8').split('\n')
console.log(_.sortBy(input, x => +x.split('-')[0]).reduce((r,v) => {
    let l = +v.split('-')[0]
    let h = +v.split('-')[1]
    if (l <= r && r <= h){
        return h+1
    }
    return r
},0))

