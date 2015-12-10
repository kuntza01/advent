var fs = require('fs')
var obj = fs.readFileSync('input', 'utf8').split('\n').reduce((r, v) => {
    var lights = /(\w*)\s(\d*),(\d*)\s(\w*)\s(\d*),(\d*)/g.exec(v)
    for(i=parseInt(lights[2]);i<=parseInt(lights[5]);i++) {
        for (j = parseInt(lights[3]); j <= parseInt(lights[6]); j++) {
            if(lights[1]=='on'){
                r[`${i},${j}`] = r[`${i},${j}`] ? r[`${i},${j}`]+1 : 1
            } else if(lights[1]==='off'){
                r[`${i},${j}`] = r[`${i},${j}`] > 0 ? r[`${i},${j}`]-1 : 0
            } else if(lights[1]==='toggle'){
                r[`${i},${j}`] = r[`${i},${j}`] ? r[`${i},${j}`]+2 : 2
            }
        }
    }
    return r
},{})
console.log(Object.keys(obj).reduce((r,v)=> r+obj[v],0))
