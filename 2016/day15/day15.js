let x = 0, i = require('fs').readFileSync('input', 'utf-8').match(/\d+/g).map(v => +v)
let res = x => {let a=0;for(let n = 0; n < i.length; n+=4){a += (x + i[n] + i[3+n]) % i[1+n]}; return a}
for (;res(x)!=0; x++){}
console.log(x)
