let _ = require('lodash')
let vals = require('fs').readFileSync('input', 'utf-8').split('\n')

let reg = {
    a: 12,
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
    val = +val ? +val : reg[val]
    inst = +inst ? +inst : reg[inst]
    if (val !=0){
        pointer += +inst-1
    }
}
let tgl = val => {
    val = +val ? +val : reg[val]
    let com = vals[pointer+val]
    if (com){
        com = com.split(' ')
        if (com.length == 2){
            if (com[0] == 'inc'){
                vals[pointer+val] = `dec ${com[1]}`
                return
            }
            vals[pointer+val] = `inc ${com[1]}`
            return
        } else if (com.length == 3){
            if (com[0] == 'jnz'){
                vals[pointer+val] = `cpy ${com[1]} ${com[2]}`
                return
            }
            vals[pointer+val] = `jnz ${com[1]} ${com[2]}`
            return
        }
    }

}

for (pointer; pointer != vals.length; pointer++){
    let com = vals[pointer].split(' ')
    if (com[0] == 'cpy' && !+com[2]){
        cpy(com[1], com[2])
    } else if (com[0] == 'inc' && !+com[1]){
        inc(com[1])
    } else if (com[0] == 'dec' && !+com[1]){
        dec(com[1])
    } else if (com[0] == 'jnz'){
        jnz(com[1], com[2])
    } else if (com[0] == 'tgl'){
        tgl(com[1])
    }
}

console.log(reg['a'])
