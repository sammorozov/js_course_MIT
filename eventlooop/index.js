const fs = require('fs')
const dns = require('dns')
const { error } = require('console')


function timestamp(){
    return performance.now().toFixed(2)
}

console.log('prog started')

//timeots
setTimeout(() => console.log('time 1', timestamp()), 0)
setTimeout(() => {
    process.nextTick(() => console.log('next tick 2', timestamp()))
    console.log('time 2', timestamp())
}, 10)

// close
fs.writeFile('./test.txt', 'hello from node js', () => console.log('info has been written', timestamp()))


//promises
Promise.resolve().then(() => console.log('Promise 1', timestamp()))


// next tick
process.nextTick(() => console.log('text next tick 1', timestamp()))


// setImm (check) 
setImmediate(() => console.log('SETIMMEDIATE', timestamp()))


// I / O
dns.lookup('localhost', (err, address, family) => {
    console.log('dns 1 localhost', address, timestamp())
})

console.log('prog end')


