let _ = require('lodash')
let vals = require('fs').readFileSync('input', 'utf-8').split('\n').map(v => v.split(''))

let maxY = vals.length
let maxX = vals[0].length

let starts = {}
for (let y = 0; y< maxY; y++){
    for (let x = 0; x < maxX; x++){
        if (vals[y][x] != '.' && vals[y][x] != '#'){
            starts[vals[y][x]] = {x:x, y:y, len: 0}
        }
    }
}

let nums = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {}
}


for (let i = 0; i < 8; i++){
    //find goals
    let goals = [1,2,3,4,5,6,7].filter(v => v > i)
    for(let n = 0; n < goals.length; n++){
        let pos = starts[i]
        let goal = starts[goals[n]]
        let visited = []
        let next = []
        while(pos.x != goal.x || pos.y != goal.y){
            visited.push(pos)
            if(pos.x < maxX && vals[pos.y][pos.x+1] != '#' && !_.find(visited, {x:pos.x+1, y: pos.y})){
                next.unshift({x:pos.x+1, y: pos.y, prev: pos, len: pos.len+1})
            }
            if(pos.x > 0 && vals[pos.y][pos.x-1] != '#' && !_.find(visited, {x:pos.x-1, y: pos.y})){
                next.unshift({x:pos.x-1, y: pos.y, prev: pos, len: pos.len+1})
            }
            if(pos.y < maxY && vals[pos.y+1][pos.x] != '#' && !_.find(visited, {x:pos.x, y: pos.y+1})){
                next.unshift({x:pos.x, y: pos.y+1, prev: pos, len: pos.len+1})
            }
            if(pos.y > 0 && vals[pos.y-1][pos.x] != '#' && !_.find(visited, {x:pos.x, y: pos.y-1})){
                next.unshift({x:pos.x, y: pos.y-1, prev: pos, len: pos.len+1})
            }

            next = _.sortBy(next, v => {
                return v.len + Math.abs(goal.x - v.x) + Math.abs(goal.y - v.y)
            }).reverse()
            pos = next.pop()
        }
        nums[i][goals[n]] = pos.len
        nums[goals[n]][i] = pos.len
    }
}

let path = {cur:0, path:[0], len:0}
let next = []
while(path.path.length < 8){
        for(let i = 0; i < 8; i++){
            if (!path.path.includes(i)){
                let newpath = _.cloneDeep(path.path)
                newpath.push(i)
                next.unshift({cur:i, path:newpath, len: path.len+nums[path.cur][i]})
            }
        }
        next = _.sortBy(next, v => v.len).reverse()
        path = next.pop()
}
console.log(path.len)
