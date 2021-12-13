// EventEmitter class
const EventEmitter = require('events')

// Instance/Object of EventEmitter class
const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id)=>{
    console.log(`Data Received $ User : ${name} ID : ${id}`)
})
customEmitter.on('response', ()=>{
    console.log(`Some other logic here`)
})
customEmitter.emit('response', 'John', 34)