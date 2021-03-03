const fs = require('fs')
const fileIn = fs.readFileSync('./test.txt', 'utf-8')

const textOut = `this is a new file and it contains the content from the file test.txt as follows:
 ${fileIn} createdOn: ${new Date()}`; 

 fs.writeFileSync('./output.txt', textOut )
 console.log('file written')