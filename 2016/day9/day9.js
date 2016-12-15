let _ = require('lodash')
let vals = require('fs').readFileSync('input', 'utf-8').split('')
let out = ''
let temp = ''
let repeat = ''
for (let i = 0; i < vals.length; i++){
    let cur = vals[i]
    if (cur == '('){
        let a = true
        while(a){
            temp+=cur
            if (cur == ')'){
                a = false
            }
            i++
            cur = vals[i]
        }
        let matches = temp.match(/([0-9]*)x([0-9]*)/)
        let chars = parseInt(matches[1])
        let times = parseInt(matches[2])
        for (let n = 0; n < chars; n++){
            repeat+=cur
            i++
            cur=vals[i]
        }
        for (let n=0; n< times;n++){
            out+=repeat
        }
        temp = ''
        repeat = ''
        i--
    } else {
        out+=cur
    }
}

console.log(out.length)
//324,741 too high