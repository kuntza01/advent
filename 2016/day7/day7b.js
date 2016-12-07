let vals = require('fs').readFileSync('input', 'utf-8').split('\n')
console.log(vals.filter( val => {
    return (/([a-z])(?!\1)([a-z])\1(?=[a-z]*]).*\2\1\2(?![a-z]*])/.test(val) ||
        /([a-z])(?!\1)([a-z])\1(?![a-z]*]).*\2\1\2[a-z]*]/.test(val))
}).length)
