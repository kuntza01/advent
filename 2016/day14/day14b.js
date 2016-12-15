let fs = require('fs')
let md5 = require('crypto')
let input = fs.readFileSync('input', 'utf-8')


let hashit = hash => {
    let newhash = hash
    for (let i = 0; i < 2016; i++){
        newhash = md5.createHash('md5').update(newhash).digest('hex')
    }
    fs.appendFileSync('partbHashes', newhash + '\n')
    return newhash
}
let keys = []
let hashes = fs.readFileSync('partbHashes', 'utf-8').split('\n')
for (let i = 0; keys.length < 64; i++) {
    let hash = hashes[i] || hashit(md5.createHash('md5').update(input + i).digest('hex'))
    let match = hash.match(/(.)\1{2}/)
    if (match) {
        for (let n = i+1; n <= i + 1000; n ++){
            let next = hashes[n] || hashit(md5.createHash('md5').update(input + n).digest('hex'))
            let m = next.match(/(.)\1{4}/)
            if (m && m[1] == match[1] && hash !== next){
                keys.push({hash:hash, index: i})
                break
            }
        }
    }
}

console.log(keys[63].index)
