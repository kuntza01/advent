let fs = require('fs')
let _ = require('lodash')
let f = fs.readFileSync('input', 'utf-8')
let md5 = require('crypto')

let go = true
let i = 0
let output = []
while(go){
    let hash = md5.createHash('md5').update(f + i).digest('hex')
    if(hash.startsWith('00000')){
        if(!output[parseInt(hash[5])]){
            output[parseInt(hash[5])] = hash[6]
        }
    }
    if(output[0]&&output[1]&&output[2]&&output[3]&&output[4]&&output[5]&&output[6]&&output[7]){
        go = false
    }
    i++
}

console.log(output.join('').substring(0,8))
