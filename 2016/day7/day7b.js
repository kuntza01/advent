let i = require('fs').readFileSync('input', 'utf-8').split('\n')
console.log(i.filter( v => /(\w)(?!\1)(\w)\1(?=\w*]).*\2\1\2(?!\w*])/.test(v) || /(\w)(?!\1)(\w)\1(?!\w*]).*\2\1\2\w*]/.test(v)).length)
