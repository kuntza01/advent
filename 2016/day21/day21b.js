let _ = require('lodash')
let input = require('fs').readFileSync('input', 'utf-8').split('\n').reverse()

let swapLetter = (string, x, y) => {
    return string.split('').map(v => {
        if (v == x) {
            return y
        }
        if (v == y) {
            return x
        }
        return v
    }).join``
}

let swapPos = (string, x, y) => {
    let newString = string.split('')
    newString[x] = string[y]
    newString[y] = string[x]
    return newString.join``
}

let rotateLeft = (string, x) => {
    let temp = string
    for (let i = 0; i < x; i++) {
        temp = temp.substring(1) + temp[0]
    }
    return temp
}


let rotateRight = (string, x) => {
    let temp = string
    for (let i = 0; i < x; i++) {
        temp = temp[temp.length - 1] + temp.substring(0, temp.length - 1)
    }
    return temp
}

let rotateBy = (string, x) => {
    let index = string.indexOf(x)
    if (index >= 4) {
        return rotateRight(string, 2 + index)
    }
    return rotateRight(string, 1 + index)
}

let derotateBy = (string, x) => {
    let index = string.indexOf(x)
    if (index == 0) return rotateLeft(string, 1)
    if (index == 1) return rotateLeft(string, 1)
    if (index == 2) return rotateRight(string, 2)
    if (index == 3) return rotateLeft(string, 2)
    if (index == 4) return rotateRight(string, 1)
    if (index == 5) return rotateLeft(string, 3)
    if (index == 6) return string
    if (index == 7) return rotateLeft(string, 4)
}

let reverse = (string, x, y) => {
    let mid = string.substring(x, y + 1).split('').reverse().join``
    return string.substring(0, x) + mid + string.substring(y + 1)
}

let move = (string, x, y) => {
    let s = string.split('')
    let char = _.pullAt(s, x)
    s.splice(y, 0, char)
    return s.join``
}


let unscramble = x => {
    return input.reduce((r, v) => {
        console.log(r)
        if (/move/.test(v)) {
            let [a,from,to] = /[^[0-9]*([0-9]*)[^[0-9]*([0-9]*)/.exec(v)
            console.log('move', from, to)
            return move(r,+to, +from)
        } else if (/swap position/.test(v)) {
            let [a,from,to] = /[^[0-9]*([0-9]*)[^[0-9]*([0-9]*)/.exec(v)
            console.log('swapPos', from, to)
            return swapPos(r, +from, +to)
        } else if (/swap letter/.test(v)) {
            let [a,from,to] = /swap letter (.) with letter (.)/.exec(v)
            console.log('swap letter', from, to)
            return swapLetter(r, from, to)
        } else if (/reverse/.test(v)) {
            let [a,from,to] = /[^[0-9]*([0-9]*)[^[0-9]*([0-9]*)/.exec(v)
            console.log(reverse(r, +from, +to))
            return reverse(r, +from, +to)
        } else if (/rotate right/.test(v)) {
            let [a,from] = /[^[0-9]*([0-9]*)/.exec(v)
            console.log('rot right', from)
            return rotateLeft(r, +from)
        } else if (/rotate left/.test(v)) {
            let [a,from] = /[^[0-9]*([0-9]*)/.exec(v)
            console.log('rot left', from)
            return rotateRight(r, +from)
        } else if (/rotate based/.test(v)) {
            let [val] = /(.)$/.exec(v)
            console.log('rot by', val)
            return derotateBy(r, val)
        }
        console.log('?')
    }, x)
}

console.log(unscramble('fbgdceah'))
