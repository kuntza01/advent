let _ = require('lodash')
let a = require('fs').readFileSync('input', 'utf-8').split('\n')
console.log(_.unzip(a.map(_.values)).map(v => _.minBy(_.keys(z = _.countBy(v)), o => z[o])).join``)

_.keys(z = _.countBy(v)), o => z[o]
