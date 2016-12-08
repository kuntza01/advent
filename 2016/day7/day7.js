let vals = require('fs').readFileSync('input', 'utf-8').split('\n')
console.log(vals.filter( val => /(\w)(?!\1)(\w)\2\1(?!\w*])/.test(val) && !/(\w)(?!\1)(\w)\2\1(?=\w*])/.test(val)).length)
