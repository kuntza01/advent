let _ = require('lodash')
let input = require('fs').readFileSync('input', 'utf-8').split('\n')
input = _.sortBy(input, x => +x.split('-')[0]).map(v => {return {l: +v.split('-')[0], h: +v.split('-')[1]}})
let pointer = 0
let count = 0
for (let i = 0; i < input.length; i++){
    if (input[i].l > pointer){
        count+= input[i].l - pointer - 1
        pointer = input[i].h
    } else if (pointer < input[i].h){
        pointer = input[i].h
    }
}

console.log(count)
