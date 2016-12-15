var fs = require('fs')
let _ = require('lodash')
let cities = fs.readFileSync('input', 'utf8').split('\n').reduce((r,v)=> {
    var m = v.split(' ')
    if(!r[m[0]]){
        r[m[0]] = {}
    }
    if(!r[m[2]]){
        r[m[2]] = {}
    }
    r[m[0]][m[2]] = r[m[2]][m[0]] = m[4]
    return r
}, {})
console.log(cities)


let move = (curCity, visited) => {
    console.log('here', cities[curCity])
    let clist = _.filter(cities[curCity], c => !visited.contains(c))
    if (clist.length == 0){
        return 0
    } else {
        let next = clist[0]
        console.log(`${curCity} to ${next}: ${cities[curCity[next]]}`)
        return move(next, [next].concat(visited)) + parseInt(cities[curCity][next])
    }
}


let paths = _.keys(cities)
_.keys(paths).forEach((i,from) => {
    console.log(from)
    console.log(move(from, [from]))
})






//for each starting city
//for each next city
//go to each next city
//continue till all paths met
//pick a city -> then move to another city (not been visited) -> continue till all visited

