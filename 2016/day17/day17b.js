let input = require('fs').readFileSync('input', 'utf-8')
let md5 = require('crypto')
let _ = require('lodash')

let open = [ 'b', 'c', 'd', 'e', 'f']
let used = []
let next = []
let go = true
let pos = {x:0, y:0, prev: null, hash: input}
while (next.length || go){
    go = false
    let potential =  md5.createHash('md5').update(pos.hash).digest('hex')
    if(pos.x != 3 || pos.y != 3){
        if (open.includes(potential[0]) && pos.y-1 >= 0){
            next.unshift({x:pos.x, y:pos.y-1, prev: pos, hash: pos.hash+'U'})
        }
        if (open.includes(potential[1]) && pos.y+1 < 4){
            next.unshift({x:pos.x, y:pos.y+1, prev: pos, hash: pos.hash+'D'})
        }
        if (open.includes(potential[2]) && pos.x-1 >=0){
            next.unshift({x:pos.x-1, y:pos.y, prev: pos, hash: pos.hash+'L'})
        }
        if (open.includes(potential[3]) && pos.x +1 < 4){
            next.unshift({x:pos.x+1, y:pos.y, prev: pos, hash: pos.hash+'R'})
        }
    }

    pos = next.pop()
    if (pos.x == 3 && pos.y == 3){
        used.push(pos)
    }
}

let res = ''
pos = _.sortBy(used, p => p.length)[used.length-1]
while(pos.prev){
    res += pos.hash[pos.hash.length-1]
    pos = pos.prev
}
console.log(res.split('').reverse().length)
