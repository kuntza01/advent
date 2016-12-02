let fs = require('fs')
let f = fs.readFileSync('input', 'utf-8')

let x = -2
let y = 0

f.split('\n').forEach(line => {
    let codes = line.split('')
    codes.forEach( key => {
        if(key == 'U' && y < 2 && Math.abs(x) + y < 2){
            y++
        }
        if(key == 'D' && y > -2 && -1*Math.abs(x) + y > -2){
            y--
        }
        if(key == 'L' && x > -2 && -1*Math.abs(y) + gx > - 2){
            x--
        }
        if(key == 'R' && x < 2 && Math.abs(y) + x < 2) {
            x++
        }
    })
    console.log(x,y)
})