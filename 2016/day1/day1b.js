let fs = require('fs')
let _ = require('lodash')

let f = fs.readFileSync('input','utf-8')
let x = 0
let y = 0
let head = 'N'

let right = {
    'N': 'E',
    'E': 'S',
    'S': 'W',
    'W': 'N'
}

let left = {
    'N': 'W',
    'E': 'N',
    'S': 'E',
    'W': 'S'
}

let move = {
    'N' : y++,
    'S' : y--,
    'E' : x++,
    'W' : x--
}

let arr = []

f.split(', ').forEach((v) => {

    let dir = v[0]
    let dist = v.slice(1)


    if (dir == 'R'){
        head = right[head]
    } else {
        head = left[head]
    }

    for(let i=0; i < dist; i++) {
       move[head]

        if (_.find(arr, val => val.x == x && val.y == y)){
            console.log("Answer: ",Math.abs(x)+Math.abs(y))
        }
        arr.push({x:x, y:y})

    }
})

console.log(Math.abs(x)+Math.abs(y))

//111