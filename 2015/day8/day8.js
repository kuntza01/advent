console.log(require('fs').readFileSync('input', 'utf8').split('\n')
    .reduce((r, v)=> r + v.length - v.replace(/\\[^x]|\\x../g, '*').length + 2, 0))