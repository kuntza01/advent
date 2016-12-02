console.log(process.argv[2].split('').reduce((r, v, i) => {
        var o = {};
        o = v === '(' ? {r: r.r+1} : o = {r: r.r-1};
        o.i = (r.i === 0 && r.r === -1) ? i : r.i;
        return o;
    }
    , {r: 0, i: 0}
))
