const fs = require('fs')
const http=  require('http')
const url = require('url')


//##############/blocking synchronous way###############
// const fileIn = fs.readFileSync('./test.txt', 'utf-8')

// const textOut = `this is a new file and it contains the content from the file test.txt as follows:
//  ${fileIn} createdOn: ${new Date()}`;

//  fs.writeFileSync('./output.txt', textOut )
//  console.log('file written')


 // non-blocking async way

 // ############ example of callback hell ############
//  const data='test'
//  console.log(`./${data}.txt`)
//  fs.readFile('./start.txt', 'utf-8', (err, data) => {
//     //  let res= data.trim();
//     //  console.log(res)
//      fs.readFile(`./${data}.txt`, 'utf-8', (err, data1) => {
//          fs.readFile('./append.txt', 'utf-8', (err,data2) => {
//             //  console.log(data2)
//             fs.writeFile('./newFile.txt', `${data1}\n${data2}`, 'utf-8', err=> {
//                 console.log('## your file has been written ##')
//             })
//          })
//      })
//  })

//  console.log('will read file! ')

//############## server #############
const replaceTemplate = (temp, product) => {
    let output  = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%PRICE%}/g, product.price)
    output = output.replace(/{%FROM%}/g, product.from)
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients)
    output = output.replace(/{%QUANTITY%}/g, product.quantity)
    output = output.replace(/{%DESCRIPTION%}/g, product.description)
    output = output.replace(/{%ID%}/g, product.id)

    if(!product.organic) {
        output = output.replace(/{%NOTORGANIC%}/g, 'not-organic')

    }

    return output;
}
const templateOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const templateCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const templateProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj= JSON.parse(data)
const server = http.createServer((req, res) => {
    const pathName = req.url;
    // console.log(pathName)

    //overview page
    if (pathName ==='/' || pathName === '/overview' ){
        res.writeHead(200, {'Content-type': 'text/html'})
        const cardsHtml = dataObj.map(el => replaceTemplate(templateCard,el)).join('')
        // console.log(cardsHtml)
        const output = templateOverview.replace(/%PRODUCT_CARDS%/g, cardsHtml)
        res.end(output)

    }

    //products page
    else if(pathName === '/product'){
        res.end('this is the PRODUCTS page')
    }

    //api
    else if(pathName === '/api') {
        // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err,data) => {
        //     const newData = JSON.parse(data)
            // 
            // res.writeHead(200, { 'Content-Type': 'text/html' });
            // console.log(newData)
            res.writeHead(200, {'Content-type': 'application/json', 'my-header': 'this is my header'})
            res.end(data)
        // })
    }

    // not found
    else{
        res.writeHead(404, {
            'Content-type': 'text/html'
        })
        res.end("<h1>page not found</h1>")
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to request on port 8000')
})