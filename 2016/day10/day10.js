let _ = require('lodash')
let vals = require('fs').readFileSync('input', 'utf-8').split('\n')

let rules = {}
vals.forEach(val => {
    let inst = val.match(/(\w*) ([0-9]+)/g)
    if (inst.length == 3){
        if (!rules[`${inst[0]}`]){
            rules[`${inst[0]}`] = {
                low: '',
                high: '',
                chips: []
            }
        }
        rules[`${inst[0]}`].low = inst[1]
        rules[`${inst[0]}`].high = inst[2]
    }
    else {
        if (!rules[`${inst[1]}`]) {
            rules[`${inst[1]}`] = {
                high: '',
                low: '',
                chips: []
            }
        }
        rules[`${inst[1]}`].chips.push(parseInt(inst[0].split(' ')[1]))
    }
})


while(!_.findKey(rules, val => val.chips.includes(61) && val.chips.includes(17))){
    let bot = _.findKey(rules, val => val.chips.length == 2)
    if (!rules[rules[bot].high]) {
        rules[rules[bot].high] = {chips:[]}
    }
    if (!rules[rules[bot].low]) {
        rules[rules[bot].low] = {chips:[]}
    }
    rules[rules[bot].low].chips.push(_.min(rules[bot].chips))
    rules[rules[bot].high].chips.push(_.max(rules[bot].chips))
    rules[bot].chips = []
}

console.log(_.findKey(rules, val => val.chips.includes(61) && val.chips.includes(17)))


//not 189, too high