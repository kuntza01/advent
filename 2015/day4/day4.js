var f = require('fs').readFileSync('input', 'utf8')
for (i = 1; require('crypto').createHash('md5').update(f + i).digest('hex').substring(0, 5) != '00000'; i++){}
console.log(i)
