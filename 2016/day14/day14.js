let md5 = require('crypto')
let input = require('fs').readFileSync('input', 'utf-8')

let keys = []
let hashes = []
for (let i = 0; keys.length < 64; i++) {
    let hash = hashes[i] || md5.createHash('md5').update(input + i).digest('hex')
    hashes[i] = hash
    let match = hash.match(/(.)\1{2}/)
    if (match) {
        for (let n = i; n <= i + 1000; n ++){
            let next = hashes[n] || md5.createHash('md5').update(input + n).digest('hex')
            hashes[n] = next
            let m = next.match(/(.)\1{4}/)
            if (m && m[1] == match[1] && hash !== next){
                keys.push({hash:hash, index: i})
                break
            }
        }
    }
}

console.log(keys[63].index)
