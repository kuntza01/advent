let _ = require('lodash')
let vals = require('fs').readFileSync('input', 'utf-8')
let result = 0

let stringy = (vals) => {
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
            let repeated = ''
            for (let n=0; n< times;n++){
                repeated+=repeat
            }
            if(/\(/.test(repeated)){
                repeated = stringy(repeated)
            }
            result+=repeated.length

            temp = ''
            repeat = ''
            i--
        } else {
            result++
        }
    }
    return out
}

stringy(vals)

console.log(result)
//11,658,395,076