var fs = require('fs')
console.log(fs.readFileSync('input', 'utf8').split('\n').reduce((r,v)=> {
    var m = v.split(' ')
    if(!r[m[0]]){
        r[m[0]] = {}
    }
    if(!r[m[2]]){
        r[m[2]] = {}
    }
    r[m[0]][m[2]] = r[m[2]][m[0]] = m[4]
    return r
}, {}))

