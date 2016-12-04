let fs = require('fs')
let f = fs.readFileSync('input', 'utf-8')

let count = 0
let vals = f.split('\n').map((v,i) => v.trim().split(' ').filter(x => !!x).map(x => parseInt(x)))
let newvals = []

for (let i = 0; i < vals.length; i+=3){
    newvals.push([vals[i][0],vals[i+1][0],vals[i+2][0]])
    newvals.push([vals[i][1],vals[i+1][1],vals[i+2][1]])
    newvals.push([vals[i][2],vals[i+1][2],vals[i+2][2]])
}
newvals.forEach(val => {
    if (val[0]+val[1] <= val[2] || val[1]+val[2] <= val[0] || val[0]+val[2] <= val[1]){
    } else { count++ }
})

console.log(count)