let _ = require('lodash')
let vals = require('fs').readFileSync('input', 'utf-8')
let result = 0

for (let i = vals.length-1; i >= 0; i--){
    let cur = vals[i]
    if (cur == ')'){
        let temp = ''
        while(cur != '('){
            temp += cur
            i--
            cur = vals[i]
        }
        console.log(temp)
        temp = temp.split('').reverse().join('').match(/([0-9]*)x([0-9]*)/)
        result += temp[1] * temp[2]
    }
}

console.log(result)
//11,658,395,076