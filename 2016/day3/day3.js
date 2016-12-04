let fs = require('fs')
let f = fs.readFileSync('input', 'utf-8')

let count = 0
f.split('\n').forEach(val=>{
    let vals = val.trim().split(' ').filter(val => !!val).map(val => parseInt(val))
    console.log(vals)
    if (vals[0]+vals[1] <= vals[2] || vals[1]+vals[2] <= vals[0] || vals[0]+vals[2] <= vals[1]){
    } else { count++ }
})

console.log(count)