console.log(process.argv[2].split('').reduce((r, v, i) => v === '(' ? {r: r.r+1} : {r: r.r-1}, {r: 0}))
