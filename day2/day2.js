var fs = require('fs')
var _ = require('lodash')
console.log(fs.readFileSync('input', 'utf8').split('\n').map((v, i) => v.trimRight().split('x')).reduce((r, c, i) =>
    r + 2*(c[0]*c[1] + c[1]*c[2] + c[2]*c[0]) + _.min([c[0]*c[1], c[0]*c[2], c[1]*c[2]]), 0))
