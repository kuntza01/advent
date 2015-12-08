var fs = require('fs')
var history = {0:{0:1}}
var unique = 1
fs.readFileSync('input', 'utf8').split('').reduce((r, v) => {
    if (v === '^') {
        if (!history[r.x][r.y+1]){
            unique++
            history[r.x][r.y+1] = 1
        } else {
            history[r.x][r.y+1]++
        }
        return {x:r.x, y:r.y+1}
    }
    if (v === 'v') {
        if (!history[r.x][r.y-1]){
            unique++
            history[r.x][r.y-1] = 1
        } else {
            history[r.x][r.y-1]++
        }
        return {x:r.x, y:r.y-1}
    }
    if (v === '>') {
        if (!history[r.x+1]){
            unique++
            history[r.x+1] = {[r.y]:1}
        } else if (!history[r.x+1][r.y]) {
            history[r.x+1][r.y] = 1
            unique++
        } else {
            history[r.x+1][r.y]++
        }
        return {x:r.x+1, y:r.y}
    }
    if (v === '<') {
        if (!history[r.x-1]){
            unique++
            history[r.x-1] = {[r.y]:1}
        } else if (!history[r.x-1][r.y]) {
            history[r.x-1][r.y] = 1
            unique++
        } else {
            history[r.x-1][r.y]++
        }
        return {x:r.x-1, y:r.y}
    }
}, {x: 0, y: 0})

console.log(history, unique)