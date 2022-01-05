const {createReadStream} = require('fs');
const { result } = require('lodash');

const stream = createReadStream('./content/big.txt');

stream.on('data', (result)=>{
    console.log(result)
})

// reading the big file in chunks
// Use the event to read (data event)
// last buffer is remainder
// default buffer size (chunk size) - 64kb