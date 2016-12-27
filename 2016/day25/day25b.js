let _ = require('lodash')
let vals = require('fs').readFileSync('input', 'utf-8').split('\n')

let signal = ''
let reg = {
    a: 2,
    b: 0,
    c: 0,
    d: 0,

}
let pointer = 0

let cpy = (val, loc) => {
    if (+val || +val == 0){
        reg[loc] = +val
    } else {
        reg[loc] = reg[val]
    }
}

let inc = val => {
    if (vals[pointer+1].split(' ')[0] == 'dec' || vals[pointer+1].split(' ')[0] == 'inc' &&
        vals[pointer+2].split(' ')[0] == 'jnz'){
        let addedTo = vals[pointer+2].split(' ')[1]
        let add = val == addedTo ? vals[pointer+1].split(' ')[1] : val
        if (vals[pointer+3].split(' ')[0] == 'dec' || vals[pointer+3].split(' ')[0] == 'inc' &&
            vals[pointer+4].split(' ')[0] == 'jnz') {
            let mult = vals[pointer+4].split(' ')[1]
            reg[add] += reg[mult]*reg[addedTo]
            reg[addedTo] = 0
            reg[mult] = 0
            pointer+=4
        } else {
            reg[add] += reg[addedTo]
            reg[addedTo] = 0
            pointer+=2
        }

    } else {
        reg[val] = reg[val]+1
    }
}
let dec = val => {
    reg[val] = reg[val]-1
}
let jnz = (val, inst) => {
    val = +val == 0 ? +val : +val ? +val : reg[val]

    inst = +inst == 0 ? +inst : +inst ? +inst : reg[inst]
    if (val !=0){
        pointer += +inst-1
    }
}

let out = x => {
    signal += reg[x]
    //console.log(signal)
}


let i = 0
for (i; !/(01)+$/.test(signal); i++){
    signal = ''
    reg = {
        a: i,
        b: 0,
        c: 0,
        d: 0,
    }
    for (pointer; pointer != vals.length && signal.length < 20; pointer++){
        let com = vals[pointer].split(' ')
        if (com[0] == 'cpy' && !+com[2]){
            cpy(com[1], com[2])
        } else if (com[0] == 'inc' && !+com[1]){
            inc(com[1])
        } else if (com[0] == 'dec' && !+com[1]){
            dec(com[1])
        } else if (com[0] == 'jnz'){
            jnz(com[1], com[2])
        } else if (com[0] == 'out'){
            out(com[1])
        }
    }
}
console.log(i)
