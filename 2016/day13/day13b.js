let _ = require('lodash')
let input = 1352

let formula = (x,y) => {
    let answer = (x*x + 3*x + 2*x*y + y + y*y + input).toString(2)
    let ones = answer.split('').filter(v => v==1).length
    return ones % 2 == 0 ? '.' : '#'
}

let visited = []
let next = []
let pos = {x:1, y:1, path: 0}
while (pos.path != 51){
    visited.push(pos)
    if (formula(pos.x+1, pos.y) == '.' && !_.find(visited, v => v.x == pos.x+1 && v.y == pos.y)){
        next.unshift({x:pos.x+1, y:pos.y, path: pos.path+1})
    }
    if (formula(pos.x, pos.y+1) == '.' && !_.find(visited, v => v.x == pos.x && v.y == pos.y+1)){
        next.unshift({x:pos.x, y:pos.y+1, path: pos.path+1})
    }
    if (formula(pos.x-1, pos.y) == '.' && !_.find(visited, v => v.x==pos.x-1 && v.y==pos.y) && pos.x-1 >= 0){
        next.unshift({x:pos.x-1, y:pos.y,  path: pos.path+1})
    }
    if (formula(pos.x, pos.y-1) == '.' && !_.find(visited, v => v.x==pos.x && v.y==pos.y-1) && pos.y-1 >= 0){
        next.unshift({x:pos.x, y:pos.y-1, path: pos.path+1})
    }
    let potential = next.pop()
    while(_.find(visited, v => v.x == potential.x && v.y == potential.y)){
        potential = next.pop()
    }
    pos = potential
}

console.log(visited.length)