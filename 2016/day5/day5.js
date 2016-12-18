let fs = require('fs')
let f = fs.readFileSync('input', 'utf-8')
let md5 = require('crypto')

let go = true
let i = 0
let output = ''
while(go){
    let hash = md5.createHash('md5').update(f + i).digest('hex')
    if(hash.startsWith('00000')){
        output+=hash[5]
    }
    if(output.length == 8){
        go = false
    }
    i++
}

console.log(output)