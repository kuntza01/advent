let _ = require('lodash')


let signal = ''
let reg = {
    a: 0,
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

let inc = val => reg[val] = reg[val]+1
let dec = val => reg[val] = reg[val]-1
let jnz = (val, inst) => {
    val = +val == 0 ? 0 : +val ? +val : reg[val]
    inst = +inst == 0 ? 0 : +inst ? +inst : reg[inst]

    if (val !=0){
        pointer += +inst-1
    }
}

let out = val => {
    val = +val == 0 ? 0 : +val ? +val : reg[val]
    signal += val
}


let i = 0
let vals = require('fs').readFileSync('input', 'utf-8').split('\n')
for (i; !/^(01)+$/.test(signal); i++){
    signal = ''
    reg = {
        a: i,
        b: 0,
        c: 0,
        d: 0,
    }
    pointer = 0
    vals = require('fs').readFileSync('input', 'utf-8').split('\n')
    for (pointer; pointer != vals.length && signal.length <10; pointer++){
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
console.log(i-1)
