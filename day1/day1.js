console.log(process.argv[2].split('').reduce((r, v, i) => v === '(' ? {r: r.r + 1} : {r: r.r - 1}, {r: 0}))

console.log(process.argv[2].split('').reduce((r, v) => r + {'(': 1, ')': -1}[v], 0))
console.log(process.argv[2].split('').reduce((r, v) => v == '(' ? r + 1 : r - 1, 0))
