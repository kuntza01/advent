console.log(require('fs').readFileSync('input', 'utf8').split('\n').reduce((r,v) =>/(..).*\1/g.test(v) && /(.).\1/g.test(v) ? r+1 : r, 0))