let _ = require('lodash')
let vals = require('fs').readFileSync('input', 'utf-8').split('\n')
let result = ''
for (let i = 0; i < vals[0].length; i++){
    result+=_.maxBy(Object.keys(_.countBy(vals, v => v[i])), o => _.countBy(vals, v => v[i])[o])
}
console.log(result)


