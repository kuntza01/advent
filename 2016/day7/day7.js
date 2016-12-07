let vals = require('fs').readFileSync('input', 'utf-8').split('\n')
console.log(vals.filter( val => {
    return /.*(.)(.)\2\1.*/.test(val) && /.*\[.*(.)(.)\2\1.*].*/.test(val)
}).length)

