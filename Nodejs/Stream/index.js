const RandomNumberStream = require('./randomStream');
const rns = new RandomNumberStream()

// rns.pipe(process.stdout)
rns.on('data', chunk => {
    console.log(chunk)
})
