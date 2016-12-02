let fs = require('fs')
let f = fs.readFileSync('input', 'utf-8')

let x = 0
let y = 0

f.split('\n').forEach(line => {
    let codes = line.split('')
    codes.forEach( key => {
        if(key == 'U' && y < 1){
            y++
        }
        if(key == 'D' && y > -1){
            y--
        }
        if(key == 'L' && x > -1){
            x--
        }
        if(key == 'R' && x < 1) {
            x++
        }
    })
    console.log(x,y)
})