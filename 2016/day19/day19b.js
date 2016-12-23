let input = require('fs').readFileSync('input', 'utf-8')

let f = x => {
    let pow = Math.pow(3,Math.floor(Math.log(x)/Math.log(3)))
    if (x == pow){ return x }
    else if (x <= pow * 2){ return x - pow }
    return 2 * x - 3 * pow
}

console.log(f(input))


