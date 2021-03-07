const EventEmitter = require('events')
const http = require('http')



class Sales extends EventEmitter {
    constructor() {
        super();
        
    }
    
}
const myEmitter = new Sales(); 



myEmitter.on('newSale', ()=> {
    console.log('there was a new sale')
})
myEmitter.on('newSale', stock => {
    console.log(`there are ${stock} items remaining`)
})

myEmitter.on('newSale', ()=> console.log('new customer: rejan'))

myEmitter.emit('newSale', 9)

const server= http.createServer(); 

server.on('request', (req, res) => {
    console.log('new request logged')
})

server.listen(8000,(req, res ) => {
    console.log('server listening on port 8000 ')
})