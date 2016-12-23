let input = require('fs').readFileSync('input', 'utf-8').split('\n').map(v => {
    return v.split(' ').filter(i => i)
})


let pairs = 0
for (let i = 2; i < input.length; i ++){
    let aused = +input[i][2].split('T')[0]
    if (aused != 0){
        for (let n = 2; n < input.length; n++){
            if (n != i){
                let bavail = +input[n][3].split('T')[0]
                if (bavail > aused) {
                    pairs++
                }
            }
        }
    }
}

console.log(pairs)