let _ = require('lodash')

let vals = require('fs').readFileSync('input', 'utf-8').split('\n')

let reg = {
    a: 0,
    b: 0,
    c: 1,
    d: 0,

}
let pointer = 0

let cpy = (val, loc) => {
    if (parseInt(val)){
        reg[loc] = parseInt(val)
    } else {
        reg[loc] = reg[val]
    }
}

let inc = val => reg[val] = reg[val]+1
let dec = val => reg[val] = reg[val]-1
let jnz = (val, inst) => {
    if (reg[val] !=0){
        pointer += parseInt(inst)-1
    }
}


for (pointer; pointer != vals.length; pointer++){

    let com = vals[pointer].split(' ')
    if (com[0] == 'cpy'){
        cpy(com[1], com[2])
    } else if (com[0] == 'inc'){
        inc(com[1])
    } else if (com[0] == 'dec'){
        dec(com[1])
    } else if (com[0] == 'jnz'){
        jnz(com[1], com[2])
    }
}

console.log(reg['a'])