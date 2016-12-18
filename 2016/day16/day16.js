let input = require('fs').readFileSync('input', 'utf-8')
let length = 272

let checksum = val => {
    let check = ''
    for(let i = 0; i < val.length; i+=2){
        check += val[i] == val[i+1] ? 1 : 0
    }
    return check
}

while (input.length < length) {
    input += '0'+input.split('').map(val => val == 1 ? 0 : 1).reverse().join``
}

let result = checksum(input.substr(0, length))
while (result.length % 2 != 1){
    result = checksum(result)
}

console.log(result)
