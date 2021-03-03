const fs = require('fs')

//blocking synchronous way
// const fileIn = fs.readFileSync('./test.txt', 'utf-8')

// const textOut = `this is a new file and it contains the content from the file test.txt as follows:
//  ${fileIn} createdOn: ${new Date()}`; 

//  fs.writeFileSync('./output.txt', textOut )
//  console.log('file written')


 // non-blocking async way 

 //example of callback hell
 const data='test'
 console.log(`./${data}.txt`)
 fs.readFile('./start.txt', 'utf-8', (err, data) => {
    //  let res= data.trim();
    //  console.log(res)
     fs.readFile(`./${data}.txt`, 'utf-8', (err, data1) => {
         fs.readFile('./append.txt', 'utf-8', (err,data2) => {
            //  console.log(data2)
            fs.writeFile('./newFile.txt', `${data1}\n${data2}`, 'utf-8', err=> {
                console.log('## your file has been written ##')
            })
         })
     })
 })

 console.log('will read file! ')