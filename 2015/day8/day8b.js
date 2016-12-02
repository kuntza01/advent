console.log(require('fs').readFileSync('input', 'utf8').split('\n')
    .reduce((r, v)=> r + v.replace(/\\|"/g, '\\+').length  - v.length + 2, 0))