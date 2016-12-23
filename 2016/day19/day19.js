let _ = require('lodash')
let input = require('fs').readFileSync('input', 'utf-8')

let elves = []
for (let i = 0; i < +input; i ++){
    elves[i] = i+1
}

while(elves.length > 1){
    if (elves.length % 2 ==0){
        elves = _.filter(elves, (v, i) => {
            return i % 2 == 0
        })
    } else {
        elves = _.filter(elves, (v, i) => i % 2 == 0)
        let last = _.pullAt(elves, elves.length-1)
        elves.unshift(last[0])
    }
}

console.log(elves[0])



