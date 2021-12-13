const EventEmitter = require('events'); //class

const emitter = new EventEmitter(); //object, instance of EventEmitter

//Register a listener for an event
emitter.on('messageLogged', function(arg){ //refer argument as arg, e ,eventArg
    console.log('Listener called', arg);
})

//Arrow function
emitter.on('messageLogged', (arg) => { //refer argument as arg, e ,eventArg
    console.log('Listener called', arg);
})

//Raise and event
emitter.emit('messageLogged', {id :1, url : 'http://'}); //emit = Making a noise, produce - singaling 
//object is the event argument {id :1, url : 'http://'}

const log = require('./loggerEvent');
log('message');