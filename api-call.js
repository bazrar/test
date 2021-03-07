const fs = require('fs')
const axios = require('axios')

const server = require('http').createServer();

server.listen(8000,()=>console.log('listening ...'))
server.on('request', (req, res) => {
     fs.readFile(`${__dirname}/dogs.txt`, 'utf-8', (err, data) => {
         if(err) return res.end(err)
        axios.get(`https://dog.ceo/api/breed/${data}/images/random`)
        .then(res => {
            console.log(res.data)
          fs.writeFile(`${__dirname}/dog-img.txt`, res.data.message, err => console.log(err))
        })
        .catch(err => console.log(err))
    })
})
