let input = require('fs').readFileSync('input', 'utf-8')
let length = 35651584

let checksum = val => val.match(/../g).map(v => v[0] == v[1] ? 1 : 0).join``

while (input.length < length) {
    input += '0'+input.split('').map(val => val == 1 ? 0 : 1).reverse().join``
}

let result = checksum(input.slice(0, length))
while (result.length % 2 != 1){
    result = checksum(result)
}

console.log(result)
