var fs = require('fs')
var history = {0:{0:1}}
var unique = 1
var input = 1
fs.readFileSync('input', 'utf8').split('').reduce((r, v) => {
    input++
    if(input%2===0){
        if (v === '^') {
            if (!history[r.s.x][r.s.y+1]){
                unique++
                history[r.s.x][r.s.y+1] = 1
            } else {
                history[r.s.x][r.s.y+1]++
            }
            return {s:{x:r.s.x, y:r.s.y+1}, r:r.r}
        }
        if (v === 'v') {
            if (!history[r.s.x][r.s.y-1]){
                unique++
                history[r.s.x][r.s.y-1] = 1
            } else {
                history[r.s.x][r.s.y-1]++
            }
            return {s:{x:r.s.x, y:r.s.y-1}, r:r.r}
        }
        if (v === '>') {
            if (!history[r.s.x+1]){
                unique++
                history[r.s.x+1] = {[r.s.y]:1}
            } else if (!history[r.s.x+1][r.s.y]) {
                history[r.s.x+1][r.s.y] = 1
                unique++
            } else {
                history[r.s.x+1][r.s.y]++
            }
            return {s:{x:r.s.x+1, y:r.s.y}, r:r.r}
        }
        if (v === '<') {
            if (!history[r.s.x-1]){
                unique++
                history[r.s.x-1] = {[r.s.y]:1}
            } else if (!history[r.s.x-1][r.s.y]) {
                history[r.s.x-1][r.s.y] = 1
                unique++
            } else {
                history[r.s.x-1][r.s.y]++
            }
            return {s:{x:r.s.x-1, y:r.s.y}, r:r.r}
        }
    } else {
        if (v === '^') {
            if (!history[r.r.x][r.r.y+1]){
                unique++
                history[r.r.x][r.r.y+1] = 1
            } else {
                history[r.r.x][r.r.y+1]++
            }
            return {s:r.s, r:{x:r.r.x, y:r.r.y+1}}
        }
        if (v === 'v') {
            if (!history[r.r.x][r.r.y-1]){
                unique++
                history[r.r.x][r.r.y-1] = 1
            } else {
                history[r.r.x][r.r.y-1]++
            }
            return {s:r.s, r:{x:r.r.x, y:r.r.y-1}}
        }
        if (v === '>') {
            if (!history[r.r.x+1]){
                unique++
                history[r.r.x+1] = {[r.r.y]:1}
            } else if (!history[r.r.x+1][r.r.y]) {
                history[r.r.x+1][r.r.y] = 1
                unique++
            } else {
                history[r.r.x+1][r.r.y]++
            }
            return {s:r.s, r:{x:r.r.x+1, y:r.r.y}}
        }
        if (v === '<') {
            if (!history[r.r.x-1]){
                unique++
                history[r.r.x-1] = {[r.r.y]:1}
            } else if (!history[r.r.x-1][r.r.y]) {
                history[r.r.x-1][r.r.y] = 1
                unique++
            } else {
                history[r.r.x-1][r.r.y]++
            }
            return {s:r.s, r:{x:r.r.x-1, y:r.r.y}}
        }
    }
}, {s:{x: 0, y: 0}, r:{x:0, y:0}})

console.log(history, unique)