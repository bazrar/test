const fs= require('fs')
const crypto = require('crypto')

const start =  Date.now(); 

//configure thereadpool size
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(()=> console.log('timer 1 finished' , 0.1))
setImmediate(()=> console.log('immediate one finished'))
 fs.readFile('./test-file.txt', 'utf-8', (err, data) => {
    console.log('i/o finished')
    console.log('___________________________')
    setTimeout(()=> console.log('timer 2 finished' , 0))
    setTimeout(()=> console.log('timer 3 finished' , 3000), 3000)
    setImmediate(()=> console.log('immediate 2 finished'))

    process.nextTick(()=> console.log('process.nextTick'))
    crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', ()=>{
        console.log(Date.now() - start)
        console.log('password encrypted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024,'sha512', ()=>{
        console.log(Date.now() - start)
        console.log('password encrypted')
    })

    console.log(data)
})

// console.log(output)
// console.log('hello from the top level code')
// console.log('###########################')

